import { getDishes } from '@/app/lib/data';
import { TDish } from '@/app/lib/definitions';
import GridItems from '../../layout/grid-items';
import { DishItem } from './dish-item';

export default async function DishesList() {
  const dishes = await getDishes();
  return (
    <>
      <GridItems>
        {dishes.map((dish: TDish) => (
          <DishItem key={dish._id} {...dish} />
        ))}
      </GridItems>
    </>
  );
}
