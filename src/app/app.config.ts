import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { cartReducer } from './features/cart/state/cart.reducer';
import { CartEffects } from './features/cart/state/cart.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // NgRx Store Configuration
    provideStore({
      cart: cartReducer
    }),
    provideEffects([CartEffects])
  ],
};
