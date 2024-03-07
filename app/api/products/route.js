import connectMongoDB from '@/libs/mongodb';
import Product from '@/models/product';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const {
    name,
    category,
    description,
    image,
    brand,
    manufacturer,
    nutritional_information: {
      calories,
      fat,
      protein,
      carbohydrates,
      sugar,
      fiber,
      unit_of_measurement,
    },
    ingredients,
    allergens,
    storage_instructions,
    shelf_life,
    price,
    tags,
  } = await request.json();
  await connectMongoDB();
  await Product.create({
    name,
    category,
    description,
    image,
    brand,
    manufacturer,
    nutritional_information: {
      calories,
      fat,
      protein,
      carbohydrates,
      sugar,
      fiber,
      unit_of_measurement,
    },
    ingredients,
    allergens,
    storage_instructions,
    shelf_life,
    price,
    tags,
  });
  return NextResponse.json({ message: 'Produc Created' }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Produc deleted' }, { status: 200 });
}
