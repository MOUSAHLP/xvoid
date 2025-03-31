import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const CareerForm: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isArabic = location.pathname.includes('/ar');
  const { toast } = useToast();

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    toast({
      title: isArabic ? "تم إرسال طلبك بنجاح" : "Application Submitted Successfully",
      description: isArabic 
        ? "سنراجع طلبك ونتواصل معك قريباً"
        : "We'll review your application and get back to you soon",
      variant: "default",
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {isArabic ? "الاسم الكامل" : "Full Name"}
            </label>
            <input
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
            <label className="block text-sm font-medium mb-2">
              {isArabic ? "البريد الإلكتروني" : "Email"}
            </label>
            <input
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
            <label className="block text-sm font-medium mb-2">
              {isArabic ? "رقم الهاتف" : "Phone Number"}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="cosmic-input w-full"
              placeholder={isArabic ? "أدخل رقم هاتفك" : "Enter your phone number"}
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {isArabic ? "الوظيفة المطلوبة" : "Position"}
            </label>
            <select
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
            <label className="block text-sm font-medium mb-2">
              {isArabic ? "سنوات الخبرة" : "Years of Experience"}
            </label>
            <input
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
            <label className="block text-sm font-medium mb-2">
              {isArabic ? "رابط معرض الأعمال" : "Portfolio URL"}
            </label>
            <input
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
          <label className="block text-sm font-medium mb-2">
            {isArabic ? "السيرة الذاتية" : "Resume"}
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="cosmic-input w-full"
          />
          <p className="text-sm text-white/50 mt-1">
            {isArabic ? "PDF, DOC, أو DOCX (الحد الأقصى 5 ميجابايت)" : "PDF, DOC, or DOCX (max 5MB)"}
          </p>
        </div>

        {/* Cover Letter / Message */}
        <div>
          <label className="block text-sm font-medium mb-2">
            {isArabic ? "رسالة تعريفية" : "Cover Letter"}
          </label>
          <textarea
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
          <button type="submit" className="cosmic-button">
            {isArabic ? "إرسال الطلب" : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm; 