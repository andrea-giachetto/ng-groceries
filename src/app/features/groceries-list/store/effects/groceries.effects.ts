import { Grocery } from '../../../../model/grocery.model';
import { loadGroceries, loadGroceriesSuccess, loadGroceriesFailed } from '../actions/groceries.action';
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
      switchMap(() => this.http.get<Grocery[]>('http://localhost:3001/groceries')
        .pipe(
          tap(result => console.log(result)),
          map(result => loadGroceriesSuccess({ groceries: result })),
          catchError(() => of(loadGroceriesFailed()))
        ))
    )
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}
