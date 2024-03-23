import { TProduct } from '@/app/lib/definitions';
import ImageWrapper from '../../image-wrapper';
import { PageHeading } from '../../layout/heading';
import { ButtonLink } from '../../links';
import Tag from '../../tag';
import { NutritionalValue } from '../products/nutritional-value';

export default function Dish({ data }: { data: TProduct }) {
  return (
    <>
      <ButtonLink href="/dashboard/dishes">&lt; Back</ButtonLink>

      <PageHeading>{data.name}</PageHeading>
      <div className="relative">
        <Tag text={data.category} />
        <ImageWrapper
          src={data.image}
          alt={data.name}
          width={640}
          height={360}
          className="mb-2"
        />
        sadas
      </div>
      <div className="mb-2">
        {data.description}
        {data.brand}
      </div>
      <NutritionalValue {...data.nutritional_information} />
    </>
  );
}
