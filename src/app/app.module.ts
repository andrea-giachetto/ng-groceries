import { reducers } from './features/groceries-list/store/reducers/index';
import { GroceriesEffects } from './features/groceries-list/store/effects/groceries.effects';
import { GroceryHistoryListComponent } from './features/groceries-list/components/grocery-history-list/grocery-history-list.component';
import { TestComp } from './test.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './core/navigation/navigation.component';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { HeadingComponent } from './shared/components/heading/heading.component';
import { FabActionsComponent } from './core/fab-actions/fab-actions.component';
import { PageGroceriesListComponent } from './features/groceries-list/page-groceries-list.component';
import { MatDialogModule} from '@angular/material/dialog';
import { NewGroceryComponent } from './shared/components/dialog/new-grocery/new-grocery.component';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatListModule} from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { groceriesReducer, GroceriesState } from './features/groceries-list/store/reducers/groceries.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

export interface AppState {
  groceries: GroceriesState
}

@NgModule({
  declarations: [
    AppComponent,
    TestComp,
    NavigationComponent,
    HeadingComponent,
    FabActionsComponent,
    PageGroceriesListComponent,
    GroceryHistoryListComponent,
    NewGroceryComponent
  ],
  imports: [
    HttpClientModule,
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
    MatListModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([
      GroceriesEffects
    ])
  ],
  entryComponents: [
    NewGroceryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
