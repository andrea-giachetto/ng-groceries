import { AppState } from '../../../../app.module';
import { ActionReducerMap } from '@ngrx/store';
import { groceriesReducer } from './groceries.reducer';

export const reducers : ActionReducerMap<AppState> = {
  groceries: groceriesReducer,
}
