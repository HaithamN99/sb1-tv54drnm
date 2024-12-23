import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 text-white lg:py-32">
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-right">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              نظام إدارة المدارس
              <span className="block text-yellow-400">المتكامل والذكي</span>
            </h1>
            <p className="mb-8 text-lg text-emerald-100 md:text-xl">
              حل شامل لإدارة مؤسستك التعليمية بكفاءة عالية مع أحدث التقنيات
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-end">
              <Button variant="secondary" size="lg">ابدأ الآن مجاناً</Button>
              <Button variant="outline" size="lg">تواصل معنا</Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <GraduationCap className="mb-3 h-8 w-8 text-yellow-400" />
                  <h3 className="mb-2 font-bold">إدارة الطلاب</h3>
                  <p className="text-sm text-emerald-100">متابعة شاملة لأداء الطلاب وتقدمهم</p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <BookOpen className="mb-3 h-8 w-8 text-yellow-400" />
                  <h3 className="mb-2 font-bold">المناهج الدراسية</h3>
                  <p className="text-sm text-emerald-100">إدارة متكاملة للمناهج والمقررات</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <Users className="mb-3 h-8 w-8 text-yellow-400" />
                  <h3 className="mb-2 font-bold">شؤون الموظفين</h3>
                  <p className="text-sm text-emerald-100">إدارة فعالة للكادر التعليمي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-10 mix-blend-overlay"></div>
    </div>
  );
};

export default HeroSection;