import { Grocery } from './../../../model/grocery.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-complete-grocery',
  template: `
    <div id="title-wrapper">
      <!-- <h2 mat-dialog-title><mat-icon>add</mat-icon>Great, you did it!</h2> -->
    </div>

    <form #f="ngForm" (submit)="submit(f)">
      <mat-dialog-content class="mat-typography">
        <h2>Great, you did it!</h2>
        <p>How much did you spend on this grocery?</p>
        <mat-form-field class="example-form-field">
          <mat-label>Amount</mat-label>
          <input
            matInput
            type="number"
            name="amount"
            [ngModel]
            required
          >
        </mat-form-field>

      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <!-- [mat-dialog-close]="true" -->
        <button mat-button [disabled]="f.invalid">SAVE</button>
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
export class CompleteGroceryComponent {

  constructor(
    public dialogRef: MatDialogRef<CompleteGroceryComponent>,
  ) { }

  submit(f: NgForm) {
    const amount: Partial<Grocery> = { ...f.value };
    this.dialogRef.close(amount);
  }

}
