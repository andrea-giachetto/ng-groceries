import { environment } from './../../../../../environments/environment';
import { addGrocerySuccess, addGroceryFailed } from '../actions/groceries.actions';
import { Grocery } from '../../../../model/grocery.model';
import { loadGroceries, loadGroceriesSuccess, loadGroceriesFailed, addGrocery } from '../actions/groceries.actions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, switchMap, catchError, tap } from 'rxjs/operators'
import { of } from 'rxjs'


@Injectable()
export class GroceriesEffects {

  loadGroceries$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadGroceries),
      switchMap(() => this.http.get<Grocery[]>(`${environment.BASE_API}/groceries`)
        .pipe(
          map(result => loadGroceriesSuccess({ list: result })),
          catchError(() => of(loadGroceriesFailed()))
        ))
    )
  )

  addGrocery$ = createEffect(
    () => this.actions$.pipe(
      ofType(addGrocery),
      switchMap((action) => this.http.post<Grocery>(`${environment.BASE_API}/groceries`, action.grocery)
        .pipe(
          map(result => addGrocerySuccess({ item: result })),
          catchError(() => of(addGroceryFailed()))
        ))
    )
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}
