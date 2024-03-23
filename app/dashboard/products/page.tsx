import { PageHeading } from '@/app/ui/layout/heading';
import { ProductsList } from '../../ui/dashboard/products/products-list';

export default async function Page() {
  return (
    <>
      <PageHeading>Products List</PageHeading>

      <ProductsList />
    </>
  );
}
