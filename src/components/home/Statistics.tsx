import React from 'react';
import { Users, GraduationCap, School, Award } from 'lucide-react';
import Container from '../layout/Container';

const Statistics: React.FC = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'طالب وطالبة' },
    { icon: GraduationCap, value: '95%', label: 'نسبة النجاح' },
    { icon: School, value: '500+', label: 'مدرسة' },
    { icon: Award, value: '50+', label: 'جائزة تميز' },
  ];

  return (
    <section className="py-20 bg-emerald-900 text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 flex justify-center">
                <stat.icon className="h-12 w-12 text-emerald-300 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold mb-2 text-emerald-300">{stat.value}</div>
              <div className="text-emerald-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Statistics;