type ProductCategory = 'meat' | 'fish' | 'veggie-fruit' | 'frozen' | 'utility';

export interface Product {
  id?: string;
  name: string;
  category: ProductCategory;
  //completed: boolean;
}
