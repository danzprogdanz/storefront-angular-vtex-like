import { createAction, props } from '@ngrx/store';
import { Product } from '../../../shared/types/product.types';
import { CartItem } from './cart.types';

export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ product: Product; quantity?: number; sku?: string }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ productId: string }>()
);

export const updateCartItemQuantity = createAction(
  '[Cart] Update Item Quantity',
  props<{ productId: string; quantity: number }>()
);

export const clearCart = createAction('[Cart] Clear Cart');

export const loadCart = createAction('[Cart] Load Cart');

export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ items: CartItem[] }>()
);

export const loadCartFailure = createAction(
  '[Cart] Load Cart Failure',
  props<{ error: string }>()
);
