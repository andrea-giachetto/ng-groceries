import { AppState } from './../../../../app.module';
import { Product } from './../../../../model/product.model';
import { createSelector } from '@ngrx/store';
import { ProductsState } from './../reducers/products.reducer';
import { Grocery } from 'src/app/model/grocery.model';

export const selectAllProducts = (state: AppState) : Product[] => state.products.list;

export const selectProductsByGroceryId = createSelector(
  selectAllProducts,
  (state: Product[], props: Partial<Grocery>) => state.filter(product => product.groceryId === props.id)
)
