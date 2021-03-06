import { Product } from './../../../../model/product.model';
import { Grocery } from '../../../../model/grocery.model';
import { createAction, props } from '@ngrx/store';

export const loadGroceries = createAction(
  '[Grocery] load'
)

export const loadGroceriesSuccess = createAction(
  '[Grocery] load success from API',
  props<{ list: Grocery[] }>()
)

export const addGrocery = createAction(
  '[Grocery] add',
  props<{ grocery: Partial<Grocery> }>()
)

export const addGrocerySuccess = createAction(
  '[Grocery] add success',
  props<{ item: Grocery }>()
)

export const addGroceryFailed = createAction(
  '[Grocery] add failed'
)

export const loadGroceriesFailed = createAction(
  '[Grocery] load failed from API',
)

export const deleteGrocery = createAction(
  '[Grocery] delete',
  props<{ grocery: Partial<Grocery> }>()
)

export const deleteGrocerySuccess = createAction(
  '[Grocery] delete success',
  props<{ grocery: Partial<Grocery> }>()
)

export const deleteGroceryFailed = createAction(
  '[Grocery] delete failed'
)

export const setActiveGrocery = createAction(
  '[Grocery] set active',
  props<{ item: Grocery }>()
)

export const clearActiveGrocery = createAction(
  '[Grocery] clear active',
)

export const addProductToGrocery = createAction(
  '[Grocery] add product to grocery',
  props<{ product: Product, grocery: Partial<Grocery> }>()
)

export const addProductToGrocerySuccess = createAction(
  '[Grocery] add product to grocery success',
  props<{ product: Product, grocery: Partial<Grocery> }>()
)

export const addProductToGroceryFailed = createAction(
  '[Grocery] add product to grocery failed',
)

export const toogleProductChecked = createAction(
  '[Grocery] toogle product',
  props<{ product: Product }>()
)

export const setGroceryComplete = createAction(
  '[Grocery] set completed',
  props<{ grocery: Partial<Grocery> }>()
)

export const setGroceryCompleteSuccess = createAction(
  '[Grocery] set completed success',
  props<{ grocery: Partial<Grocery> }>()
)

export const setGroceryCompleteFailed = createAction(
  '[Grocery] set completed failed'
)
