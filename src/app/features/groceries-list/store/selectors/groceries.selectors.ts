import { AppState } from "src/app/app.module";
export const selectAllGroceries = (state: AppState) => state.groceries.list
