import React from 'react';
import { BookOpen, Users, BarChart3, Calendar, Shield, Headphones } from 'lucide-react';
import Container from '../layout/Container';
import Card from '../ui/Card';

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
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">مميزات النظام</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من المميزات المتقدمة لتحسين إدارة مؤسستك التعليمية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group p-6 hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <div className="relative">
                  <feature.icon className="h-12 w-12 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;