// Enhanced AI-powered chatbot logic for Mega Mart
export const chatbotLogic = (userInput: string) => {
  const input = userInput.toLowerCase();

  // Order tracking with real data
  if (input.includes('order') || input.includes('track') || input.includes('shipping') || input.includes('delivery')) {
    const orders = JSON.parse(localStorage.getItem('megamart_orders') || '[]');
    
    if (orders.length > 0) {
      const latestOrder = orders[0];
      const statusMessages: { [key: string]: string } = {
        'confirmed': `Your order ${latestOrder.id} is confirmed! 🎉 We're preparing it for shipment.`,
        'processing': `Your order ${latestOrder.id} is being processed. Expected delivery in 3-5 business days.`,
        'shipped': `Great news! Your order ${latestOrder.id} has been shipped! 📦 Track it to see live updates.`,
        'delivered': `Your order ${latestOrder.id} has been delivered successfully! ✅ We hope you love it!`
      };
      
      return {
        text: statusMessages[latestOrder.status] || `Your order status: ${latestOrder.status}`,
        suggestions: ['View all orders', 'Track shipment', 'Need help?', 'Start shopping']
      };
    } else {
      return {
        text: `You don't have any orders yet. 🛍️ Browse our amazing collection and place your first order!`,
        suggestions: ['Browse Electronics', 'Fashion Deals', 'New Arrivals', 'Help Center']
      };
    }
  }

  // Smart product recommendations
  if (input.includes('product') || input.includes('suggest') || input.includes('recommend') || input.includes('show') || input.includes('buy')) {
    const trendingProducts = [
      { name: 'iPhone 15 Pro', price: '₹1,34,900', discount: '10% off', category: 'Electronics', emoji: '📱' },
      { name: 'Samsung Galaxy Watch 6', price: '₹30,999', discount: '15% off', category: 'Electronics', emoji: '⌚' },
      { name: 'Nike Revolution 7', price: '₹4,995', discount: '25% off', category: 'Fashion', emoji: '👟' },
      { name: 'Levi\'s Slim Fit Jeans', price: '₹2,999', discount: '30% off', category: 'Fashion', emoji: '👖' },
      { name: 'Sony WH-1000XM5 Headphones', price: '₹29,990', discount: '20% off', category: 'Electronics', emoji: '🎧' },
      { name: 'Ikea Modern Sofa', price: '₹24,999', discount: 'Free shipping', category: 'Home & Garden', emoji: '🛋️' },
      { name: 'Yoga Mat Premium', price: '₹1,499', discount: 'Buy 1 Get 1', category: 'Sports', emoji: '🧘' },
      { name: 'Royal Enfield Helmet', price: '₹3,499', discount: '15% off', category: 'Sports', emoji: '🏍️' }
    ];
    
    const randomProducts = trendingProducts.sort(() => 0.5 - Math.random()).slice(0, 3);
    const productText = randomProducts.map(p => `${p.emoji} **${p.name}**\n   ${p.price} | ${p.discount}`).join('\n\n');
    
    return {
      text: `🔥 **Hot Deals Just For You!**\n\n${productText}\n\nDon't miss out on these amazing offers!`,
      suggestions: ['View All Products', 'Electronics', 'Fashion', 'Home & Garden']
    };
  }

  // Categories
  const categories = ['electronics', 'fashion', 'home', 'garden', 'sports', 'books', 'toys'];
  const foundCategory = categories.find(cat => input.includes(cat));
  
  if (foundCategory) {
    return {
      text: `Great choice! I can help you explore our ${foundCategory} section. We have amazing deals and top-quality products waiting for you! 🛍️`,
      suggestions: [`Browse ${foundCategory}`, 'View deals', 'Popular items', 'Back to categories']
    };
  }

  // Exclusive deals and offers
  if (input.includes('deal') || input.includes('offer') || input.includes('discount') || input.includes('sale') || input.includes('promo')) {
    return {
      text: `🎉 **MEGA DEALS ALERT!**\n\n🔥 **Flash Sales:**\n   • 25% OFF on Electronics\n   • Buy 2 Get 1 FREE on Fashion\n   • FLAT 40% OFF on Home Decor\n\n💰 **Special Offers:**\n   • Free Shipping on orders ₹999+\n   • Extra 10% on first order\n   • Cashback up to ₹500\n\n⏰ Limited time only! Grab now!`,
      suggestions: ['Shop Electronics', 'Fashion Deals', 'Home Decor', 'All Categories']
    };
  }

  // Help and support
  if (input.includes('help') || input.includes('support') || input.includes('problem') || input.includes('issue')) {
    return {
      text: `I'm here to help! 💪 You can:\n• Track your orders\n• Browse categories\n• Check deals and offers\n• Get product recommendations\n\nWhat would you like to do?`,
      suggestions: ['Track order', 'Browse products', 'Contact support', 'Return policy']
    };
  }

  // Cart related
  if (input.includes('cart') || input.includes('checkout') || input.includes('buy')) {
    return {
      text: `🛒 Ready to shop? You can add items to your cart and checkout anytime. Need help finding something specific?`,
      suggestions: ['View cart', 'Continue shopping', 'Checkout help', 'Payment options']
    };
  }

  // Smart price inquiries
  if (input.includes('price') || input.includes('cost') || input.includes('expensive') || input.includes('cheap') || input.includes('budget')) {
    return {
      text: `💰 **Shopping on a Budget?**\n\nWe have options for every budget!\n\n📱 **Electronics:** ₹999 - ₹1,50,000\n👕 **Fashion:** ₹499 - ₹15,000\n🏠 **Home & Garden:** ₹299 - ₹50,000\n\n🎁 Plus, we offer EMI options on purchases above ₹10,000!`,
      suggestions: ['Budget Products', 'Premium Collection', 'EMI Options', 'Best Deals']
    };
  }

  // Return and refund policy
  if (input.includes('return') || input.includes('refund') || input.includes('replace') || input.includes('exchange')) {
    return {
      text: `✅ **Easy Returns & Refunds**\n\n• 7-day return policy\n• Free return pickup\n• Instant refunds (3-5 days)\n• Easy exchange options\n\nYour satisfaction is our priority! 😊`,
      suggestions: ['Initiate Return', 'View Policy', 'Track Refund', 'Contact Support']
    };
  }

  // Payment methods
  if (input.includes('payment') || input.includes('pay') || input.includes('cod') || input.includes('upi') || input.includes('card')) {
    return {
      text: `💳 **Multiple Payment Options:**\n\n✓ Credit/Debit Cards\n✓ UPI (Google Pay, PhonePe, Paytm)\n✓ Net Banking\n✓ Cash on Delivery\n✓ Digital Wallets\n\n🔒 100% Secure & Encrypted`,
      suggestions: ['View Cart', 'Checkout Now', 'Payment Issues', 'EMI Details']
    };
  }

  // Greetings - personalized
  if (input.includes('hi') || input.includes('hello') || input.includes('hey') || input.includes('good morning') || input.includes('good evening')) {
    const greetings = [
      `Hello! 👋 Welcome to Mega Mart! I'm your AI shopping assistant. How can I make your day better?`,
      `Hey there! 🎉 Great to see you! Ready to find some amazing deals?`,
      `Hi! ✨ Welcome back to Mega Mart! What are you looking for today?`
    ];
    return {
      text: greetings[Math.floor(Math.random() * greetings.length)],
      suggestions: ['Hot Deals', 'Track Order', 'New Arrivals', 'Help Center']
    };
  }

  // Thank you messages
  if (input.includes('thank') || input.includes('thanks') || input.includes('appreciate')) {
    return {
      text: `You're very welcome! 😊 I'm always here to help. Is there anything else you'd like to know?`,
      suggestions: ['Continue Shopping', 'Track Order', 'View Deals', 'Contact Support']
    };
  }

  // Default smart response
  return {
    text: `🤖 **I'm your AI Shopping Assistant!**\n\nI can help you with:\n\n🛍️ Product recommendations\n📦 Order tracking & status\n🎁 Latest deals & offers\n💬 Customer support\n🔍 Category browsing\n💰 Price comparisons\n\nWhat would you like to explore?`,
    suggestions: ['Track My Order', 'Show Hot Deals', 'Product Suggestions', 'Help Center']
  };
};