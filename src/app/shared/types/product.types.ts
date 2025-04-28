export interface Price {
  amount: number;
  currency: string;
  formatted: string;
  originalAmount?: number;
  discountPercentage?: number;
}

export interface Image {
  url: string;
  altText: string;
  type: 'main' | 'gallery';
  width: number;
  height: number;
}

export interface Property {
  name: string;
  value: string;
  unit?: string;
}

export interface Specification {
  category: string;
  properties: Property[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface TechnicalInfo {
  specifications: Specification[];
  features?: Feature[];
}

export interface Inventory {
  stock: number;
  lowStockThreshold: number;
  available: boolean;
  skus?: Array<{
    code: string;
    size?: string;
    color?: string;
    stock: number;
  }>;
}

export interface ReturnPolicy {
  days: number;
  details: string;
}

export interface Shipping {
  freeShipping: boolean;
  estimatedDelivery: string;
  shipsFrom: string;
  returnPolicy: ReturnPolicy;
}

export interface Category {
  id: string;
  name: string;
  path: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface Product {
  id: string;
  sku: string;
  title: string;
  slug: string;
  price: Price;
  images: Image[];
  description: string;
  technicalInfo: TechnicalInfo;
  inventory: Inventory;
  shipping: Shipping;
  category: Category[];
  brand: Brand;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

export interface ProductListingResponse {
  data: Product[];
  total: number;
  limit: number;
  skip: number;
}

export interface ProductDetailResponse {
  data: Product;
  relatedProducts: Product[];
}
