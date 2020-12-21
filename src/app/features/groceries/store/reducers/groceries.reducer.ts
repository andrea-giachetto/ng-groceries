import { addGrocerySuccess } from '../actions/groceries.actions';
import { Grocery } from '../../../../model/grocery.model';
import { addGrocery, deleteGrocery, loadGroceriesSuccess, setActiveGrocery } from '../actions/groceries.actions';
import { createReducer, on } from '@ngrx/store';

export interface GroceriesState {
  list: Grocery[],
  active?: Grocery;
}

const initialState: GroceriesState = {
  list: [],
  active: {} as Grocery
};

export const groceriesReducer = createReducer(
  initialState,

  on(loadGroceriesSuccess, (state, action) => {
    return {
      ...state,
      list: action.list
    }
  }),

  on(addGrocerySuccess, (state, action) => {
    return {
      ...state,
      list: [...state.list, {...action.item }]
    }
  }),

  on(deleteGrocery, (state, action) => {
    return {
      ...state,
      list: state.list.filter(item => item.id !== action.id )
    }
  }),

  on(setActiveGrocery, (state, action) => {
    return {
      ...state,
    active: { ...action.item }
    }
  }),

);
