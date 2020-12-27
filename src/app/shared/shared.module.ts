import { UiKitModule } from './ui-kit/ui-kit.module';
import { FabActionsComponent } from './components/fab-actions/fab-actions.component';
import { NewGroceryComponent } from './components/dialog/new-grocery/new-grocery.component';
import { HeadingComponent } from './components/heading/heading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    HeadingComponent,
    FabActionsComponent,
    NewGroceryComponent,
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
    NavigationComponent
  ],
  entryComponents: [
    NewGroceryComponent
  ]
})
export class SharedModule { }
