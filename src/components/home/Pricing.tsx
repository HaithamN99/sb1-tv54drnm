import React, { useState } from 'react';
import Container from '../layout/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'الخطة الأساسية',
      monthlyPrice: 200,
      yearlyPrice: 2000,
      features: [
        'إدارة المناهج الأساسية',
        'تقارير بسيطة',
        'إدارة الطلاب',
        'الجدول الدراسي',
        'دعم فني بالبريد الإلكتروني'
      ]
    },
    {
      name: 'الخطة المتقدمة',
      monthlyPrice: 500,
      yearlyPrice: 5000,
      isPopular: true,
      features: [
        'جميع مميزات الخطة الأساسية',
        'تقارير متقدمة',
        'إدارة الموظفين',
        'نظام الحضور والغياب',
        'دعم فني على مدار الساعة'
      ]
    },
    {
      name: 'الخطة الاحترافية',
      monthlyPrice: 1000,
      yearlyPrice: 10000,
      features: [
        'جميع مميزات الخطة المتقدمة',
        'تحليلات متقدمة',
        'نظام المحاسبة',
        'إدارة النقل المدرسي',
        'تدريب شامل للموظفين'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">خطط الأسعار</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            اختر الخطة المناسبة لمؤسستك التعليمية
          </p>

          <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-md transition-colors ${
                !isYearly ? 'bg-white shadow-sm' : 'text-gray-600'
              }`}
            >
              شهري
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-md transition-colors ${
                isYearly ? 'bg-white shadow-sm' : 'text-gray-600'
              }`}
            >
              سنوي
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                plan.isPopular ? 'border-2 border-emerald-500' : ''
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 right-4 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm">
                  الأكثر شعبية
                </span>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-600"> ريال/{isYearly ? 'سنة' : 'شهر'}</span>
                {isYearly && (
                  <p className="text-emerald-600 text-sm mt-2">
                    وفر {plan.monthlyPrice * 2} ريال سنوياً
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.isPopular ? 'primary' : 'outline'}
                className="w-full"
              >
                اشترك الآن
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;