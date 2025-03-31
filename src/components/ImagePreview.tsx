import React, { useState, useEffect, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ImagePreviewProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ImagePreview = ({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious 
}: ImagePreviewProps) => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  // Touch handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      onNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      onPrevious();
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowRight' && !isArabic && currentIndex < images.length - 1) {
        onNext();
      }
      if (e.key === 'ArrowLeft' && !isArabic && currentIndex > 0) {
        onPrevious();
      }
      // Reverse for Arabic
      if (e.key === 'ArrowLeft' && isArabic && currentIndex < images.length - 1) {
        onNext();
      }
      if (e.key === 'ArrowRight' && isArabic && currentIndex > 0) {
        onPrevious();
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onNext, onPrevious, onClose, isArabic]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Navigation buttons - hide on mobile */}
        <div className="hidden md:block">
          {currentIndex > 0 && (
            <button
              className="absolute left-4 p-2 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
            >
              <ChevronLeft size={32} />
            </button>
          )}
          
          {currentIndex < images.length - 1 && (
            <button
              className="absolute right-4 p-2 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>

        {/* Image with touch events */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={images[currentIndex]}
            alt={`Preview ${currentIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain"
            draggable={false}
          />
          
          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white/70">
            {isArabic ? (
              `${images.length} / ${currentIndex + 1}`
            ) : (
              `${currentIndex + 1} / ${images.length}`
            )}
          </div>

          {/* Mobile swipe indicator - show only on touch devices */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 md:hidden">
            <div className="text-white/50 text-sm">
              {isArabic ? "اسحب للتنقل بين الصور" : "Swipe to navigate"}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImagePreview; 