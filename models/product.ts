import mongoose, { Schema } from 'mongoose';

const productScema = new Schema(
  {
    name: String,
    category: String,
    description: String,
    image: String,
    brand: String,
    manufacturer: String,
    nutritional_information: {
      calories: Number,
      fat: Number,
      protein: Number,
      carbohydrates: Number,
      sugar: Number,
      fiber: Number,
      unit_of_measurement: String,
    },
    ingredients: Array,
    allergens: Array,
    storage_instructions: String,
    shelf_life: Number,
    price: Number,
    tags: Array,
  },
  { timestamps: true },
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productScema);

export default Product;
