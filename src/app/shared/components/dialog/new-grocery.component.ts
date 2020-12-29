import { Grocery } from './../../../model/grocery.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-shopping-list',
  template: `
    <div id="title-wrapper">
      <h2 mat-dialog-title><mat-icon>add</mat-icon>Add new list</h2>
    </div>

    <form #f="ngForm" (submit)="submit(f)">
      <mat-dialog-content class="mat-typography">

        <mat-form-field class="example-form-field">
          <mat-label>List Name</mat-label>
          <input
            matInput
            type="text"
            name="name"
            [ngModel]
            required
          >
        </mat-form-field>

        <mat-form-field color="primary" appearance="fill">
          <mat-label>Choose a date</mat-label>
          <input
            matInput
            [matDatepicker]="picker1"
            name="deadline"
            [ngModel]
          >
          <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
          <mat-datepicker #picker1></mat-datepicker>
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
export class NewGroceryComponent {

  constructor(
    public dialogRef: MatDialogRef<NewGroceryComponent>,
  ) { }

  submit(f: NgForm) {
    const grocery: Grocery = { ...f.value, state: 'In progress' } as Grocery;
    this.dialogRef.close(grocery);
  }

}
