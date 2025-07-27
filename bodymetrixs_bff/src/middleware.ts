import { NextRequest, NextResponse } from 'next/server';

// 1. Specify protected and public routes
const protectedRoutes = ['/api/measurements', '/api/diseases', '/api/create-checkout', '/api/payment'];
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
      // 4. For Edge Runtime, we'll just pass the token through
      // The actual JWT verification will be done in the API routes
      const requestHeaders = new Headers(req.headers);
      requestHeaders.set('x-auth-token', token);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error('Middleware error:', error);
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
  }

  // 5. Allow public routes to pass through
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}; 