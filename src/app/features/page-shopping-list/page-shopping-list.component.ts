import { GroceryHistoryListComponent } from './components/grocery-history-list/grocery-history-list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-shopping-list',
  template: `
    <app-heading></app-heading>
    <app-grocery-history-list></app-grocery-history-list>
  `,
  styles: [
  ]
})
export class PageShoppingListComponent implements OnInit {

  constructor() { }
  // I should get the shopping list by month from the backend like so:
  /*
    {
      'october': ShoppingList[],
      'november': ShoppingList[],
      ...
    }
  */
  ngOnInit(): void {
  }

}
