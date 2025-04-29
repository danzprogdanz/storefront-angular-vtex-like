import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartQuantity$: Observable<number>;

  constructor(private store: Store<{ cart: { items: { quantity: number }[] } }>) {
    // Sum up the quantity of all cart items
    this.cartQuantity$ = this.store.select(state => state.cart.items).pipe(
      map(items => items.reduce((total, item) => total + item.quantity, 0))
    );
  }
}
