import React, { useState } from 'react';
import { Menu, X, Fish, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, content } = useLanguage();

  const navData = content.navigation;
  const footerData = content.footer;

  const menuItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'gallery', href: '#gallery' },
    { key: 'activities', href: '#activities' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' },
  ];

  const languages = [
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Fish className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-slate-800">Sommerhus Fiskeri</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
              >
                {navData[item.key as keyof typeof navData][language]}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600">{footerData.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600">{footerData.email}</span>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'da' | 'en' | 'de')}
              className="text-sm border border-slate-300 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-emerald-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                >
                  {navData[item.key as keyof typeof navData][language]}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-600">{footerData.phone}</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Mail className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-600">{footerData.email}</span>
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'da' | 'en' | 'de')}
                  className="w-full text-sm border border-slate-300 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;