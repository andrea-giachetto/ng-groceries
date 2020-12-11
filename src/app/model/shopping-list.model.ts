type State = 'Done' | 'In progress';

export interface ShoppingList {
  id?: string;
  name: string;
  state: State;
  completed?: Date;
  created?: Date;
  deadline?: Date;
  amount?: number;
}
