import { Grocery } from '../../../../model/grocery.model';
import { createAction, props } from '@ngrx/store';

export const addGrocery = createAction(
  '[Grocery] add',
  props<{ grocery: Grocery }>()
)

export const loadGroceries = createAction(
  '[Grocery] load'
)

export const loadGroceriesSuccess = createAction(
  '[Grocery] load success from API',
  props<{ groceries: Grocery[] }>()
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
  props<{ grocery: Grocery }>()
)
