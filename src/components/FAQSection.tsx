import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import faqData from '@/data/faq.json';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC<{ showAll?: boolean }> = ({ showAll = false }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Get FAQ data based on language
  const faqs: FAQItem[] = isArabic ? faqData.ar : faqData.en;
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-4">
        {displayedFaqs.map((faq) => (
          <div
            key={faq.id}
            className="cosmic-card cursor-pointer transition-all duration-300"
            onClick={() => toggleItem(faq.id)}
          >
            <div className="flex justify-between items-center p-4">
              <h3 className="text-lg font-semibold">
                {faq.question}
              </h3>
              {openItems.includes(faq.id) ? (
                <ChevronUp className="w-5 h-5 text-cosmic-blue" />
              ) : (
                <ChevronDown className="w-5 h-5 text-cosmic-blue" />
              )}
            </div>
            {openItems.includes(faq.id) && (
              <div className="p-4 pt-0 text-white/70">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection; 