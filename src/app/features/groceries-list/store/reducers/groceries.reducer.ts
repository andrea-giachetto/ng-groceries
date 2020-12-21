import { addGrocerySuccess } from './../actions/groceries.actions';
import { Grocery } from '../../../../model/grocery.model';
import { addGrocery, deleteGrocery, loadGroceriesSuccess, setActiveGrocery } from '../actions/groceries.actions';
import { createReducer, on } from '@ngrx/store';

export interface GroceryAppState {
  groceries: Grocery[],
  active?: Grocery;
}

const initialState: GroceryAppState = {
  groceries: [],
  active: {} as Grocery
};

export const groceriesReducer = createReducer(
  initialState,

  on(loadGroceriesSuccess, (state, action) => {
    return {
      ...state,
      groceries: action.groceries
    }
  }),

  on(addGrocerySuccess, (state, action) => {
    return {
      ...state,
      groceries: [...state.groceries, {...action.grocery }]
    }
  }),

  on(deleteGrocery, (state, action) => {
    return {
      ...state,
      groceries: state.groceries.filter(item => item.id !== action.id )
    }
  }),

  on(setActiveGrocery, (state, action) => {
    return {
      ...state,
    active: { ...action.grocery }
    }
  }),

);
