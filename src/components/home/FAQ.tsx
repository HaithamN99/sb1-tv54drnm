import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Container from '../layout/Container';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'كيف يمكنني البدء باستخدام النظام؟',
      answer: 'يمكنك البدء من خلال إنشاء حساب جديد والاشتراك في إحدى خططنا. سيقوم فريق الدعم بمساعدتك في إعداد النظام وتدريب الموظفين.'
    },
    {
      question: 'هل يمكن تخصيص النظام حسب احتياجات مدرستي؟',
      answer: 'نعم، النظام مرن وقابل للتخصيص بالكامل. يمكنك تعديل الإعدادات والتقارير حسب متطلبات مدرستك.'
    },
    {
      question: 'ما هي متطلبات استخدام النظام؟',
      answer: 'يحتاج النظام فقط إلى متصفح حديث واتصال بالإنترنت. يمكن استخدامه على أي جهاز كمبيوتر أو جهاز محمول.'
    },
    {
      question: 'كيف يتم حماية بيانات المدرسة؟',
      answer: 'نستخدم أحدث تقنيات التشفير وأنظمة الحماية لضمان أمن البيانات. يتم عمل نسخ احتياطية يومية وتخزينها في خوادم آمنة.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول نظام إدارة المدارس
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-emerald-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-4' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;