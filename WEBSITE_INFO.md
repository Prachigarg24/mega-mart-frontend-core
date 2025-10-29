# MegaMart - Modern E-Commerce Platform

## 🚀 Live Demo
A fully functional e-commerce website with advanced features and modern UI/UX design.

## 📋 Project Overview
MegaMart is a comprehensive e-commerce platform built with cutting-edge web technologies. It features a responsive design, multiple theme options, user authentication, shopping cart functionality, and an AI-powered chatbot assistant.

## 🎯 Key Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse through multiple categories (Electronics, Fashion, Beauty, Home, Books, Sports)
- **Product Search**: Advanced search functionality with real-time filtering
- **Product Details**: Detailed product pages with images, descriptions, and specifications
- **Shopping Cart**: Add/remove items with quantity management
- **Wishlist**: Save favorite products for later
- **Checkout Process**: Streamlined checkout with order summary

### 👤 User Management
- **Authentication System**: Secure login and registration
- **User Profile**: Personalized user dashboard
- **Order History**: Track past purchases
- **Session Persistence**: Stay logged in across page refreshes

### 🎨 Theming & UI
- **7 Unique Themes**:
  - Light Orange (Default)
  - Dark Orange
  - Ocean Blue
  - Forest Green
  - Royal Purple
  - Sunset Red
  - Golden Yellow
- **Theme Persistence**: Your theme choice is saved
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern Animations**: Smooth transitions and hover effects

### 🤖 AI Features
- **Chatbot Assistant**: AI-powered customer support
- **Smart Recommendations**: Context-aware product suggestions
- **Quick Help**: Instant answers to common questions

### 📱 Additional Features
- **Welcome Popup**: First-time visitor greeting
- **Hot Deals Section**: Featured promotions and discounts
- **Category Navigation**: Easy browsing by category
- **Admin Panel**: Backend management interface
- **Settings Page**: Customize user preferences

## 💻 Tech Stack

### Frontend
- **React 18.3.1** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework

### State Management
- **Redux Toolkit** - Centralized state management
- **React Redux** - React bindings for Redux
- **Redux Persist** - State persistence

### Routing & Navigation
- **React Router DOM 6.30** - Client-side routing

### UI Components & Styling
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Beautiful component library
- **Lucide React** - Modern icon library
- **Framer Motion** - Animation library
- **next-themes** - Theme management

### Form Handling
- **React Hook Form** - Performant form management
- **Zod** - Schema validation

### Data Fetching
- **TanStack Query (React Query)** - Server state management
- **Axios** - HTTP client

### Notifications
- **React Hot Toast** - Toast notifications
- **Sonner** - Toast component library

### Utilities
- **date-fns** - Date utility library
- **clsx & tailwind-merge** - Conditional CSS classes
- **class-variance-authority** - Component variants

### Carousel & Sliders
- **Embla Carousel** - Touch-friendly carousel
- **embla-carousel-autoplay** - Auto-playing carousel

## 🏗️ Project Structure

```
megamart/
├── src/
│   ├── components/
│   │   ├── Chatbot/          # AI chatbot components
│   │   ├── ui/                # Reusable UI components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Footer.tsx         # Footer section
│   │   ├── ThemeToggle.tsx    # Theme switcher
│   │   └── ...
│   ├── pages/
│   │   ├── Index.tsx          # Home page
│   │   ├── Login.tsx          # Login page
│   │   ├── Register.tsx       # Registration page
│   │   ├── Cart.tsx           # Shopping cart
│   │   ├── ProductDetail.tsx  # Product details
│   │   └── ...
│   ├── store/
│   │   ├── slices/            # Redux slices
│   │   │   ├── authSlice.ts   # Authentication state
│   │   │   ├── cartSlice.ts   # Cart state
│   │   │   ├── wishlistSlice.ts # Wishlist state
│   │   │   └── productSlice.ts # Product state
│   │   └── store.ts           # Redux store configuration
│   ├── data/
│   │   ├── products.ts        # Product data
│   │   └── expandedProducts.ts # Extended product catalog
│   ├── assets/                # Images and static files
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   └── index.css              # Global styles & design system
├── public/                    # Static assets
└── package.json              # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#ff7b00) - Brand color
- **Secondary**: Coral - Accent color
- **Success**: Green - Success states
- **Warning**: Amber - Warning states
- **Destructive**: Red - Error states

### Design Principles
- **Mobile-First**: Responsive design from the ground up
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized for fast loading
- **Consistency**: Unified design language across all pages

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd megamart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📊 Performance Features
- **Code Splitting**: Optimized bundle sizes
- **Lazy Loading**: Images and components loaded on demand
- **Caching**: Redux persist for faster subsequent loads
- **Optimized Animations**: GPU-accelerated transitions

## 🔐 Security Features
- **Secure Authentication**: Protected routes and sessions
- **Input Validation**: Zod schema validation
- **XSS Protection**: Sanitized user inputs
- **Session Management**: Secure token handling

## 📈 Future Enhancements
- Payment gateway integration
- Real-time order tracking
- Product reviews and ratings
- Social media sharing
- Email notifications
- Multi-language support

## 👨‍💻 Developer
Built with ❤️ using modern web technologies

## 📝 License
This project is open source and available under the MIT License.

---

## 🎓 For Resume/Portfolio

### Project Highlights:
- **Full-Stack E-Commerce Platform** with 50+ products across 6 categories
- **7 Custom Themes** with persistent theme selection
- **Redux State Management** for cart, wishlist, and authentication
- **AI Chatbot Integration** for customer support
- **Responsive Design** optimized for all devices
- **Type-Safe Development** using TypeScript
- **Modern UI/UX** with Tailwind CSS and Radix UI
- **Performance Optimized** with lazy loading and code splitting

### Technical Skills Demonstrated:
- React.js & TypeScript
- State Management (Redux Toolkit)
- Routing (React Router)
- Form Handling & Validation
- API Integration
- Responsive Design
- Theme Management
- Component Architecture
- Performance Optimization

### Key Metrics:
- 50+ Products
- 6 Categories
- 7 Themes
- 15+ Pages
- 20+ Reusable Components
- 100% Responsive
