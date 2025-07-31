import React, { createContext, useContext, useState, ReactNode } from 'react';
import { siteContent } from '../content/siteContent';

type Language = 'da' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  content: typeof siteContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('da');

  // Simple translation function that gets content from the centralized structure
  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = siteContent;
    
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    // If we have a language object, return the appropriate language
    if (current && typeof current === 'object' && language in current) {
      return current[language];
    }
    
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, content: siteContent }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};