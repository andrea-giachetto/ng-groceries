import { tap } from 'rxjs/operators';
import * as RouterAction from './router.actions';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common'

@Injectable()
export class RouterEffects {

  goEffect$ = createEffect(() => this.actions$
    .pipe(
      ofType(RouterAction.goToGroceryDetailPage),
      tap(action => {
        this.router.navigate(action.path, action.extras)
      })
    ), { dispatch: false }
  );

  goBack$ = createEffect(() => this.actions$
    .pipe(
      ofType(RouterAction.back),
      tap(() => this.location.back())
    )
  );

  goForward$ = createEffect(() => this.actions$
    .pipe(
      ofType(RouterAction.forward),
      tap(() => this.location.forward())
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location) {}
}
