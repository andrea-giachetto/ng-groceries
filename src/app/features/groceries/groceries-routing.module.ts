import { PageGroceryDetailComponent } from './page-grocery-detail.component';
import { PageGroceriesListComponent } from './page-groceries-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PageGroceriesListComponent },
  { path: 'details/:id', component: PageGroceryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceriesRoutingModule { }
