import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">نظام إدارة المدارس المتكامل</h1>
        <p className="text-xl mb-8">حل شامل لإدارة مؤسستك التعليمية بكفاءة عالية</p>
        <a
          href="#features"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          اكتشف المزيد
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;