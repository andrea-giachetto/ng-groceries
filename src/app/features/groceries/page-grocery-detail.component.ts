import { selectProductsByGroceryId } from './store/selectors/products.selectors';
import { Product } from './../../model/product.model';
import { categories } from './../../shared/categories';
import { map } from 'rxjs/operators';
import { selectGroceryByID } from './store/selectors/groceries.selectors';
import { Grocery } from './../../model/grocery.model';
import { AppState } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-grocery-detail',
  template: `
    <app-heading
      [headingTitle]="grocery.name"
      [deadline]="grocery.deadline">
    </app-heading>

    <!-- Should load all the products related to the grocery list -->
    <!-- <pre>{{ grocery | json }}</pre> -->
    <div class="safe-scroll">
      <section *ngFor="let category of categoriesTmp">
        <header>
          <img [src]="category.icon">
          <h3>{{ category.value | titlecase }}</h3>
        </header>
        <!-- List of products corresponding to current category-->
        <mat-selection-list>
            <ng-container *ngFor="let product of (products$ | async)">
              <mat-list-option *ngIf="product.category == category.value">
                {{ product.name }}
              </mat-list-option>
            </ng-container>
            <!-- <ng-template *ngIf="product.category == category.value">
            </ng-template> -->

        </mat-selection-list>
      </section>
      <pre>{{ products$ | async | json }}</pre>
    </div>
  `,
  styles: [`
    section { margin: 0 0 30px 0 }
    section header { display: flex; flex-direction: row; justify-content: center; align-items: center; }
    section header img { margin: 0 10px 0 0; }
    section header h3 { margin: 0; }
  `]
})
export class PageGroceryDetailComponent implements OnInit {
  id: string;
  grocery: Grocery;
  categoriesTmp = categories;
  products$: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.store.pipe(
      select(selectGroceryByID, { id: this.id }),
      map((grocery) => grocery[0])
    )
    .subscribe((grocery) => this.grocery = grocery);

    this.products$ = this.store.pipe(
      select(selectProductsByGroceryId, { id: this.id })
    );

  }

  ngOnInit(): void {}

}
