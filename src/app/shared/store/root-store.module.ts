import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartReducer } from '../../features/cart/state/cart.reducer';
import { CartEffects } from '../../features/cart/state/cart.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({
      cart: cartReducer
    }),
    EffectsModule.forRoot([CartEffects])
  ]
})
export class RootStoreModule {}
