import { unstable_noStore as noStore } from 'next/cache';

export async function getProducts() {
  noStore();
  try {
    const res = await fetch('http://localhost:3000/api/products');

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export async function getProduct(id: string) {
  noStore();
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
