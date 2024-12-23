import React from 'react';
import { Star, Quote } from 'lucide-react';
import Container from '../layout/Container';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'د. محمد العتيبي',
      role: 'مدير مدرسة',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      content: 'نظام متكامل ساعدنا في تحسين إدارة المدرسة بشكل كبير. التقارير والإحصائيات المتوفرة مفيدة جداً في اتخاذ القرارات.'
    },
    {
      name: 'أ. سارة القحطاني',
      role: 'معلمة',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      content: 'سهولة الاستخدام والواجهة العربية جعلت العمل أكثر سلاسة. أصبح تنظيم الفصول والواجبات أسهل بكثير.'
    },
    {
      name: 'م. فهد السالم',
      role: 'مشرف تقني',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      content: 'الدعم الفني ممتاز والتحديثات المستمرة تجعل النظام دائماً متطوراً. الأمان والخصوصية من أهم مميزات النظام.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
      <Container>
        <div className="text-center mb-16">
          <Quote className="h-12 w-12 text-emerald-300 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">ماذا يقول عملاؤنا؟</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            آراء مديري المدارس والمعلمين الذين يستخدمون نظامنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ml-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-emerald-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-emerald-100 mb-4">{testimonial.content}</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;