import { getProduct } from '@/app/lib/data';
import Product from '@/app/ui/dashboard/products/product';
import { DefaultLoader } from '@/app/ui/skeleton';

import { Suspense } from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <div>
      <Suspense fallback={<DefaultLoader />}>
        <Product product={product} />
      </Suspense>
    </div>
  );
}
