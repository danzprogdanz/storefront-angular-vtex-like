import { ActionReducerMap } from '@ngrx/store';
import { cartReducer } from '../../features/cart/state/cart.reducer';
import { CartState } from '../../features/cart/state/cart.types';

export interface RootState {
  cart: CartState;
}

export const rootReducer: ActionReducerMap<RootState> = {
  cart: cartReducer,
};
