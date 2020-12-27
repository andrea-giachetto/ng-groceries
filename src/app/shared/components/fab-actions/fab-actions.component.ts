import { addGrocery } from '../../../features/groceries/store/actions/groceries.actions';
import { Grocery } from '../../../model/grocery.model';
import { Component, OnInit } from '@angular/core';
import { NewGroceryComponent } from 'src/app/shared/components/dialog/new-grocery/new-grocery.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-fab-actions',
  template: `
    <div class="action" *ngIf="isClicked">
      <div class="action--item" (click)="openDialog()">
        <label>Add new list</label>
        <span>
          <img src="../../../assets/icons/dark/shopping-list.svg">
        </span>
      </div>
      <div class="action--item">
        <label>Add product</label>
        <span>
          <img src="../../../assets/icons/dark/products.svg">
        </span>
      </div>
    </div>

    <button mat-fab color="accent" aria-label="Add a list or a product" (click)="toggleActionsList()">
      <mat-icon color="white">add</mat-icon>
    </button>

    <div class="overlay" *ngIf="isClicked"></div>
  `,
  styles: [`
    .action {z-index: 2; position: fixed; bottom: 140px; right: 40px;}
    button {z-index: 3; position: fixed; bottom: 80px; right: 30px;}
    .action .action--item {display: flex; margin: 0 0 10px 0; align-items: center;}
    .action .action--item label {width: 94px; height: 24px; letter-spacing: 1px; line-height: 24px; margin: 0 10px 0 0; text-align: center; background-color: white; color: #75D8F2; font-size: 10px; text-transform: uppercase; border-radius: 3px;}
    .action .action--item span {width: 36px; height: 36px; display: flex; justify-content: center; align-items: center;background-color: #75D8F2; border-radius: 50%;}
    .action .action--item span img {height: 24px; width: auto;}
  `]
})
export class FabActionsComponent implements OnInit {
  isClicked: boolean = false;

  constructor(
    public dialog: MatDialog,
    private store: Store<Grocery>
    ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.toggleActionsList();

    const dialogRef = this.dialog.open(NewGroceryComponent);

    dialogRef.afterClosed().subscribe((grocery: Grocery) => {
      this.store.dispatch(addGrocery({ grocery }))
    });
  }

  toggleActionsList() {
    console.log('clicked')
    this.isClicked = !this.isClicked;
  }

}
