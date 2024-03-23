import { getDish } from '@/app/lib/data';
import Dish from '@/app/ui/dashboard/dishes/dish';
import { DefaultLoader } from '@/app/ui/skeleton';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const dish = await getDish(params.id);
  return (
    <>
      <Suspense fallback={<DefaultLoader />}>
        <Dish data={dish} />
      </Suspense>
    </>
  );
}
