import { TProductNutritionalInformation } from '@/app/lib/definitions';

export const NutritionalValue = (
  nutritionalInformation: TProductNutritionalInformation,
) => {
  return (
    <div className="text-xs">
      <h3 className="text-sm">
        Nutritional value per 100
        {nutritionalInformation.unit_of_measurement}
      </h3>
      <ul>
        <li>
          protein: {nutritionalInformation.protein}
          {nutritionalInformation.unit_of_measurement}
        </li>
        <li>
          fat: {nutritionalInformation.fat}
          {nutritionalInformation.unit_of_measurement}
        </li>
        <li>
          carbohydrates: {nutritionalInformation.carbohydrates}
          {nutritionalInformation.unit_of_measurement}
        </li>
        <li>
          sugar: {nutritionalInformation.sugar}
          {nutritionalInformation.unit_of_measurement}
        </li>
        <li>
          fiber: {nutritionalInformation.fiber}
          {nutritionalInformation.unit_of_measurement}
        </li>
      </ul>
    </div>
  );
};
