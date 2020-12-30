import { categories } from './../../categories';
import { Product } from './../../../model/product.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-product-list',
  template: `
    <div id="title-wrapper">
      <h2 mat-dialog-title><mat-icon>add</mat-icon>Add new product</h2>
    </div>

    <form #f="ngForm" (submit)="submit(f)">
      <mat-dialog-content class="mat-typography">

        <mat-form-field class="example-form-field">
          <mat-label>Product Name</mat-label>
          <input
            matInput
            type="text"
            name="name"
            [ngModel]
            required
          >
        </mat-form-field>

        <mat-form-field color="primary" appearance="fill">
        <mat-label>Choose category</mat-label>
          <mat-select name="category" [ngModel] required>
            <mat-option *ngFor="let category of categoriesTmp" [value]="category.value">
              <img [src]="category.icon">
              {{category.value | titlecase}}
            </mat-option>
          </mat-select>
        </mat-form-field>

      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <!-- [mat-dialog-close]="true" -->
        <button mat-button [disabled]="f.invalid">CREATE</button>
      </mat-dialog-actions>
    </form>
  `,
  styles: [`
    .mat-dialog-content, .mat-dialog-container { text-align: center; }
    .mat-form-field { min-width: 230px; }
    #title-wrapper h2.mat-dialog-title {font-weight: 400; font-size: 16px; display: flex; justify-content: center; align-items: center; }
    .mat-button {letter-spacing: 1px; color: #54C6EB}
  `]
})
export class NewProductComponent {

  categoriesTmp = categories;

  constructor(
    public dialogRef: MatDialogRef<NewProductComponent>,
  ) { }

  submit(f: NgForm) {
    const product: Product = { ...f.value, checked: false } as Product;
    this.dialogRef.close(product);
  }

}
