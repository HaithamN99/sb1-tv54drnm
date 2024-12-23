import React from 'react';
import { BookOpen, Users, BarChart3, Calendar, Shield, Headphones } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'إدارة المناهج',
      description: 'إدارة وتنظيم المقررات الدراسية بكفاءة عالية'
    },
    {
      icon: Users,
      title: 'إدارة الطلاب',
      description: 'متابعة شاملة لشؤون الطلاب وأدائهم'
    },
    {
      icon: BarChart3,
      title: 'التقارير والإحصائيات',
      description: 'تحليلات متقدمة وتقارير تفصيلية'
    },
    {
      icon: Calendar,
      title: 'الجدول الدراسي',
      description: 'تنظيم وإدارة الجداول الدراسية بسهولة'
    },
    {
      icon: Shield,
      title: 'الأمن والخصوصية',
      description: 'حماية كاملة لبيانات المدرسة والطلاب'
    },
    {
      icon: Headphones,
      title: 'الدعم الفني',
      description: 'دعم فني متواصل على مدار الساعة'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">مميزات النظام</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <feature.icon className="h-12 w-12 text-emerald-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;