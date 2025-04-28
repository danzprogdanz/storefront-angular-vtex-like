import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddToCartButtonComponent } from '../../../../../features/cart/components/add-to-cart-button/add-to-cart-button.component';
import { AddToWishlistButtonComponent } from '../../../../../features/wishlist/components/add-to-wishlist-button/add-to-wishlist-button.component';
import { Product } from '../../../../types/product.types';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AddToCartButtonComponent,
    AddToWishlistButtonComponent
  ],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  expanded = false;

  toggleTitle() {
    this.expanded = !this.expanded;
  }

  handleAddToCart(product: Product) {
    console.log('Added to cart:', product);
    // Implement cart logic here
  }

  handleAddToWishlist(product: Product) {
    console.log('Added to wishlist:', product);
    // Implement wishlist logic here
  }

  getOriginalPrice(): string {
    return this.product.price.originalAmount?.toFixed(2) || '';
  }
}
