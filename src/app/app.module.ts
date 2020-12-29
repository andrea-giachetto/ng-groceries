import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroceriesState } from './features/groceries/store/reducers/groceries.reducer';
import { HttpClientModule } from '@angular/common/http';
import { RouterReducerState } from '@ngrx/router-store';
import { ProductsState } from './features/groceries/store/reducers/products.reducer';

export interface AppState {
  groceries: GroceriesState,
  products: ProductsState,
  router: RouterReducerState
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
