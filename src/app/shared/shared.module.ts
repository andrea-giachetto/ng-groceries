import { UiKitModule } from './ui-kit/ui-kit.module';
import { FabActionsComponent } from './components/fab-actions/fab-actions.component';
import { NewProductComponent } from './components/dialog/new-product.component';
import { NewGroceryComponent } from './components/dialog/new-grocery.component';
import { HeadingComponent } from './components/heading/heading.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    HeadingComponent,
    FabActionsComponent,
    NewGroceryComponent,
    NewProductComponent,
    NavigationComponent
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
    NavigationComponent
  ],
  entryComponents: [
    NewGroceryComponent,
    NewProductComponent
  ]
})
export class SharedModule { }
