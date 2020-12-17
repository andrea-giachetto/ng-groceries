import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageGroceriesListComponent } from './features/groceries-list/page-groceries-list.component';

const routes: Routes = [
  {path: '', component: PageGroceriesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
