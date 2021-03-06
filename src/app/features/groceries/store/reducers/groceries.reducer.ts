import { clearActiveGrocery, deleteGrocerySuccess, setGroceryCompleteSuccess } from './../actions/groceries.actions';
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

  on(deleteGrocerySuccess, (state, action) => {
    return {
      ...state,
      list: state.list.filter(item => item.id !== action.grocery.id )
    }
  }),

  on(setGroceryCompleteSuccess, (state, action) => {
    return {
      ...state,
      list: state.list.map(item => item.id !== action.grocery.id ? item : {...item, ...action.grocery} )
    }
  }),

  on(setActiveGrocery, (state, action) => {
    return {
      ...state,
    active: { ...action.item }
    }
  }),

  on(clearActiveGrocery, (state, action) => {
    return {
      ...state,
    active: {} as Grocery
    }
  }),

);
