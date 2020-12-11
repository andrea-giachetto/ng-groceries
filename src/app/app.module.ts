import { GroceryHistoryListComponent } from './features/page-shopping-list/components/grocery-history-list/grocery-history-list.component';
import { TestComp } from './test.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './core/navigation/navigation.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeadingComponent } from './shared/components/heading/heading.component';
import { FabActionsComponent } from './core/fab-actions/fab-actions.component';
import { PageShoppingListComponent } from './features/page-shopping-list/page-shopping-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NewShoppingListComponent } from './shared/components/dialog/new-shopping-list/new-shopping-list.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MonthlyGroceriesComponent } from './features/page-shopping-list/components/monthly-groceries/monthly-groceries.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    TestComp,
    NavigationComponent,
    HeadingComponent,
    FabActionsComponent,
    PageShoppingListComponent,
    GroceryHistoryListComponent,
    NewShoppingListComponent,
    MonthlyGroceriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule
  ],
  entryComponents: [
    NewShoppingListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
