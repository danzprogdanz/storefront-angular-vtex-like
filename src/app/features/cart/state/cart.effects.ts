import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import * as CartActions from './cart.actions';

@Injectable()
export class CartEffects {
  loadCart$;
  persistCart$;

  constructor(private actions$: Actions) {
    this.loadCart$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CartActions.loadCart),
        switchMap(() => {
          try {
            const savedCart = localStorage.getItem('cart');
            const items = savedCart ? JSON.parse(savedCart) : [];
            return of(CartActions.loadCartSuccess({ items }));
          } catch (error) {
            return of(CartActions.loadCartFailure({ error: 'Failed to load cart' }));
          }
        })
      )
    );

    this.persistCart$ = createEffect(() =>
      this.actions$.pipe(
        ofType(
          CartActions.addToCart,
          CartActions.removeFromCart,
          CartActions.updateCartItemQuantity,
          CartActions.clearCart
        ),
        tap(() => {
          // Save cart logic here if needed
        })
      ),
      { dispatch: false }
    );
  }
}
