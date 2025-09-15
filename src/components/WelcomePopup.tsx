import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShoppingBag, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay on every visit
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md mx-4 bg-card border border-border rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
            
            {/* Content */}
            <div className="relative p-8 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/20"
              >
                <Sparkles className="h-8 w-8 text-primary" />
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="text-2xl font-bold text-foreground mb-3"
              >
                Welcome to Mega Mart!
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="text-muted-foreground mb-6 leading-relaxed"
              >
                Discover amazing deals on your favorite products. Get up to 70% off on selected items!
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="flex items-center justify-center gap-6 mb-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-primary" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-primary" />
                  <span>Daily Deals</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="flex gap-3"
              >
                <Button
                  onClick={closePopup}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Start Shopping
                </Button>
                <Button
                  onClick={closePopup}
                  variant="outline"
                  className="flex-1"
                >
                  Maybe Later
                </Button>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-primary/10 rounded-full -translate-x-10 -translate-y-10" />
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-accent/10 rounded-full translate-x-8 translate-y-8" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;