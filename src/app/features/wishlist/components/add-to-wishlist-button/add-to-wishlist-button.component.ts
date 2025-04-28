import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../shared/types/product.types';

@Component({
  selector: 'app-add-to-wishlist-button',
  standalone: true,
  imports: [],
  templateUrl: './add-to-wishlist-button.component.html',
  styleUrls: ['./add-to-wishlist-button.component.scss']
})
export class AddToWishlistButtonComponent {
  @Input() product!: Product;
  @Output() added = new EventEmitter<Product>();
  isInWishlist = false;

  toggleWishlist() {
    this.isInWishlist = !this.isInWishlist;
    console.log('Wishlist status:', this.isInWishlist, 'for product:', this.product);
    this.added.emit(this.product);
  }
}
