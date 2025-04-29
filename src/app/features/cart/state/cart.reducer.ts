import { createReducer, on } from '@ngrx/store';
import { CartItem, CartState } from './cart.types';
import * as CartActions from './cart.actions';

export const initialState: CartState = {
  items: [],
  loading: false,
  error: null
};

export const cartReducer = createReducer(
  initialState,

  on(CartActions.addToCart, (state, { product, quantity = 1, sku }) => {
    const existingItemIndex = state.items.findIndex(
      item => item.product.id === product.id && item.selectedSku === sku
    );

    if (existingItemIndex > -1) {
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + quantity
      };
      return { ...state, items: updatedItems };
    } else {
      const newItem: CartItem = {
        id: `${product.id}`,
        product,
        quantity,
        selectedSku: sku || ''
      };
      return {
        ...state,
        items: [...state.items, newItem]
      };
    }
  }),

  on(CartActions.removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.product.id !== productId)
  })),

  on(CartActions.updateCartItemQuantity, (state, { productId, quantity }) => {
    const itemIndex = state.items.findIndex(item => item.product.id === productId);
    if (itemIndex === -1) return state;

    const updatedItems = [...state.items];
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      quantity: Math.max(1, quantity) // Ensure quantity is at least 1
    };

    return { ...state, items: updatedItems };
  }),

  on(CartActions.clearCart, state => ({
    ...state,
    items: []
  })),

  on(CartActions.loadCart, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(CartActions.loadCartSuccess, (state, { items }) => ({
    ...state,
    items,
    loading: false
  })),

  on(CartActions.loadCartFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
