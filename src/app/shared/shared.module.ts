import { CompleteGroceryComponent } from './components/dialog/complete-grocery.component';
import { DeleteProductDialogComponent } from './components/dialog/delete-product.component';
import { UiKitModule } from './ui-kit/ui-kit.module';
import { FabActionsComponent } from './components/fab-actions/fab-actions.component';
import { NewProductComponent } from './components/dialog/new-product.component';
import { NewGroceryComponent } from './components/dialog/new-grocery.component';
import { HeadingComponent } from './components/heading/heading.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DeleteGroceryListDialogComponent } from './components/dialog/delete-grocery-list.component';

@NgModule({
  declarations: [
    HeadingComponent,
    FabActionsComponent,
    NewGroceryComponent,
    NewProductComponent,
    DeleteProductDialogComponent,
    NavigationComponent,
    DeleteGroceryListDialogComponent,
    CompleteGroceryComponent
  ],
  imports: [
    FormsModule,
    UiKitModule
  ],
  exports: [
    HeadingComponent,
    FabActionsComponent,
    NewGroceryComponent,
    NewProductComponent,
    DeleteProductDialogComponent,
    NavigationComponent,
    DeleteGroceryListDialogComponent,
    CompleteGroceryComponent
  ],
  entryComponents: [
    NewGroceryComponent,
    NewProductComponent,
    DeleteProductDialogComponent,
    DeleteGroceryListDialogComponent,
    CompleteGroceryComponent
  ]
})
export class SharedModule { }
