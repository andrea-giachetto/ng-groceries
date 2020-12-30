type ProductCategory = 'meat' | 'fish' | 'veggie-fruit' | 'frozen' | 'utility';

export interface Product {
  id?: string;
  name: string;
  category: ProductCategory;
  groceryId: string;
  checked: boolean;
  //completed: boolean;
}
