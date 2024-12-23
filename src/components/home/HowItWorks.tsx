import React from 'react';
import { ClipboardList, UserPlus, BookOpen, CheckCircle } from 'lucide-react';
import Container from '../layout/Container';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'إنشاء حساب',
      description: 'سجل حساب جديد في أقل من دقيقة'
    },
    {
      icon: ClipboardList,
      title: 'إعداد النظام',
      description: 'قم بتخصيص النظام حسب احتياجات مدرستك'
    },
    {
      icon: BookOpen,
      title: 'إدارة المناهج',
      description: 'أضف المناهج الدراسية وقم بتنظيمها'
    },
    {
      icon: CheckCircle,
      title: 'البدء بالاستخدام',
      description: 'ابدأ باستخدام النظام وإدارة مدرستك بكفاءة'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">كيف يعمل النظام؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            خطوات بسيطة تفصلك عن بدء استخدام نظام إدارة المدارس
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-emerald-200 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                  <div className="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-100 rounded-full border-4 border-emerald-500 z-20" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;