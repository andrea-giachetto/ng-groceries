import { Product } from './product.model';

type State = 'Done' | 'In progress';

export interface Grocery {
  id?: number;
  name: string;
  state: State | 'In progress';
  deadline?: Date;
  completed?: Date;
  created?: Date;
  amount?: number;
  shoppingItems?: Product[];
}
