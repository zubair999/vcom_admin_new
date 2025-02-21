import { NextResponse } from 'next/server'
import {CategoriesService} from '@/services/categories/categories.services';

const categoriesService = new CategoriesService();

export async function GET(request: Request) {
  const body = await request.json()
  console.log(body) 
    const response = await categoriesService.getAllCategories();
    return NextResponse.json(response);
}
  

export async function POST(request: Request) {

  const body = await request.json()
  return NextResponse.json({ 
    message: 'Received data', 
    data: body 
  })
}