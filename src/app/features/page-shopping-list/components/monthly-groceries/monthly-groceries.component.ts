import { ShoppingList } from './../../../../model/shopping-list.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-groceries',
  template: `
    <h3>{{month}}</h3>
    <mat-selection-list #shoes [multiple]="false">
      <mat-list-option *ngFor="let shop of shoppings">
        {{shop.name}}
        <span>
          <label [ngClass]="shop.state === 'In progress' ? 'in-progress' : 'done'">{{shop.state}}</label>
          <p *ngIf="shop.amount">CHF {{shop.amount}}</p>
        </span>
      </mat-list-option>
    </mat-selection-list>
  `,
  styles: [`
    .mat-list-text span { display: flex; flex-direction: column;}
    /* h3 {text-transform: uppercase;} */
  `]
})
export class MonthlyGroceriesComponent implements OnInit {
  shoppings: ShoppingList[] = [
    {
      name: 'Coop',
      state: 'In progress'
    },
    {
      name: 'Migros',
      state: 'Done',
      amount: 104.35
    },
    {
      name: 'Denner',
      state: 'Done',
      amount: 84.23
    }
  ];
  @Input() month;

  constructor() { }

  ngOnInit(): void {
  }

}
