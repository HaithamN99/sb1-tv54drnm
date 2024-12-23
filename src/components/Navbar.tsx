import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { School, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/blog', label: 'المدونة' },
    { path: '#features', label: 'المميزات' },
    { path: '#how-it-works', label: 'كيف يعمل' },
    { path: '#testimonials', label: 'آراء العملاء' },
    { path: '#partners', label: 'شركاؤنا' },
    { path: '#faq', label: 'الأسئلة الشائعة' },
    { path: '#pricing', label: 'الأسعار' },
    { path: '#contact', label: 'اتصل بنا' }
  ];

  const scrollToSection = (path: string) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      navigate(path);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-emerald-600/95 backdrop-blur-lg shadow-lg'
          : 'bg-emerald-600'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity"
          >
            <School className="h-8 w-8" />
            <span className="text-xl font-bold">نظام إدارة المدارس</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-white hover:bg-emerald-700 transition-colors md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className={`px-3 py-2 mx-1 rounded-md text-sm font-medium text-white transition-colors
                  ${
                    isActive(item.path)
                      ? 'bg-emerald-700'
                      : 'hover:bg-emerald-700/50'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
        >
          <div className="space-y-2 pb-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className={`block w-full rounded-md px-4 py-2 text-right text-sm text-white transition-colors
                  ${
                    isActive(item.path)
                      ? 'bg-emerald-700'
                      : 'hover:bg-emerald-700/50'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;