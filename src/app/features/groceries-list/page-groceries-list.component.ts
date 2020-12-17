import { GroceryAppState } from './store/reducers/groceries.reducer';
import { Grocery } from '../../model/grocery.model';
import { GroceryHistoryListComponent } from './components/grocery-history-list/grocery-history-list.component';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadGroceries } from './store/actions/groceries.actions';

@Component({
  selector: 'app-page-shopping-list',
  template: `
    <app-heading></app-heading>
    <ul>
      <li>
        <a>
        <pre>{{ groceries$ | async | json }}</pre>
          <!-- <mat-selection-list [multiple]="false">
            <mat-list-option *ngFor="let grocery of (groceries$ | async)">
              {{grocery.name}}
              <span>
                <label [ngClass]="grocery.state === 'In progress' ? 'in-progress' : 'done'">{{grocery.state}}</label>
                <p *ngIf="grocery.amount">CHF {{grocery.amount}}</p>
              </span>
            </mat-list-option>
          </mat-selection-list> -->
        </a>
      </li>
    </ul>
    <!-- <app-grocery-history-list></app-grocery-history-list> -->
  `,
  styles: [`
    .mat-list-text span { display: flex; flex-direction: column;}
  `]
})
export class PageGroceriesListComponent implements OnInit {

  groceries$: Observable<Grocery[]> = this.store.pipe(select((state: GroceryAppState) => state.groceries))

  constructor(private store: Store<any>) {
    this.store.dispatch(loadGroceries());
    console.log(this.groceries$);
   }

  ngOnInit(): void {
  }

}
