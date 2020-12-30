import * as RouterAction from './../../core/router/store/router.actions';
import { selectAllGroceries } from './store/selectors/groceries.selectors';
import { Grocery } from '../../model/grocery.model';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadGroceries, setActiveGrocery } from './store/actions/groceries.actions';
import { AppState } from 'src/app/app.module';

@Component({
  selector: 'app-page-shopping-list',
  template: `
    <app-heading></app-heading>
    <!-- <pre>{{ groceries$ | async | json}}</pre> -->
    <div *ngIf="(groceries$ | async).length; else noItems">

    <mat-selection-list [multiple]="false">
        <mat-list-option *ngFor="let grocery of (groceries$ | async)" (click)="goToDetailPage(grocery)">
          {{grocery.name}}
          <span>
            <label [ngClass]="grocery.state === 'In progress' ? 'in-progress' : 'done'">{{grocery.state}}</label>
            <p *ngIf="grocery.amount">CHF {{grocery.amount}}</p>
          </span>
        </mat-list-option>
      </mat-selection-list>

    </div>

    <ng-template #noItems>

      <div class="grocery-history--no-items">
        <img src="../../../../../assets/icons/grocery-history-empty.svg">
        <p>You don’t have any shopping list yet. <br> Do you want to create one?<br> C’mon, don’t be shy!</p>
      </div>

    </ng-template>
  `,
  styles: [`
    .mat-list-text span { display: flex; flex-direction: column;}
    .grocery-history--no-items {display: flex; flex-direction: column; justify-content: center; text-align: center;}
    .grocery-history--no-items img { margin: 0 0 30px 0;}
  `]
})
export class PageGroceriesListComponent implements OnInit {

  groceries$: Observable<Grocery[]> = this.store.pipe(select(selectAllGroceries))

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
  }

  goToDetailPage(grocery: Grocery) {
    this.store.dispatch(setActiveGrocery({ item: grocery }))
    this.store.dispatch(
      RouterAction.goToGroceryDetailPage(
        { path: ['groceries/details/' + grocery.id ] }
      )
    )
  }

}
