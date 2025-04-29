import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from './state/cart.types';
import { selectCartItems, selectCartTotal } from './state/cart.selectors';
import * as CartActions from './state/cart.actions';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe],
})
export class CartComponent {
  items$: Observable<CartItem[]>;
  total$: Observable<number>;

  constructor(private store: Store) {
    this.items$ = this.store.select(selectCartItems);
    this.total$ = this.store.select(selectCartTotal);

    this.store.subscribe(state => console.log('Current state:', state));

    // Or for specific state
    this.store.select(selectCartItems).subscribe(items =>
      console.log('Cart items:', items)
    );
  }

  removeItem(productId: string) {
    this.store.dispatch(CartActions.removeFromCart({ productId }));
  }

  updateQuantity(productId: string, quantity: number) {
    // Ensure quantity doesn't go below 1
    const newQuantity = Math.max(1, quantity);
    this.store.dispatch(CartActions.updateCartItemQuantity({ productId, quantity: newQuantity }));
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }
}
