import { Product } from './../../model/product.model';
import { categories } from './../../shared/categories';
import { map } from 'rxjs/operators';
import { selectGroceryByID } from './store/selectors/groceries.selectors';
import { Grocery } from './../../model/grocery.model';
import { AppState } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

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
          <h3>{{ category.value }}</h3>
        </header>
        <!-- List of products corresponding to current category-->

      </section>
    </div>
  `,
  styles: [
  ]
})
export class PageGroceryDetailComponent implements OnInit {
  id: string;
  grocery: Grocery;
  categoriesTmp = categories;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.store.pipe(
      select(selectGroceryByID, { id: this.id }),
      map((grocery) => grocery[0])
      // switchMap for loading all the "products array"
    )
    .subscribe((grocery) => this.grocery = grocery)


  }

}
