import { Product } from '../store/slices/productSlice';

export const mockProducts: Product[] = [
  // Electronics
  {
    id: 'electronics-1',
    name: 'Apple iPhone 14',
    description: 'A15 Bionic chip, 128GB storage, 6.1-inch OLED display with advanced camera system',
    price: 79999,
    originalPrice: 89999,
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop'],
    category: 'Electronics',
    brand: 'Apple',
    rating: 4.8,
    reviews: 2847,
    inStock: true,
    features: ['A15 Bionic Chip', '6.1" OLED Display', 'Dual Camera System', '128GB Storage']
  },
  {
    id: 'electronics-2',
    name: 'Samsung Galaxy S23',
    description: 'Snapdragon 8 Gen 2 processor with amazing camera capabilities and sleek design',
    price: 74999,
    originalPrice: 84999,
    images: ['https://images.unsplash.com/photo-1510557880182-3d4d3b5d8f1b?q=80&w=1200&auto=format&fit=crop'],
    category: 'Electronics',
    brand: 'Samsung',
    rating: 4.7,
    reviews: 1923,
    inStock: true,
    features: ['Snapdragon 8 Gen 2', 'Triple Camera', '8GB RAM', '256GB Storage']
  },
  {
    id: 'electronics-3',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise cancellation headphones with 30-hour battery life',
    price: 29999,
    originalPrice: 34999,
    images: ['https://images.unsplash.com/photo-1518444023764-6d9f8d5d3b9b?q=80&w=1200&auto=format&fit=crop'],
    category: 'Electronics',
    brand: 'Sony',
    rating: 4.9,
    reviews: 3421,
    inStock: true,
    features: ['Noise Cancellation', '30hr Battery', 'Quick Charge', 'Premium Sound']
  },
  {
    id: 'electronics-4',
    name: 'Apple MacBook Air M2',
    description: '13.6-inch Liquid Retina Display, M2 chip, 8GB RAM, 256GB SSD',
    price: 114999,
    originalPrice: 124999,
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'],
    category: 'Electronics',
    brand: 'Apple',
    rating: 4.9,
    reviews: 1567,
    inStock: true,
    features: ['M2 Chip', '13.6" Display', '8GB RAM', '256GB SSD']
  },
  {
    id: 'electronics-5',
    name: 'Canon EOS 90D',
    description: '32.5MP DSLR camera with 4K video support and professional features',
    price: 99999,
    originalPrice: 109999,
    images: ['https://images.unsplash.com/photo-1519183071298-a2962be90b5a?q=80&w=1200&auto=format&fit=crop'],
    category: 'Electronics',
    brand: 'Canon',
    rating: 4.6,
    reviews: 892,
    inStock: true,
    features: ['32.5MP Sensor', '4K Video', 'Dual Pixel CMOS', 'WiFi & Bluetooth']
  },

  // Fashion
  {
    id: 'fashion-1',
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Air cushioning technology',
    price: 9999,
    originalPrice: 12999,
    images: ['https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop'],
    category: 'Fashion',
    brand: 'Nike',
    rating: 4.5,
    reviews: 2156,
    inStock: true,
    features: ['Air Cushioning', 'Lightweight', 'Breathable Mesh', 'Durable Sole']
  },
  {
    id: 'fashion-2',
    name: "Levi's 501 Original",
    description: 'Classic straight fit jeans with authentic vintage styling',
    price: 3499,
    originalPrice: 4999,
    images: ['https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop'],
    category: 'Fashion',
    brand: 'Levis',
    rating: 4.4,
    reviews: 3847,
    inStock: true,
    features: ['100% Cotton', 'Straight Fit', 'Classic 5-Pocket', 'Button Fly']
  },
  {
    id: 'fashion-3',
    name: 'Ray-Ban Wayfarer',
    description: 'Classic sunglasses with UV protection and timeless style',
    price: 6499,
    originalPrice: 8999,
    images: ['https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop'],
    category: 'Fashion',
    brand: 'Ray-Ban',
    rating: 4.7,
    reviews: 1234,
    inStock: true,
    features: ['UV Protection', 'Acetate Frame', 'Glass Lenses', 'Classic Design']
  },

  // Home & Garden
  {
    id: 'home-1',
    name: '3-Seater Fabric Sofa',
    description: 'Comfortable modern sofa set perfect for living room',
    price: 29999,
    originalPrice: 39999,
    images: ['https://images.unsplash.com/photo-1549187774-b4b0a34a3d6c?q=80&w=1200&auto=format&fit=crop'],
    category: 'Home & Garden',
    brand: 'HomeLux',
    rating: 4.7,
    reviews: 567,
    inStock: true,
    features: ['Premium Fabric', 'Wooden Frame', 'Comfortable Seating', 'Modern Design']
  },
  {
    id: 'home-2',
    name: 'Dining Table 6-Seater',
    description: 'Solid wood dining set with 6 chairs',
    price: 19999,
    originalPrice: 24999,
    images: ['https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop'],
    category: 'Home & Garden',
    brand: 'WoodCraft',
    rating: 4.6,
    reviews: 423,
    inStock: true,
    features: ['Solid Wood', '6 Chairs Included', 'Scratch Resistant', 'Easy Assembly']
  },

  // Sports
  {
    id: 'sports-1',
    name: 'Cricket Bat English Willow',
    description: 'Professional grade cricket bat made from premium English willow',
    price: 8999,
    originalPrice: 12999,
    images: ['https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200&auto=format&fit=crop'],
    category: 'Sports',
    brand: 'SG',
    rating: 4.7,
    reviews: 834,
    inStock: true,
    features: ['English Willow', 'Professional Grade', 'Perfect Balance', 'Premium Grip']
  },
  {
    id: 'sports-2',
    name: 'Yoga Mat Premium',
    description: 'Non-slip yoga mat perfect for all yoga practices',
    price: 999,
    originalPrice: 1499,
    images: ['https://images.unsplash.com/photo-1544937954-fa07a98d237f?q=80&w=1200&auto=format&fit=crop'],
    category: 'Sports',
    brand: 'ZenFit',
    rating: 4.4,
    reviews: 1876,
    inStock: true,
    features: ['Non-slip Surface', 'Eco-friendly', '6mm Thickness', 'Carrying Strap']
  },

  // Books
  {
    id: 'books-1',
    name: 'Atomic Habits',
    description: 'Transform your life with tiny changes in behavior - James Clear',
    price: 499,
    originalPrice: 699,
    images: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'],
    category: 'Books',
    brand: 'Penguin',
    rating: 4.9,
    reviews: 5672,
    inStock: true,
    features: ['Bestseller', 'Self-Help', '320 Pages', 'Paperback']
  },
  {
    id: 'books-2',
    name: 'Harry Potter Box Set',
    description: 'Complete collection of all 7 Harry Potter books in a collector edition',
    price: 3499,
    originalPrice: 4999,
    images: ['https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop'],
    category: 'Books',
    brand: 'Bloomsbury',
    rating: 5.0,
    reviews: 2341,
    inStock: true,
    features: ['Complete Series', 'Hardcover', 'Collector Edition', 'Gift Box']
  },

  // Toys
  {
    id: 'toys-1',
    name: 'LEGO Creator Set',
    description: '1000+ pieces for creative building and endless fun',
    price: 4999,
    originalPrice: 6999,
    images: ['https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop'],
    category: 'Toys',
    brand: 'LEGO',
    rating: 4.8,
    reviews: 1456,
    inStock: true,
    features: ['1000+ Pieces', 'Creative Building', 'Ages 8+', 'Instructions Included']
  },
  {
    id: 'toys-2',
    name: 'RC Drift Car',
    description: 'High-speed remote control drift car with LED lights',
    price: 3499,
    originalPrice: 4999,
    images: ['https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop'],
    category: 'Toys',
    brand: 'X-Toys',
    rating: 4.6,
    reviews: 923,
    inStock: true,
    features: ['Remote Control', '25km/h Speed', 'LED Lights', 'Rechargeable Battery']
  }
];