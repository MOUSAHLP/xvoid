import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const CareerForm: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isArabic = location.pathname.includes('/ar');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    resume: null as File | null,
    message: ''
  });

  const positions = [
    { value: 'frontend', label: isArabic ? 'مطور واجهة أمامية' : 'Frontend Developer' },
    { value: 'backend', label: isArabic ? 'مطور خلفية' : 'Backend Developer' },
    { value: 'fullstack', label: isArabic ? 'مطور متكامل' : 'Full Stack Developer' },
    { value: 'ui-ux', label: isArabic ? 'مصمم UI/UX' : 'UI/UX Designer' },
    { value: 'other', label: isArabic ? 'وظيفة أخرى' : 'Other Position' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: isArabic ? "خطأ في حجم الملف" : "File Size Error",
          description: isArabic 
            ? "حجم الملف يجب أن يكون أقل من 5 ميجابايت"
            : "File size must be less than 5MB",
          variant: "destructive",
        });
        return;
      }
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.resume) {
      toast({
        title: isArabic ? "مطلوب ملف السيرة الذاتية" : "Resume Required",
        description: isArabic 
          ? "الرجاء تحميل ملف السيرة الذاتية"
          : "Please upload your resume file",
        variant: "destructive",
      });
      return;
    }

    const submitData = new FormData();
    submitData.append('full_name', formData.fullName);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('position', formData.position);
    submitData.append('experience', formData.experience);
    submitData.append('message', formData.message);
    if (formData.portfolio) submitData.append('portfolio_url', formData.portfolio);
    submitData.append('resume', formData.resume);

    try {
      setIsSubmitting(true);

      const response = await fetch('http://127.0.0.1:8000/api/careers', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Submission failed');
      }

      toast({
        title: isArabic ? "تم إرسال طلبك بنجاح" : "Application Submitted Successfully",
        description: isArabic 
          ? "سنراجع طلبك ونتواصل معك قريباً. شكراً لاهتمامك!"
          : "We've received your application and will review it shortly. Thank you for your interest!",
        variant: "default",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        portfolio: '',
        resume: null,
        message: ''
      });

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: isArabic ? "خطأ في الإرسال" : "Submission Error",
        description: isArabic 
          ? "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة"
          : "An error occurred while submitting. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
              {isArabic ? "الاسم الكامل" : "Full Name"}
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="cosmic-input w-full"
              placeholder={isArabic ? "أدخل اسمك الكامل" : "Enter your full name"}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {isArabic ? "البريد الإلكتروني" : "Email"}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="cosmic-input w-full"
              placeholder={isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              {isArabic ? "رقم الهاتف" : "Phone Number"}
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="cosmic-input w-full"
              placeholder={isArabic ? "أدخل رقم هاتفك" : "Enter your phone number"}
            />
          </div>

          {/* Position */}
          <div>
            <label htmlFor="position" className="block text-sm font-medium mb-2">
              {isArabic ? "الوظيفة المطلوبة" : "Position"}
            </label>
            <select
              id="position"
              name="position"
              required
              value={formData.position}
              onChange={handleInputChange}
              className="cosmic-input w-full"
            >
              <option value="">
                {isArabic ? "اختر الوظيفة" : "Select position"}
              </option>
              {positions.map(pos => (
                <option key={pos.value} value={pos.value}>
                  {pos.label}
                </option>
              ))}
            </select>
          </div>

          {/* Years of Experience */}
          <div>
            <label htmlFor="experience" className="block text-sm font-medium mb-2">
              {isArabic ? "سنوات الخبرة" : "Years of Experience"}
            </label>
            <input
              id="experience"
              type="text"
              name="experience"
              required
              value={formData.experience}
              onChange={handleInputChange}
              className="cosmic-input w-full"
              placeholder={isArabic ? "مثال: 3 سنوات" : "e.g., 3 years"}
            />
          </div>

          {/* Portfolio URL */}
          <div>
            <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
              {isArabic ? "رابط معرض الأعمال" : "Portfolio URL"}
            </label>
            <input
              id="portfolio"
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleInputChange}
              className="cosmic-input w-full"
              placeholder={isArabic ? "أدخل رابط محفظتك" : "Enter your portfolio URL"}
            />
          </div>
        </div>

        {/* Resume Upload */}
        <div>
          <label htmlFor="resume" className="block text-sm font-medium mb-2">
            {isArabic ? "السيرة الذاتية" : "Resume"} *
          </label>
          <input
            id="resume"
            type="file"
            name="resume"
            required
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="cosmic-input w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
          <p className="text-sm text-muted-foreground mt-1">
            {isArabic ? "PDF, DOC, أو DOCX (الحد الأقصى 5 ميجابايت)" : "PDF, DOC, or DOCX (max 5MB)"}
          </p>
          {formData.resume && (
            <p className="text-sm text-green-600 mt-1">
              {isArabic ? "تم اختيار الملف: " : "Selected file: "}
              {formData.resume.name}
            </p>
          )}
        </div>

        {/* Cover Letter / Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {isArabic ? "رسالة تعريفية" : "Cover Letter"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="cosmic-input w-full"
            placeholder={isArabic ? "اكتب رسالتك هنا..." : "Write your message here..."}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button 
            type="submit" 
            className="cosmic-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {isArabic ? "جاري الإرسال..." : "Submitting..."}
              </span>
            ) : (
              isArabic ? "إرسال الطلب" : "Submit Application"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;