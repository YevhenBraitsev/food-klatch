import { TProduct } from '@/app/lib/definitions';
import ImageWrapper from '../../image-wrapper';
import { ButtonLink } from '../../links';
import Tag from '../../tag';
import { NutritionalValue } from './nutritional-value';

export default async function Product({ product }: { product: TProduct }) {
  return (
    <div>
      <ButtonLink href="/dashboard/products">&lt; Back</ButtonLink>

      <h1 className="mb-1 text-xl text-primary">{product.name}</h1>
      <div className="relative">
        <Tag text={product.category} />
        <ImageWrapper
          src={product.image}
          alt={product.name}
          width={640}
          height={360}
          className="mb-2"
        />
        sadas
      </div>
      <div className="mb-2">
        {product.description}
        {product.brand}
      </div>
      <NutritionalValue {...product.nutritional_information} />
    </div>
  );
}
