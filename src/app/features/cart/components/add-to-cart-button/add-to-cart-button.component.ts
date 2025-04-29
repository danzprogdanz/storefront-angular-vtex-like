import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import * as CartActions from '../../state/cart.actions';
import { Product } from '../../../../shared/types/product.types';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss']
})
export class AddToCartButtonComponent {
  private store = inject(Store); // Modern Angular injection

  @Input() product!: Product;
  @Input() sku?: string;
  @Output() added = new EventEmitter<Product>();

  addToCart() {
    this.added.emit(this.product);
    console.log('Dispatching addToCart action');
    this.store.dispatch(CartActions.addToCart({ product: this.product }));
  }
}
