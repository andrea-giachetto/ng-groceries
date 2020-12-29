import { environment } from './../../../../../environments/environment';
import { switchMap, map, catchError } from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { loadProducts, loadProductsSuccess, loadProductsFailed, addProduct, addProductSuccess, addProductFailed } from './../actions/product.actions';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product.model';
import { of } from 'rxjs'


@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() => this.http.get<Product[]>(`${environment.BASE_API}/products`)
          .pipe(
            map(result => loadProductsSuccess({ list: result })),
            catchError(() => of(loadProductsFailed()))
          ))
    )
  )

  addProduct$ = createEffect(
    () => this.actions$.pipe(
      ofType(addProduct),
      switchMap(
        (action) => this.http.post<Product>(`${environment.BASE_API}/products`, action.product)
        .pipe(
          map(result => addProductSuccess({ product: result })),
          catchError(() => of(addProductFailed()))
        ))
    )
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

}
