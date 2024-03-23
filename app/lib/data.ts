import { unstable_noStore as noStore } from 'next/cache';
import { fetchData } from './utils';

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

export async function getDishes() {
  noStore();
  try {
    const res = await fetchData('/dishes');

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export async function getDish(id: string) {
  noStore();
  try {
    const res = await fetchData(`/dish`);

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
