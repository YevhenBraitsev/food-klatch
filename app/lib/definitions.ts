export type TProduct = {
  _id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  brand: string;
  manufacturer: string;
  nutritional_information: TProductNutritionalInformation;
  ingredients: string[];
  allergens: string[];
  storage_instructions: string;
  shelf_life: number;
  price: number;
  tags: string[];
};

export type TProductNutritionalInformation = {
  calories: number;
  fat: number;
  protein: number;
  carbohydrates: number;
  sugar: number;
  fiber: number;
  unit_of_measurement: string;
};

export type TNavLink = {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';
