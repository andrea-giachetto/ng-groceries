import { Grocery } from './../../../model/grocery.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-product-dialog',
  template: `
    <div id="title-wrapper">
      <h2 mat-dialog-title><mat-icon>report</mat-icon> Hey, are you sure?</h2>
    </div>

    <mat-dialog-content class="mat-typography">
      <p>You are deleting a product of this list, this operation can't be undone.</p>

    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <!-- [mat-dialog-close]="true" -->
      <button mat-button (click)="deleteProduct()">Delete</button>
      <button mat-button (click)="back()">Back</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .mat-dialog-content, .mat-dialog-container { text-align: center; }
    .mat-form-field { min-width: 230px; }
    #title-wrapper h2.mat-dialog-title {font-weight: 400; font-size: 16px; display: flex; justify-content: center; align-items: center; }
    .mat-button {letter-spacing: 1px; color: #54C6EB}
  `]
})
export class DeleteProductDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteProductDialogComponent>,
  ) { }

  deleteProduct() {
    this.dialogRef.close(true);
  }

  back() {
    this.dialogRef.close(false);
  }

}
