import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageGroceriesListComponent } from './features/groceries/page-groceries-list.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'groceries', loadChildren: () => import('./features/groceries/groceries.module').then(m => m.GroceriesModule) },
  { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
  { path: 'settings', loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) },
  { path: '**', redirectTo: '/groceries'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
