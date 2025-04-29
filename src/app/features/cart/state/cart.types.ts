// In state/cart.types.ts
import { Product } from "../../../shared/types/product.types";

export interface CartItem {
  id: string;               // Unique cart item ID
  product: Product;         // Changed from productId to product to hold full product data
  quantity: number;
  selectedSku: string;     // For products with variants
}

export interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}
