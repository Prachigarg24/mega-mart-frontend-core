# Mega Mart - Complete eCommerce Frontend

A beautiful, modern, and fully functional eCommerce frontend built with React, TypeScript, Tailwind CSS, and Redux Toolkit. Inspired by Amazon and Flipkart, featuring a comprehensive shopping experience with animations, responsive design, and production-ready code.

![Mega Mart Banner](src/assets/hero-banner.jpg)

## ✨ Features

### 🛍️ Complete Shopping Experience
- **Product Catalog**: 18+ products across 6 categories (Electronics, Fashion, Home & Garden, Sports, Books, Toys)
- **Shopping Cart**: Add/remove items, quantity management, persistent storage
- **Wishlist**: Save favorite items, move to cart functionality
- **Product Details**: Comprehensive product information with ratings and reviews
- **Categories**: Well-organized product browsing by category

### 🎨 Modern UI/UX
- **Beautiful Design**: Modern gradient-based design system with consistent branding
- **Animations**: Smooth Framer Motion animations and transitions
- **Responsive**: Mobile-first design that works on all devices
- **Dark Mode Ready**: Full dark mode support built into the design system
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation

### 🔧 Technical Features
- **React 18**: Latest React with hooks and modern patterns
- **TypeScript**: Full type safety throughout the application
- **Redux Toolkit**: Efficient state management for cart, wishlist, and user data
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Framer Motion**: Smooth animations and micro-interactions
- **React Router**: Client-side routing with proper navigation
- **Toast Notifications**: User feedback with react-hot-toast
- **Local Storage**: Persistent cart and wishlist data

### 📱 Responsive Design
- Mobile-optimized navbar with hamburger menu
- Responsive grid layouts for all screen sizes
- Touch-friendly interface elements
- Optimized images with lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mega-mart.git
   cd mega-mart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

The application will be available at `http://localhost:8080`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui components
│   ├── Navbar.tsx       # Main navigation component
│   ├── ProductCard.tsx  # Product display component
│   └── Footer.tsx       # Site footer
├── pages/               # Page components
│   ├── Index.tsx        # Homepage
│   ├── Cart.tsx         # Shopping cart page
│   ├── Wishlist.tsx     # Wishlist page
│   └── NotFound.tsx     # 404 error page
├── store/               # Redux state management
│   ├── slices/          # Redux Toolkit slices
│   └── store.ts         # Store configuration
├── data/                # Mock data
│   └── products.ts      # Product catalog data
├── assets/              # Static assets
│   ├── hero-banner.jpg  # Homepage hero image
│   └── categories/      # Category images
├── index.css            # Global styles and design system
└── App.tsx              # Main application component
```

## 🎯 Key Components

### Navbar Component
- Responsive navigation with mobile menu
- Search functionality (UI ready)
- Cart and wishlist indicators with item counts
- User authentication state display

### ProductCard Component
- Product image with hover effects
- Rating display with stars
- Add to cart and wishlist functionality
- Stock status indicators
- Price with discount badges

### Cart System
- Add/remove products
- Quantity management
- Real-time price calculations
- Shipping and tax calculations
- Persistent storage across sessions

### Wishlist System
- Save favorite products
- Move items to cart
- Remove items functionality
- Persistent storage

## 🎨 Design System

The application uses a comprehensive design system built with CSS custom properties and Tailwind CSS:

### Color Palette
- **Primary**: Deep blue (#2563eb) - Brand color for buttons and highlights
- **Secondary**: Vibrant orange (#f97316) - Accent color for CTAs
- **Success**: Green (#16a34a) - Positive actions
- **Warning**: Amber (#d97706) - Attention states
- **Destructive**: Red (#dc2626) - Error states

### Components
- **Buttons**: Multiple variants with hover effects and animations
- **Cards**: Elevated cards with hover effects and shadows
- **Gradients**: Beautiful gradient backgrounds for hero sections
- **Typography**: Consistent text sizing and spacing

### Animations
- Page transitions with Framer Motion
- Hover effects on interactive elements
- Loading states and skeleton loaders
- Smooth cart/wishlist updates

## 🛒 Product Categories

1. **Electronics** (5 products)
   - iPhone 14, Samsung Galaxy S23, Sony Headphones, MacBook Air, Canon Camera

2. **Fashion** (3 products)
   - Nike Shoes, Levi's Jeans, Ray-Ban Sunglasses

3. **Home & Garden** (2 products)
   - Fabric Sofa, Dining Table Set

4. **Sports** (2 products)
   - Cricket Bat, Yoga Mat

5. **Books** (2 products)
   - Atomic Habits, Harry Potter Box Set

6. **Toys** (2 products)
   - LEGO Creator Set, RC Drift Car

## 🔄 State Management

The application uses Redux Toolkit for state management with the following slices:

- **authSlice**: User authentication and profile data
- **cartSlice**: Shopping cart items and calculations
- **wishlistSlice**: Saved products for later
- **productSlice**: Product catalog and filtering

All data is persisted to localStorage for a seamless user experience.

## 📱 Mobile Experience

- Touch-optimized interface
- Mobile-first responsive design
- Hamburger menu navigation
- Swipe-friendly product cards
- Optimized form inputs for mobile keyboards

## 🔒 SEO & Performance

- Semantic HTML structure
- Meta tags for social sharing
- Image optimization with lazy loading
- Proper heading hierarchy
- Fast loading with Vite build system
- Clean, crawlable URLs

## 🚀 Deployment

The application is ready for deployment to platforms like:

- **Vercel**: Zero-config deployment
- **Netlify**: Static site hosting
- **GitHub Pages**: Free hosting option

### Deploy to Vercel
```bash
npm run build
npx vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist folder to Netlify dashboard
```

## 🛣️ Future Enhancements

This frontend is designed to be easily extended with additional features:

### Authentication & User Management
- User registration and login
- Profile management
- Order history
- Address book

### Enhanced Shopping Features
- Product search and filtering
- Product reviews and ratings
- Comparison tool
- Recently viewed products

### Backend Integration
- REST API integration
- Real-time inventory updates
- Payment processing
- Order management

### Additional Pages
- Category pages with filtering
- Individual product detail pages
- Checkout process
- User dashboard

## 💡 Development Tips

1. **Adding New Products**: Update the `mockProducts` array in `src/data/products.ts`

2. **Styling**: Use the design system tokens defined in `src/index.css` instead of arbitrary Tailwind classes

3. **State Management**: Follow the existing Redux patterns for any new features

4. **Components**: Keep components small and focused on a single responsibility

5. **Performance**: Use React.memo() for expensive components and lazy loading for routes

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

*Ready to shop? Visit the live demo at [Mega Mart](https://megamart.lovable.app)*
