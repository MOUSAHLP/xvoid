import React, { useState } from "react";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground";
import { Send, Mail, MapPin, Phone as PhoneIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const isArabic = language === 'ar';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          title: formData.subject,
          body: formData.message
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 422 && data.errors) {
          const fieldMap: Record<string, keyof typeof formData> = {
            name: 'name',
            email: 'email',
            phone: 'phone',
            title: 'subject',
            body: 'message'
          };

          const formattedErrors: Record<string, string> = {};
          
          for (const [apiField, fieldErrors] of Object.entries(data.errors)) {
            const formField = fieldMap[apiField];
            if (formField && Array.isArray(fieldErrors) && fieldErrors.length > 0) {
              formattedErrors[formField] = fieldErrors[0];
            }
          }

          setErrors(formattedErrors);

          toast({
            title: isArabic ? "خطأ في التحقق" : "Validation Error",
            description: isArabic 
              ? "الرجاء تصحيح الأخطاء في النموذج"
              : "Please correct the errors in the form",
            variant: "destructive",
          });
          return;
        }
        throw new Error(data.message || 'Submission failed');
      }

      toast({
        title: t('contact.success.title'),
        description: t('contact.success.message'),
        variant: "default",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: t('contact.error.title'),
        description: error instanceof Error 
          ? error.message 
          : t('contact.error.message'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={isArabic ? 'rtl' : 'ltr'}>
      <StarBackground />
      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cosmic-pink/10 rounded-full text-cosmic-pink mb-4">
              {t('contact.title')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? (
                <>أرسل لنا <span className="text-glow-pink">إرسالًا بين النجوم</span></>
              ) : (
                <>Send Us an <span className="text-glow-pink">Interstellar Transmission</span></>
              )}
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="cosmic-card"
            >
              <h2 className="text-2xl font-bold mb-6">{t('contact.form.subject')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`cosmic-input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`cosmic-input ${errors.email ? 'border-red-500' : ''}`}
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-white/70 mb-2">
                      {t('contact.form.phone')} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`cosmic-input ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm text-white/70 mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={`cosmic-input ${errors.subject ? 'border-red-500' : ''}`}
                      placeholder={t('contact.form.subjectPlaceholder')}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`cosmic-input ${errors.message ? 'border-red-500' : ''}`}
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="cosmic-button group w-full"
                  disabled={isSubmitting}
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('buttons.sending')}
                      </>
                    ) : (
                      <>
                        {t('buttons.send')}
                        <Send className={`${isArabic ? 'mr-2' : 'ml-2'} w-4 h-4 transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="cosmic-card mb-8">
                <h2 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-blue/10 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-cosmic-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{t('contact.info.email.title')}</h3>
                      <a href={`mailto:${t('contact.email')}`} className="text-white/70 hover:text-cosmic-blue transition-colors">{t('contact.email')}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-pink/10 flex items-center justify-center mr-4">
                      <PhoneIcon className="w-6 h-6 text-cosmic-pink" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{t('contact.info.phone.title')}</h3>
                      <a href={`tel:${t('contact.phone1')}`} className="text-white/70 hover:text-cosmic-pink transition-colors">{t('contact.phone1_display')}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-pink/10 flex items-center justify-center mr-4">
                      <PhoneIcon className="w-6 h-6 text-cosmic-pink" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{t('contact.info.phone.title')}</h3>
                      <a href={`tel:${t('contact.phone2')}`} className="text-white/70 hover:text-cosmic-pink transition-colors">{t('contact.phone2_display')}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cosmic-purple/10 flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-cosmic-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{t('contact.info.location.title')}</h3>
                      <a 
                        href={`https://maps.google.com/?q=${t('contact.address')}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white/70 hover:text-cosmic-purple transition-colors"
                      >
                        {t('contact.address')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="cosmic-card">
                <h2 className="text-2xl font-bold mb-6">{t('contact.hours.title')}</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t('contact.hours.weekdays')}</span>
                    <span className="text-cosmic-blue">{t('contact.hours.weekdayHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.saturday')}</span>
                    <span className="text-cosmic-purple">{t('contact.hours.saturdayHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.sunday')}</span>
                    <span className="text-cosmic-pink">{t('contact.hours.sundayHours')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;