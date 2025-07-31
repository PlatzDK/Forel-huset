import React from 'react';
import { Fish, Facebook, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, content } = useLanguage();
  const footerData = content.footer;
  const aboutData = content.about;

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Fish className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Sommerhus Fiskeri</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {aboutData.description[language]}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerData.contact[language]}</h3>
            <div className="space-y-2 text-slate-300">
              <p>{footerData.address[language]}</p>
              <p>{footerData.phone}</p>
              <p>{footerData.email}</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerData.follow[language]}</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>{footerData.copyright[language]}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;