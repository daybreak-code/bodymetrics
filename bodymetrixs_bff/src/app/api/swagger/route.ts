import { NextResponse } from 'next/server';
import { getApiDocs } from '../../../lib/swagger';

export async function GET() {
  try {
    const spec = getApiDocs();
    
    if (!spec) {
      console.error('Swagger spec is null or undefined');
      return NextResponse.json(
        { error: 'Failed to generate API documentation - spec is null' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(spec);
  } catch (error) {
    console.error('Error generating Swagger spec:', error);
    
    // 提供更详细的错误信息
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    return NextResponse.json(
      { 
        error: 'Failed to generate API documentation',
        details: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? errorStack : undefined
      },
      { status: 500 }
    );
  }
} 