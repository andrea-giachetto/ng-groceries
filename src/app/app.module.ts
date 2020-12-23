import { CoreModule } from './core/core.module';
import { UiKitModule } from './shared/ui-kit/ui-kit.module';
import { TestComp } from './test.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HeadingComponent } from './shared/components/heading/heading.component';
import { FabActionsComponent } from './core/fab-actions/fab-actions.component';
import { PageGroceriesListComponent } from './features/groceries/page-groceries-list.component';
import { NewGroceryComponent } from './shared/components/dialog/new-grocery/new-grocery.component';
import { FormsModule } from '@angular/forms';
import { GroceriesState } from './features/groceries/store/reducers/groceries.reducer';
import { HttpClientModule } from '@angular/common/http';
import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  groceries: GroceriesState,
  router: RouterReducerState
}

@NgModule({
  declarations: [
    AppComponent,
    TestComp,
    NavigationComponent,
    HeadingComponent,
    FabActionsComponent,
    PageGroceriesListComponent,
    NewGroceryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiKitModule,
    CoreModule
  ],
  entryComponents: [
    NewGroceryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
