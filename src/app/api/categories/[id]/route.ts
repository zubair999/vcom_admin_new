import { NextResponse } from 'next/server'


export async function GET(request: Request) {
  const body = await request.json()
  return NextResponse.json({ 
    message: 'Single category route', 
    data: body 
  })
}