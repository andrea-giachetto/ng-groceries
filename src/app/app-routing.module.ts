import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageShoppingListComponent } from './features/page-shopping-list/page-shopping-list.component';

const routes: Routes = [
  {path: '', component: PageShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
