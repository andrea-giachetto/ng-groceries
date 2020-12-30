import { loadProducts } from './features/groceries/store/actions/product.actions';
import { AppState } from './app.module';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadGroceries } from './features/groceries/store/actions/groceries.actions';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-navigation></app-navigation>
    <app-fab-actions></app-fab-actions>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadGroceries());
    this.store.dispatch(loadProducts());
  }
}
