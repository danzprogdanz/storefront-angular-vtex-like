// mocks/models/food.mock.ts
import { Product, ProductDetailResponse, ProductListingResponse } from '../../shared/types/product.types';

export const mockFoodProducts: Product[] = [
  // BREAKFAST ITEMS
  {
    id: 'food_001',
    sku: 'BREAK-AVO',
    title: 'Avocado Toast Deluxe',
    slug: 'avocado-toast-deluxe',
    price: {
      amount: 12.99,
      currency: 'USD',
      formatted: '$12.99',
      originalAmount: 14.99,
      discountPercentage: 13,
    },
    images: [
      {
        url: 'https://cdn.pickuplimes.com/cache/91/64/91646bc8e918aae04f6e98960c4075b6.jpg',
        altText: 'Avocado toast with poached eggs and microgreens',
        type: 'main',
        width: 1200,
        height: 800,
      },
    ],
    description: 'Sourdough bread topped with smashed avocado, poached eggs, cherry tomatoes, and microgreens',
    technicalInfo: {
      specifications: [
        {
          category: 'Nutrition',
          properties: [
            { name: 'Calories', value: '580', unit: 'kcal' },
            { name: 'Protein', value: '22', unit: 'g' },
            { name: 'Vegetarian', value: 'Yes' },
          ],
        },
        {
          category: 'Ingredients',
          properties: [
            { name: 'Bread', value: 'Artisan sourdough' },
            { name: 'Toppings', value: 'Avocado, eggs, tomatoes' },
            { name: 'Allergens', value: 'Gluten, Eggs' },
          ],
        }
      ],
      features: [
        {
          title: 'Chef Special',
          description: 'Prepared by our award-winning breakfast chef',
          icon: 'award',
        }
      ]
    },
    inventory: {
      stock: 50,
      lowStockThreshold: 10,
      available: true,
      skus: [
        { code: 'AVO-REG', size: 'Regular', stock: 30 },
        { code: 'AVO-XL', size: 'Extra Large', stock: 20 },
      ],
    },
    shipping: {
      freeShipping: false,
      estimatedDelivery: '20-30 minutes',
      shipsFrom: 'Downtown Kitchen',
      returnPolicy: {
        days: 0,
        details: 'No returns on food items',
      },
    },
    category: [
      {
        id: 'cat_breakfast',
        name: 'Breakfast',
        path: 'food/breakfast',
      },
      {
        id: 'cat_vegetarian',
        name: 'Vegetarian',
        path: 'food/vegetarian',
      }
    ],
    brand: {
      id: 'brand_gourmet',
      name: 'Gourmet Breakfast Co.',
      logo: '/logos/gourmet-breakfast.png',
    },
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-03-15'),
    tags: ['healthy', 'vegetarian', 'chef-special'],
  },

  // LUNCH ITEMS
  {
    id: 'food_002',
    sku: 'LUNCH-CLUB',
    title: 'Ultimate Club Sandwich',
    slug: 'ultimate-club-sandwich',
    price: {
      amount: 14.99,
      currency: 'USD',
      formatted: '$14.99',
    },
    images: [
      {
        url: 'https://cdn.pickuplimes.com/cache/ab/7b/ab7b1599e28ab403d9e8e79012d557db.jpg',
        altText: 'Triple-decker club sandwich with fries',
        type: 'main',
        width: 1200,
        height: 800,
      }
    ],
    description: 'Triple-decker sandwich with turkey, bacon, lettuce, tomato, and our special sauce',
    technicalInfo: {
      specifications: [
        {
          category: 'Nutrition',
          properties: [
            { name: 'Calories', value: '850', unit: 'kcal' },
            { name: 'Protein', value: '45', unit: 'g' },
          ],
        }
      ]
    },
    inventory: {
      stock: 35,
      lowStockThreshold: 5,
      available: true,
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '25-40 minutes',
      shipsFrom: 'Main Restaurant',
      returnPolicy: {
        days: 0,
        details: 'No returns on food items',
      },
    },
    category: [
      {
        id: 'cat_lunch',
        name: 'Lunch',
        path: 'food/lunch',
      }
    ],
    brand: {
      id: 'brand_deli',
      name: 'Premium Deli',
      logo: '/logos/premium-deli.png',
    },
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-03-20'),
    tags: ['sandwich', 'high-protein', 'classic'],
  },

  // DINNER ITEMS
  {
    id: 'food_003',
    sku: 'DINNER-STEAK',
    title: 'Filet Mignon Dinner',
    slug: 'filet-mignon-dinner',
    price: {
      amount: 39.99,
      currency: 'USD',
      formatted: '$39.99',
      originalAmount: 45.99,
      discountPercentage: 13,
    },
    images: [
      {
        url: 'https://cdn.pickuplimes.com/cache/2d/19/2d19c63015105b5194e1565f35287f4f.jpg',
        altText: 'Filet mignon with mashed potatoes and asparagus',
        type: 'main',
        width: 1200,
        height: 800,
      }
    ],
    description: '8oz filet mignon with truffle mashed potatoes, roasted asparagus, and red wine reduction',
    technicalInfo: {
      specifications: [
        {
          category: 'Preparation',
          properties: [
            { name: 'Cooking Level', value: 'Medium Rare' },
            { name: 'Sides', value: 'Mashed potatoes, asparagus' },
          ],
        }
      ]
    },
    inventory: {
      stock: 20,
      lowStockThreshold: 3,
      available: true,
      skus: [
        { code: 'STEAK-8OZ', size: '8oz', stock: 15 },
        { code: 'STEAK-12OZ', size: '12oz (+$8)', stock: 5 },
      ],
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '30-45 minutes',
      shipsFrom: 'Steakhouse Kitchen',
      returnPolicy: {
        days: 0,
        details: 'No returns on food items',
      },
    },
    category: [
      {
        id: 'cat_dinner',
        name: 'Dinner',
        path: 'food/dinner',
      },
      {
        id: 'cat_premium',
        name: 'Premium Meals',
        path: 'food/premium',
      }
    ],
    brand: {
      id: 'brand_steakhouse',
      name: 'Elite Steakhouse',
      logo: '/logos/elite-steakhouse.png',
    },
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-03-18'),
    tags: ['steak', 'gourmet', 'special-occasion'],
  },

  // DESSERTS
  {
    id: 'food_004',
    sku: 'DESSERT-CHOC',
    title: 'Chocolate Lava Cake',
    slug: 'chocolate-lava-cake',
    price: {
      amount: 9.99,
      currency: 'USD',
      formatted: '$9.99',
    },
    images: [
      {
        url: 'https://cdn.pickuplimes.com/cache/67/07/67077bea584905bb63fb1320682f4e6f.jpg',
        altText: 'Chocolate lava cake with vanilla ice cream',
        type: 'main',
        width: 1200,
        height: 800,
      }
    ],
    description: 'Warm chocolate cake with molten center, served with vanilla bean ice cream',
    technicalInfo: {
      specifications: [
        {
          category: 'Details',
          properties: [
            { name: 'Contains', value: 'Dairy, Eggs, Gluten' },
            { name: 'Serves', value: '1' },
          ],
        }
      ]
    },
    inventory: {
      stock: 40,
      lowStockThreshold: 10,
      available: true,
    },
    shipping: {
      freeShipping: false,
      estimatedDelivery: '15-25 minutes',
      shipsFrom: 'Bakery Central',
      returnPolicy: {
        days: 0,
        details: 'No returns on food items',
      },
    },
    category: [
      {
        id: 'cat_dessert',
        name: 'Desserts',
        path: 'food/desserts',
      }
    ],
    brand: {
      id: 'brand_decadence',
      name: 'Decadence Desserts',
      logo: '/logos/decadence.png',
    },
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-03-10'),
    tags: ['chocolate', 'indulgent', 'signature'],
  },

  // BEVERAGES
  {
    id: 'food_005',
    sku: 'DRINK-CRAFT',
    title: 'Craft Lemonade',
    slug: 'craft-lemonade',
    price: {
      amount: 5.99,
      currency: 'USD',
      formatted: '$5.99',
    },
    images: [
      {
        url: 'https://cdn.pickuplimes.com/cache/32/0a/320aaef73342b5ee8f50a8d7fd9fb765.jpg',
        altText: 'Glass of craft lemonade with mint',
        type: 'main',
        width: 1200,
        height: 800,
      }
    ],
    description: 'Handcrafted lemonade with organic lemons, mint, and a hint of lavender',
    technicalInfo: {
      specifications: [
        {
          category: 'Details',
          properties: [
            { name: 'Size', value: '16oz' },
            { name: 'Ice Level', value: 'Medium' },
          ],
        }
      ]
    },
    inventory: {
      stock: 100,
      lowStockThreshold: 20,
      available: true,
      skus: [
        { code: 'LEMO-REG', size: 'Regular', stock: 60 },
        { code: 'LEMO-LG', size: 'Large (+$1)', stock: 40 },
      ],
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '15-30 minutes',
      shipsFrom: 'Beverage Station',
      returnPolicy: {
        days: 0,
        details: 'No returns on beverages',
      },
    },
    category: [
      {
        id: 'cat_beverages',
        name: 'Beverages',
        path: 'food/beverages',
      },
      {
        id: 'cat_refreshments',
        name: 'Refreshments',
        path: 'food/refreshments',
      }
    ],
    brand: {
      id: 'brand_quench',
      name: 'Quench Craft Drinks',
      logo: '/logos/quench.png',
    },
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-25'),
    tags: ['refreshing', 'craft', 'non-alcoholic'],
  }
];

// Utility functions
export const getAllFoodProducts = (): ProductListingResponse => ({
  data: mockFoodProducts,
  total: mockFoodProducts.length,
  limit: 10,
  skip: 0,
});

export const getFoodProductBySlug = (slug: string): ProductDetailResponse => {
  const product = mockFoodProducts.find(p => p.slug === slug);

  if (!product) {
    throw new Error('Product not found');
  }

  return {
    data: product,
    relatedProducts: mockFoodProducts
      .filter(p => p.id !== product.id &&
        p.category.some(c => product.category.some(pc => pc.id === c.id)))
      .slice(0, 3)
  };
};

export const getFoodProductsByCategory = (categoryId: string): ProductListingResponse => ({
  data: mockFoodProducts.filter(p => p.category.some(c => c.id === categoryId)),
  total: mockFoodProducts.filter(p => p.category.some(c => c.id === categoryId)).length,
  limit: 20,
  skip: 0,
});
