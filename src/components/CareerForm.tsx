import React, { useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from "@/data/emailjs.config";
import { Send } from 'lucide-react';

const CareerForm: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isArabic = location.pathname.includes('/ar');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  emailjs.init(emailjsConfig.publicKey);

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

  // Add validation states
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: ''
  });

  const positions = [
    { value: 'frontend', label: isArabic ? 'مطور واجهة أمامية' : 'Frontend Developer' },
    { value: 'backend', label: isArabic ? 'مطور خلفية' : 'Backend Developer' },
    { value: 'fullstack', label: isArabic ? 'مطور متكامل' : 'Full Stack Developer' },
    { value: 'ui-ux', label: isArabic ? 'مصمم UI/UX' : 'UI/UX Designer' },
    { value: 'other', label: isArabic ? 'وظيفة أخرى' : 'Other Position' }
  ];

  const validateField = (name: string, value: string | File | null) => {
    let error = '';

    switch (name) {
      case 'fullName':
        if (!value) {
          error = isArabic ? 'الاسم الكامل مطلوب' : 'Full name is required';
        }
        break;
      case 'email':
        if (!value) {
          error = isArabic ? 'البريد الإلكتروني مطلوب' : 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value as string)) {
          error = isArabic ? 'البريد الإلكتروني غير صالح' : 'Invalid email address';
        }
        break;
      case 'phone':
        if (!value) {
          error = isArabic ? 'رقم الهاتف مطلوب' : 'Phone number is required';
        }
        break;
      case 'position':
        if (!value) {
          error = isArabic ? 'الوظيفة مطلوبة' : 'Position is required';
        }
        break;
      case 'experience':
        if (!value) {
          error = isArabic ? 'سنوات الخبرة مطلوبة' : 'Experience is required';
        }
        break;
      case 'resume':
        if (!value) {
          error = isArabic ? 'السيرة الذاتية مطلوبة' : 'Resume is required';
        }
        break;
    }

    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
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
      setErrors(prev => ({
        ...prev,
        resume: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      position: validateField('position', formData.position),
      experience: validateField('experience', formData.experience),
      resume: validateField('resume', formData.resume)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: isArabic ? "خطأ في النموذج" : "Form Error",
        description: isArabic
          ? "يرجى ملء جميع الحقول المطلوبة بشكل صحيح"
          : "Please fill in all required fields correctly",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Format the message to include position, experience, and message
      const formattedMessage = `
Position: ${formData.position}
Experience: ${formData.experience}
Message: ${formData.message}
Portfolio: ${formData.portfolio || 'Not provided'}
      `.trim();

      // Prepare email template parameters
      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: 'New Job Request',
        message: formattedMessage,
        time: new Date().toLocaleString()
      };

      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      if (response.status === 200) {
        toast({
          title: isArabic ? "تم إرسال طلبك بنجاح" : "Application Submitted Successfully",
          description: isArabic
            ? "سنراجع طلبك ونتواصل معك قريباً. شكراً لاهتمامك!"
            : "We've received your application and will review it shortly. Thank you for your interest!",
          variant: "default",
        });

        // Reset form and errors
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
        setErrors({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          resume: ''
        });
      } else {
        throw new Error('Failed to send application');
      }
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
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
              {isArabic ? "الاسم الكامل" : "Full Name"} *
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`cosmic-input w-full ${errors.fullName ? 'border-red-500 focus:border-red-500' : ''}`}
              placeholder={isArabic ? "أدخل اسمك الكامل" : "Enter your full name"}
            />
            {errors.fullName && (
              <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {isArabic ? "البريد الإلكتروني" : "Email"} *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`cosmic-input w-full ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
              placeholder={isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              {isArabic ? "رقم الهاتف" : "Phone Number"} *
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`cosmic-input w-full ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
              placeholder={isArabic ? "أدخل رقم هاتفك" : "Enter your phone number"}
            />
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Position */}
          <div>
            <label htmlFor="position" className="block text-sm font-medium mb-2">
              {isArabic ? "الوظيفة المطلوبة" : "Position"} *
            </label>
            <select
              id="position"
              name="position"
              required
              value={formData.position}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`cosmic-input w-full ${errors.position ? 'border-red-500 focus:border-red-500' : ''}`}
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
            {errors.position && (
              <p className="text-sm text-red-600 mt-1">{errors.position}</p>
            )}
          </div>

          {/* Years of Experience */}
          <div>
            <label htmlFor="experience" className="block text-sm font-medium mb-2">
              {isArabic ? "سنوات الخبرة" : "Years of Experience"} *
            </label>
            <input
              id="experience"
              type="text"
              name="experience"
              required
              value={formData.experience}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`cosmic-input w-full ${errors.experience ? 'border-red-500 focus:border-red-500' : ''}`}
              placeholder={isArabic ? "مثال: 3 سنوات" : "e.g., 3 years"}
            />
            {errors.experience && (
              <p className="text-sm text-red-600 mt-1">{errors.experience}</p>
            )}
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
            className={`cosmic-input w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 ${errors.resume ? 'border-red-500 focus:border-red-500' : ''}`}
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
          {errors.resume && (
            <p className="text-sm text-red-600 mt-1">{errors.resume}</p>
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
            className="cosmic-button group w-full"
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
              <>
                <span className="group-hover:-translate-x-1">   {isArabic ? "إرسال الطلب" : "Submit Application"} </span>
                <Send className={`${isArabic ? 'mr-2' : 'ml-2'} w-4 h-4 transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;