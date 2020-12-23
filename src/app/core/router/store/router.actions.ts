import { NavigationExtras } from '@angular/router';
import { createAction, props } from '@ngrx/store';

export const back = createAction('[Router] back')
export const forward = createAction('[Router] forward')
export const goToGroceryDetailPage = createAction(
  '[Router] navigate to grocery detail page',
  props<{ path: any[], extras?: NavigationExtras}>()
  )
