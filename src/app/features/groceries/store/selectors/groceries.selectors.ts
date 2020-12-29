import { Grocery } from './../../../../model/grocery.model';
import { createSelector } from '@ngrx/store';
import { AppState } from './../../../../app.module';
// import { AppState } from "src/app/app.module";
export const selectAllGroceries = (state: AppState) : Grocery[] => state.groceries.list

export const selectGroceryByID = createSelector(
  selectAllGroceries,
  (state: Grocery[], props) => state.filter(grocery => grocery.id === props.id)
)
