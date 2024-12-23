import React from 'react';
import Container from '../layout/Container';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'وزارة التعليم',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'جامعة الملك سعود',
      logo: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'مؤسسة التدريب التقني',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'الهيئة السعودية للتخصصات التعليمية',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">شركاء النجاح</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نفخر بشراكتنا مع أهم المؤسسات التعليمية في المملكة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;