import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceriesRoutingModule } from './groceries-routing.module';
import { PageGroceryDetailComponent } from './page-grocery-detail.component';


@NgModule({
  declarations: [
    PageGroceryDetailComponent
  ],
  imports: [
    CommonModule,
    GroceriesRoutingModule
  ]
})
export class GroceriesModule { }
