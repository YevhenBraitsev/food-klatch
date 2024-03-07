import { getProducts } from '@/app/lib/data';
import { TProduct } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '../../buttons';
import ImageWrapper from '../../image-wrapper';
import Tag from '../../tag';
import { NutritionalValue } from './nutritional-value';

export const ProductsList = async () => {
  const { products } = await getProducts();
  const handleClick = () => {
    console.log('first');
  };
  return (
    <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product: TProduct) => (
        <li
          className="rounded-md bg-block p-5 bg-blend-darken shadow-md shadow-block"
          key={product._id}
        >
          <h2 className="mb-1 text-xl text-primary">
            <Link
              className="text-inherit underline hover:no-underline"
              href={`products/${product._id}`}
            >
              {product.name}
            </Link>
          </h2>
          <div className="relative">
            <Tag text={product.category} />
            <ImageWrapper
              src={product.image}
              alt={product.name}
              width={640}
              height={360}
              className="mb-2"
            />
          </div>
          <div className="mb-2">
            {product.description}
            {product.brand}
          </div>
          <NutritionalValue {...product.nutritional_information} />
          <Button
            variant="secondary"
            size="md"
            disabled={false}
            // onButtonClick={() => console.log('first')}
          >
            Button
          </Button>
        </li>
      ))}
    </ul>
  );
};
