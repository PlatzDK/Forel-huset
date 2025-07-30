import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'da' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  da: {
    // Navigation
    'nav.home': 'Hjem',
    'nav.about': 'Om Huset',
    'nav.gallery': 'Galleri',
    'nav.activities': 'Oplevelser',
    'nav.testimonials': 'Anmeldelser',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Dit Perfekte Sommerhus ved Vandet',
    'hero.subtitle': 'Oplev ro, natur og fantastisk fiskeri i dette charmerende danske sommerhus',
    'hero.cta': 'Book Nu',
    
    // About
    'about.title': 'Om Sommerhuset',
    'about.description': 'Vores hyggelige sommerhus ligger i naturskønne omgivelser med direkte adgang til nogle af Danmarks bedste fiskevande. Perfekt til en fredelig ferie med familie eller venner.',
    'about.feature1': 'Direkte Vandadgang',
    'about.feature1.desc': 'Kun få skridt fra huset til den private badebro',
    'about.feature2': 'Fantastisk Fiskeri',
    'about.feature2.desc': 'Rig på gedde, sandart og aborre',
    'about.feature3': 'Moderne Faciliteter',
    'about.feature3.desc': 'Fuldt udstyret køkken og komfortable soveværelser',
    
    // Gallery
    'gallery.title': 'Galleri',
    'gallery.subtitle': 'Oplev vores smukke sommerhus og fantastiske omgivelser',
    
    // Activities
    'activities.title': 'Oplevelser & Aktiviteter',
    'activities.fishing': 'Fiskeri',
    'activities.fishing.desc': 'Fantastiske fiskemuligheder med gedde, sandart og aborre. Perfekt både fra båd og land.',
    'activities.nature': 'Naturoplevelser',
    'activities.nature.desc': 'Udforsk de smukke skove og stier omkring huset. Perfekt til fuglekiggeri og vandreture.',
    'activities.relaxation': 'Afslapning',
    'activities.relaxation.desc': 'Nyd roen ved vandet, grill på terrassen eller bare slap af i den fredelige atmosfære.',
    
    // Testimonials
    'testimonials.title': 'Hvad Gæsterne Siger',
    'testimonials.review1': 'Det perfekte sted for en fisker! Fantastiske fangster og en utrolig rolig atmosfære.',
    'testimonials.review1.author': 'Hans M., Tyskland',
    'testimonials.review2': 'Huset er smukt og perfekt placeret. Vi kommer helt sikkert tilbage!',
    'testimonials.review2.author': 'Sarah L., England',
    'testimonials.review3': 'En fantastisk ferie med familien. Børnene elskede at fiske fra molen.',
    'testimonials.review3.author': 'Lars P., Danmark',
    
    // FAQ
    'faq.title': 'Ofte Stillede Spørgsmål',
    'faq.license.q': 'Skal jeg have fisketegn?',
    'faq.license.a': 'Ja, alle over 18 år skal have fisketegn. Du kan købe det online på fisketegn.dk',
    'faq.equipment.q': 'Er der fiskegrej?',
    'faq.equipment.a': 'Grundlæggende fiskegrej er tilgængeligt, men vi anbefaler at medbringe dit eget.',
    'faq.boat.q': 'Er båd inkluderet?',
    'faq.boat.a': 'Ja, en lille robåd er inkluderet i lejen. Motor kan lejes mod ekstra betaling.',
    'faq.checkin.q': 'Hvornår kan jeg tjekke ind?',
    'faq.checkin.a': 'Check-in er fra kl. 15:00 og check-out inden kl. 11:00.',
    
    // Contact
    'contact.title': 'Kontakt & Booking',
    'contact.subtitle': 'Klar til at booke dit drømmeophold? Kontakt os i dag!',
    'contact.name': 'Dit Navn',
    'contact.email': 'Email',
    'contact.phone': 'Telefon',
    'contact.dates': 'Ønskede Datoer',
    'contact.guests': 'Antal Gæster',
    'contact.message': 'Besked',
    'contact.send': 'Send Forespørgsel',
    'contact.phone.label': 'Ring os',
    'contact.email.label': 'Send email',
    
    // Footer
    'footer.contact': 'Kontakt Information',
    'footer.address': 'Søvej 123, 5000 Odense, Danmark',
    'footer.phone': '+45 12 34 56 78',
    'footer.email': 'info@sommerhus-fiskeri.dk',
    'footer.follow': 'Følg Os',
    'footer.copyright': '© 2025 Sommerhus Fiskeri. Alle rettigheder forbeholdes.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.activities': 'Activities',
    'nav.testimonials': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Your Perfect Waterfront Summer House',
    'hero.subtitle': 'Experience tranquility, nature and fantastic fishing in this charming Danish summer house',
    'hero.cta': 'Book Now',
    
    // About
    'about.title': 'About the Summer House',
    'about.description': 'Our cozy summer house is located in beautiful natural surroundings with direct access to some of Denmark\'s best fishing waters. Perfect for a peaceful vacation with family or friends.',
    'about.feature1': 'Direct Water Access',
    'about.feature1.desc': 'Just steps from the house to your private jetty',
    'about.feature2': 'Fantastic Fishing',
    'about.feature2.desc': 'Rich in pike, perch and zander',
    'about.feature3': 'Modern Facilities',
    'about.feature3.desc': 'Fully equipped kitchen and comfortable bedrooms',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'See what your perfect fishing adventure looks like',
    
    // Activities
    'activities.title': 'Experiences & Activities',
    'activities.fishing': 'Fishing',
    'activities.fishing.desc': 'Fantastic fishing opportunities with pike, perch and zander. Perfect both from boat and shore.',
    'activities.nature': 'Nature Experiences',
    'activities.nature.desc': 'Explore the beautiful forests and trails around the house. Perfect for birdwatching and hiking.',
    'activities.relaxation': 'Relaxation',
    'activities.relaxation.desc': 'Enjoy the peace by the water, barbecue on the terrace or just relax in the peaceful atmosphere.',
    
    // Testimonials
    'testimonials.title': 'What Guests Say',
    'testimonials.review1': 'The perfect place for an angler! Fantastic catches and an incredibly peaceful atmosphere.',
    'testimonials.review1.author': 'Hans M., Germany',
    'testimonials.review2': 'The house is beautiful and perfectly located. We will definitely be back!',
    'testimonials.review2.author': 'Sarah L., England',
    'testimonials.review3': 'A fantastic vacation with the family. The kids loved fishing from the jetty.',
    'testimonials.review3.author': 'Lars P., Denmark',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.license.q': 'Do I need a fishing license?',
    'faq.license.a': 'Yes, everyone over 18 needs a fishing license. You can buy it online at fisketegn.dk',
    'faq.equipment.q': 'Is fishing equipment provided?',
    'faq.equipment.a': 'Basic fishing equipment is available, but we recommend bringing your own.',
    'faq.boat.q': 'Is a boat included?',
    'faq.boat.a': 'Yes, a small rowing boat is included in the rental. Motor can be rented for an additional fee.',
    'faq.checkin.q': 'When can I check in?',
    'faq.checkin.a': 'Check-in is from 3:00 PM and check-out before 11:00 AM.',
    
    // Contact
    'contact.title': 'Contact & Booking',
    'contact.subtitle': 'Ready to book your dream stay? Contact us today!',
    'contact.name': 'Your Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.dates': 'Preferred Dates',
    'contact.guests': 'Number of Guests',
    'contact.message': 'Message',
    'contact.send': 'Send Inquiry',
    'contact.phone.label': 'Call us',
    'contact.email.label': 'Send email',
    
    // Footer
    'footer.contact': 'Contact Information',
    'footer.address': 'Søvej 123, 5000 Odense, Denmark',
    'footer.phone': '+45 12 34 56 78',
    'footer.email': 'info@sommerhus-fiskeri.dk',
    'footer.follow': 'Follow Us',
    'footer.copyright': '© 2025 Summer House Fishing. All rights reserved.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über das Haus',
    'nav.gallery': 'Galerie',
    'nav.activities': 'Aktivitäten',
    'nav.testimonials': 'Bewertungen',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Ihr Perfektes Ferienhaus am Wasser',
    'hero.subtitle': 'Erleben Sie Ruhe, Natur und fantastisches Angeln in diesem charmanten dänischen Ferienhaus',
    'hero.cta': 'Jetzt Buchen',
    
    // About
    'about.title': 'Über das Ferienhaus',
    'about.description': 'Unser gemütliches Ferienhaus liegt in wunderschöner natürlicher Umgebung mit direktem Zugang zu einigen der besten Angelgewässer Dänemarks. Perfekt für einen friedlichen Urlaub mit Familie oder Freunden.',
    'about.feature1': 'Direkter Wasserzugang',
    'about.feature1.desc': 'Nur wenige Schritte vom Haus zu Ihrem privaten Steg',
    'about.feature2': 'Fantastisches Angeln',
    'about.feature2.desc': 'Reich an Hecht, Barsch und Zander',
    'about.feature3': 'Moderne Ausstattung',
    'about.feature3.desc': 'Voll ausgestattete Küche und komfortable Schlafzimmer',
    
    // Gallery
    'gallery.title': 'Galerie',
    'gallery.subtitle': 'Sehen Sie, wie Ihr perfektes Angelabenteuer aussieht',
    
    // Activities
    'activities.title': 'Erlebnisse & Aktivitäten',
    'activities.fishing': 'Angeln',
    'activities.fishing.desc': 'Fantastische Angelmöglichkeiten mit Hecht, Barsch und Zander. Perfekt sowohl vom Boot als auch vom Ufer.',
    'activities.nature': 'Naturerlebnisse',
    'activities.nature.desc': 'Erkunden Sie die schönen Wälder und Wanderwege rund um das Haus. Perfekt für Vogelbeobachtung und Wandern.',
    'activities.relaxation': 'Entspannung',
    'activities.relaxation.desc': 'Genießen Sie die Ruhe am Wasser, grillen Sie auf der Terrasse oder entspannen Sie einfach in der friedlichen Atmosphäre.',
    
    // Testimonials
    'testimonials.title': 'Was Gäste Sagen',
    'testimonials.review1': 'Der perfekte Ort für einen Angler! Fantastische Fänge und eine unglaublich friedliche Atmosphäre.',
    'testimonials.review1.author': 'Hans M., Deutschland',
    'testimonials.review2': 'Das Haus ist wunderschön und perfekt gelegen. Wir kommen definitiv wieder!',
    'testimonials.review2.author': 'Sarah L., England',
    'testimonials.review3': 'Ein fantastischer Urlaub mit der Familie. Die Kinder liebten das Angeln vom Steg.',
    'testimonials.review3.author': 'Lars P., Dänemark',
    
    // FAQ
    'faq.title': 'Häufig Gestellte Fragen',
    'faq.license.q': 'Brauche ich einen Angelschein?',
    'faq.license.a': 'Ja, jeder über 18 Jahre braucht einen Angelschein. Sie können ihn online unter fisketegn.dk kaufen.',
    'faq.equipment.q': 'Ist Angelausrüstung vorhanden?',
    'faq.equipment.a': 'Grundlegende Angelausrüstung ist verfügbar, aber wir empfehlen, Ihre eigene mitzubringen.',
    'faq.boat.q': 'Ist ein Boot inbegriffen?',
    'faq.boat.a': 'Ja, ein kleines Ruderboot ist in der Miete enthalten. Motor kann gegen Aufpreis gemietet werden.',
    'faq.checkin.q': 'Wann kann ich einchecken?',
    'faq.checkin.a': 'Check-in ist ab 15:00 Uhr und Check-out vor 11:00 Uhr.',
    
    // Contact
    'contact.title': 'Kontakt & Buchung',
    'contact.subtitle': 'Bereit, Ihren Traumaufenthalt zu buchen? Kontaktieren Sie uns heute!',
    'contact.name': 'Ihr Name',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.dates': 'Gewünschte Daten',
    'contact.guests': 'Anzahl Gäste',
    'contact.message': 'Nachricht',
    'contact.send': 'Anfrage Senden',
    'contact.phone.label': 'Rufen Sie uns an',
    'contact.email.label': 'E-Mail senden',
    
    // Footer
    'footer.contact': 'Kontaktinformationen',
    'footer.address': 'Søvej 123, 5000 Odense, Dänemark',
    'footer.phone': '+45 12 34 56 78',
    'footer.email': 'info@sommerhus-fiskeri.dk',
    'footer.follow': 'Folgen Sie Uns',
    'footer.copyright': '© 2025 Ferienhaus Angeln. Alle Rechte vorbehalten.',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('da');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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