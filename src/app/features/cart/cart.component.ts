import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from './state/cart.types';
import { selectCartItems, selectCartTotal } from './state/cart.selectors';
import * as CartActions from './state/cart.actions';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Product } from '../../shared/types/product.types';

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
  }

  getVariantName(product: Product, skuCode: string): string {
    const variant = product.inventory.skus?.find(sku => sku.code === skuCode);
    return variant ? `${variant.size || ''} ${variant.color || ''}`.trim() : '';
  }

  removeItem(productId: string) {
    this.store.dispatch(CartActions.removeFromCart({ productId }));
  }

  updateQuantity(productId: string, quantity: number) {
    const newQuantity = Math.max(1, quantity);
    this.store.dispatch(CartActions.updateCartItemQuantity({ productId, quantity: newQuantity }));
  }

  clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.store.dispatch(CartActions.clearCart());
    }
  }
}
