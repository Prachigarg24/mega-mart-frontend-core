import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from './ProductCard';
import { Product } from '../store/slices/productSlice';

interface ProductCarouselProps {
  products: Product[];
  title: string;
  autoplay?: boolean;
}

const ProductCarousel = ({ products, title, autoplay = true }: ProductCarouselProps) => {
  const [autoplayPlugin] = useState(
    autoplay ? Autoplay({ delay: 3000, stopOnInteraction: true }) : undefined
  );

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={autoplayPlugin ? [autoplayPlugin] : []}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product, index) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <ProductCard product={product} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4" />
        <CarouselNext className="hidden md:flex -right-4" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
