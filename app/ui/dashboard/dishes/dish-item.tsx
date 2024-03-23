import { TDish } from '@/lib/definitions';
import GridItem from '@/ui/layout/grid-Item';
import { TextLink } from '../../links';

export function DishItem(dish: TDish) {
  return (
    <GridItem>
      <h3>
        <TextLink href={`/dashboard/dishes/${dish._id}`}>{dish.name}</TextLink>
      </h3>
      <div>{dish.description}</div>

      <ul>
        {dish.ingredience.map((i) => (
          <>
            <TextLink key={i._id} href={`/dashboard/product/${i._id}`}>
              {i.name}
            </TextLink>
            &nbsp;
          </>
        ))}
      </ul>
      <h4 className="font-medium">Cooking method:</h4>
      {dish.cooking.map((cook) => (
        <li key={cook.step}>
          {cook.step}. {cook.description}
        </li>
      ))}
    </GridItem>
  );
}
