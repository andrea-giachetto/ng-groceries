import { addProductSuccess, loadProductsSuccess } from './../actions/product.actions';
import { createReducer, on } from '@ngrx/store';
import { Product } from './../../../../model/product.model';

export interface ProductsState {
  list: Product[]
}

const initialState: ProductsState = {
  list: []
}

export const productsReducer = createReducer(
  initialState,

  on(loadProductsSuccess, (state, action) => {
    return {
      ...state,
      list: [...state.list,  ...action.list ]
    }
  }),

  on(addProductSuccess, (state, action) => {
    return {
      ...state,
      list: [...state.list, { ...action.product } ]
    }
  }),
)
