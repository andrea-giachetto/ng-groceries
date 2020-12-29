import { productsReducer } from './products.reducer';
import { AppState } from '../../../../app.module';
import { ActionReducerMap } from '@ngrx/store';
import { groceriesReducer } from './groceries.reducer';
import { routerReducer } from '@ngrx/router-store';

export const reducers : ActionReducerMap<AppState> = {
  groceries: groceriesReducer,
  products: productsReducer,
  router: routerReducer
}
