import DishesList from '@/app/ui/dashboard/dishes/dishes-list';
import { PageHeading } from '@/app/ui/layout/heading';
import { DefaultLoader } from '@/app/ui/skeleton';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <>
      <PageHeading>Dishes</PageHeading>
      <Suspense fallback={<DefaultLoader />}>
        <DishesList />
      </Suspense>
    </>
  );
}
