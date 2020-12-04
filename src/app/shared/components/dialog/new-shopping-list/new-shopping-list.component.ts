import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-shopping-list',
  template: `
    <h2 mat-dialog-title>Add new list</h2>
    <mat-dialog-content class="mat-typography">
      <p>Lorem ipsum</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Save</button>
    </mat-dialog-actions>
  `,
  styles: [
  ]
})
export class NewShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
