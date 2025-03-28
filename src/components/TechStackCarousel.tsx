
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/context/LanguageContext";

interface Technology {
  id: number;
  name: string;
  icon: string;
  category: string;
}

interface TechStackCarouselProps {
  technologies: Technology[];
}

const TechStackCarousel: React.FC<TechStackCarouselProps> = ({ technologies }) => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  // Defensive check to ensure technologies is an array
  if (!technologies || !Array.isArray(technologies)) {
    console.error("Technologies prop is not an array:", technologies);
    return <div className="p-4">No technology data available</div>;
  }

  // Group technologies by category
  const categorizedTech: Record<string, Technology[]> = {};
  technologies.forEach(tech => {
    if (!categorizedTech[tech.category]) {
      categorizedTech[tech.category] = [];
    }
    categorizedTech[tech.category].push(tech);
  });

  // If no categories were created, return early
  if (Object.keys(categorizedTech).length === 0) {
    console.error("No categories found in technologies data");
    return <div className="p-4">No technology categories available</div>;
  }

  return (
    <Carousel className="w-full" dir={isArabic ? 'rtl' : 'ltr'}>
      <CarouselContent>
        {Object.entries(categorizedTech).map(([category, techs]) => (
          <CarouselItem key={category} className="md:basis-1/2 lg:basis-1/3">
            <div className="cosmic-card h-full">
              <h3 className="text-xl font-bold mb-4 text-glow">{category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {techs.map(tech => (
                  <div key={tech.id} className="flex flex-col items-center">
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <span className="text-sm text-white/70">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-2 mt-4">
        <CarouselPrevious className={`relative ${isArabic ? 'order-last' : 'order-first'} static bg-cosmic-purple/10 hover:bg-cosmic-purple/20 border-cosmic-purple/20`} />
        <CarouselNext className={`relative ${isArabic ? 'order-first' : 'order-last'} static bg-cosmic-purple/10 hover:bg-cosmic-purple/20 border-cosmic-purple/20`} />
      </div>
    </Carousel>
  );
};

export default TechStackCarousel;
