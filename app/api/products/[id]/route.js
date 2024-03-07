import connectMongoDB from '@/libs/mongodb';
import Product from '@/models/product';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newCategory: category,
    newDescription: description,
    newImage: image,
    newBrand: brand,
    newManufacturer: manufacturer,
    newNutritional_information: {
      newCalories: calories,
      newAat: fat,
      newProtein: protein,
      newCarbohydrates: carbohydrates,
      newSugar: sugar,
      newFiber: fiber,
      newUnit_of_measurement: unit_of_measurement,
    },
    newIngredients: ingredients,
    newAllergens: allergens,
    newStorage_instructions: storage_instructions,
    newShelf_life: shelf_life,
    newPrice: price,
    newTags: tags,
  } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, {
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
  return NextResponse.json({ message: 'Product update' }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json(product, { status: 200 });
}
