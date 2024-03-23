import { TProduct } from '@/app/lib/definitions';
import ImageWrapper from '../../image-wrapper';
import { PageHeading } from '../../layout/heading';
import { ButtonLink } from '../../links';
import Tag from '../../tag';
import { NutritionalValue } from './nutritional-value';

export default async function Product({ product }: { product: TProduct }) {
  return (
    <>
      <ButtonLink href="/dashboard/products">&lt; Back</ButtonLink>

      <PageHeading>{product.name}</PageHeading>
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
    </>
  );
}
