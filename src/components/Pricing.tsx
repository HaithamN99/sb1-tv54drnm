import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'الخطة الأساسية',
      price: '200',
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
      price: '500',
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
      price: '1000',
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
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">خطط الأسعار</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600"> ريال/شهر</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-emerald-500 ml-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-emerald-500 text-white rounded-lg py-3 px-6 hover:bg-emerald-600 transition duration-300">
                اشترك الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;