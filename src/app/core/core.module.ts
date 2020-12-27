import { UiKitModule } from './../shared/ui-kit/ui-kit.module';
import { reducers } from './../features/groceries/store/reducers/index';
import { GroceriesEffects } from './../features/groceries/store/effects/groceries.effects';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './router/store/router.effects';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UiKitModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([
      GroceriesEffects,
      RouterEffects
    ]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    })
  ],
  exports: [
  ]
})
export class CoreModule { }
