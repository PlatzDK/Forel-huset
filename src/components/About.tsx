import React from 'react';
import { Waves, Fish, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { language, content } = useLanguage();
  const aboutData = content.about;

  const iconMap = [Waves, Fish, Home];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              {aboutData.title[language]}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {aboutData.description[language]}
            </p>

            {/* Features */}
            <div className="space-y-6">
              {aboutData.features.map((feature, index) => {
                const IconComponent = iconMap[index];
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {feature.title[language]}
                      </h3>
                      <p className="text-slate-600">
                        {feature.description[language]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/images/house/exterior-1.jpg"
                alt="Cozy summer house exterior"
                className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/images/house/jetty.jpg"
                alt="Wooden jetty on lake"
                className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/images/house/interior-1.jpg"
                alt="Interior of summer house"
                className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/images/house/fishing-scene.jpg"
                alt="Fisherman with catch"
                className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;