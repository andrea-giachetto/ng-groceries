import { SharedModule } from './../../shared/shared.module';
import { UiKitModule } from './../../shared/ui-kit/ui-kit.module';
import { PageGroceriesListComponent } from './page-groceries-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceriesRoutingModule } from './groceries-routing.module';
import { PageGroceryDetailComponent } from './page-grocery-detail.component';

@NgModule({
  declarations: [
    PageGroceriesListComponent,
    PageGroceryDetailComponent
  ],
  imports: [
    CommonModule,
    GroceriesRoutingModule,
    UiKitModule,
    SharedModule
  ]
})
export class GroceriesModule { }
