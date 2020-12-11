import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-history-list',
  template: `
    <div class="grocery-history">
      <div class="grocery-history--wrapper">
        <div *ngIf="hasItems; else noItems">
          <app-monthly-groceries month="November"></app-monthly-groceries>
        </div>

        <ng-template #noItems>
          <div class="grocery-history--no-items">
            <img src="../../../../../assets/icons/grocery-history-empty.svg">
            <p>You don’t have any shopping list yet. <br> Do you want to create one?<br> C’mon, don’t be shy!</p>
          </div>
        </ng-template>

      </div>
    </div>
  `,
  styles: [`
    .grocery-history {width: 100%; background-color: white; border-radius: 16px; padding: 30px;}
    .grocery-history--no-items {display: flex; flex-direction: column; justify-content: center; text-align: center;}
    .grocery-history--no-items img { margin: 0 0 30px 0;}
  `]
})
export class GroceryHistoryListComponent implements OnInit {
  hasItems: boolean = true //this.items.length >= 1;
  constructor() { }

  ngOnInit(): void {
  }



}
