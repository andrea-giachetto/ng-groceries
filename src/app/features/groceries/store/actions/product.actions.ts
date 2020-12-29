import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/model/product.model';

export const loadProducts = createAction(
  '[Products] Load'
)

export const loadProductsSuccess = createAction(
  '[Products] Load success',
  props<{ list: Product[] }>()
)

export const loadProductsFailed = createAction(
  '[Products] Load failed'
)

export const addProduct = createAction(
  '[Products] Add',
  props<{ product: Product }>()
)

export const addProductSuccess = createAction(
  '[Products] Add success',
  props<{ product: Product }>()
)

export const addProductFailed = createAction(
  '[Products] Add failed'
)

export const deleteProduct = createAction(
  '[Products] Delete',
  props<{ id: number }>()
)

export const toggleProductState = createAction(
  '[Products] Toggle state',
  props<{ id: number, checked: boolean }>()
)
