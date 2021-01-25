import { ProductCheckedState } from './../../../../model/product.model';
import { environment } from './../../../../../environments/environment';
import { switchMap, map, catchError, exhaustMap } from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { loadProducts, loadProductsSuccess, loadProductsFailed, addProduct, addProductSuccess, addProductFailed, toggleProductCheckStateSuccess, toggleProductCheckStateFailed, toggleProductCheckState, deleteProduct, deleteProductSuccess, deleteProductFailed } from './../actions/product.actions';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product.model';
import { of } from 'rxjs'


@Injectable()
export class ProductsEffects {

  loadProductsByGroceryId$ = createEffect(
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
  );

  deleteProduct$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteProduct),
      exhaustMap(
        (action) => this.http.delete<Product>(`${environment.BASE_API}/products/${action.product.id}`)
          .pipe(
            map(() => deleteProductSuccess({ product: action.product })),
            catchError(() => of(deleteProductFailed()))
          )
      )
    )
  )

  toggleProductCheckState$ = createEffect(
    () => this.actions$.pipe(
      ofType(toggleProductCheckState),
      switchMap((action) => this.http.patch<ProductCheckedState>(`${environment.BASE_API}/products/${action.product.id}`, {checked: action.product.checked})
        .pipe(
          map(res => toggleProductCheckStateSuccess({ product: res })),
          catchError(() => of(toggleProductCheckStateFailed()))
        ))
    )
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

}
