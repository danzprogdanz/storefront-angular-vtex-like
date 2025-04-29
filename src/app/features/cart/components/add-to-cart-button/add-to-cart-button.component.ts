import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import * as CartActions from '../../state/cart.actions';
import { Product } from '../../../../shared/types/product.types';
import { Observable, map } from 'rxjs';
import { CartState } from '../../state/cart.types';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss']
})
export class AddToCartButtonComponent {
  private store = inject(Store);

  @Input() product!: Product;
  @Input() sku?: string;
  @Output() added = new EventEmitter<Product>();

  // Observable to check if product is in cart
  isInCart$: Observable<boolean> = this.store.select('cart').pipe(
    map((cartState: CartState) => {
      return cartState.items.some(item => item.product.id === this.product.id);
    })
  );

  addToCart() {
    this.added.emit(this.product);
    this.store.dispatch(CartActions.addToCart({ product: this.product }));
  }
}
