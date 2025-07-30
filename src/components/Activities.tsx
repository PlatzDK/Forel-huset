import React from 'react';
import { Fish, TreePine, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Activities: React.FC = () => {
  const { t } = useLanguage();

  const activities = [
    {
      icon: Fish,
      title: t('activities.fishing'),
      description: t('activities.fishing.desc'),
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: TreePine,
      title: t('activities.nature'),
      description: t('activities.nature.desc'),
      image: "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Coffee,
      title: t('activities.relaxation'),
      description: t('activities.relaxation.desc'),
      image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            {t('activities.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white bg-opacity-90 rounded-lg flex items-center justify-center">
                  <activity.icon className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {activity.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;