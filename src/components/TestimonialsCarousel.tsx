import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className={`w-full max-w-4xl mx-auto ${isArabic ? 'rtl' : 'ltr'}`}>
      <Carousel 
        className="w-full" 
        opts={{
          align: "start",
          containScroll: "trimSnaps",
          direction: isArabic ? "rtl" : "ltr",
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
              <div className="cosmic-card h-full flex flex-col">
                <div className="flex items-start mb-4">
                  <div className={`${isArabic ? 'ml-4' : 'mr-4'}`}>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cosmic-blue">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold ${isArabic ? 'text-right' : 'text-left'}`}>{testimonial.author}</h4>
                    <p className={`text-white/70 text-sm ${isArabic ? 'text-right' : 'text-left'}`}>{testimonial.position}</p>
                  </div>
                </div>
                <p className={`text-white/80 italic flex-grow ${isArabic ? 'text-right' : 'text-left'}`}>"{testimonial.quote}"</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 mt-4">
          <CarouselPrevious 
            className={`relative ${isArabic ? 'order-last' : 'order-first'} static bg-cosmic-blue/10 hover:bg-cosmic-blue/20 border-cosmic-blue/20`}
            aria-label={isArabic ? "التالي" : "Previous"}
          />
          <CarouselNext 
            className={`relative ${isArabic ? 'order-first' : 'order-last'} static bg-cosmic-blue/10 hover:bg-cosmic-blue/20 border-cosmic-blue/20`}
            aria-label={isArabic ? "السابق" : "Next"}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
