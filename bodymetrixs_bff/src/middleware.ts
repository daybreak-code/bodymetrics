import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// 1. Specify protected and public routes
const protectedRoutes = ['/api/measurements', '/api/diseases'];
const publicRoutes = ['/api/auth/login', '/api/auth/register', '/api/auth/sync-user', '/api/swagger', '/api-docs'];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // 2. Check if the route is protected
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));

  if (isProtectedRoute) {
    // 3. Get the token from the Authorization header
    const authHeader = req.headers.get('Authorization');
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return NextResponse.json({ error: 'Authorization token not provided' }, { status: 401 });
    }

    try {
      // 4. Verify the token using the Supabase JWT secret
      const secret = new TextEncoder().encode(process.env.SUPABASE_JWT_SECRET as string);
      const { payload } = await jwtVerify(token, secret);
      
      // 5. Add user ID (from 'sub' claim) to the request headers
      const requestHeaders = new Headers(req.headers);
      requestHeaders.set('x-user-id', payload.sub as string);
      requestHeaders.set('x-user-email', payload.email as string);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error('Token verification error:', error);
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
  }

  // 6. Allow public routes to pass through
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}; 