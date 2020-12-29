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
  props<{ grocery: Grocery }>()
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
  props<{ id: number }>()
)

export const setActiveGrocery = createAction(
  '[Grocery] set active',
  props<{ item: Grocery }>()
)
