// Centralized content management - Update everything in one place!
// When you want to change text or images, just update this file and all languages will be updated automatically

export interface ContentItem {
  da: string;
  en: string;
  de: string;
}

export interface GalleryImage {
  src: string;
  alt: ContentItem;
}

export interface TestimonialItem {
  text: ContentItem;
  author: ContentItem;
  rating: number;
  image: string;
}

export interface FAQItem {
  question: ContentItem;
  answer: ContentItem;
}

export interface ActivityItem {
  title: ContentItem;
  description: ContentItem;
  image: string;
}

export interface FeatureItem {
  title: ContentItem;
  description: ContentItem;
}

// ===========================================
// MAIN CONTENT - UPDATE EVERYTHING HERE!
// ===========================================

export const siteContent = {
  // Navigation
  navigation: {
    home: { da: 'Hjem', en: 'Home', de: 'Startseite' },
    about: { da: 'Om Huset', en: 'About', de: 'Über das Haus' },
    gallery: { da: 'Galleri', en: 'Gallery', de: 'Galerie' },
    activities: { da: 'Oplevelser', en: 'Activities', de: 'Aktivitäten' },
    testimonials: { da: 'Anmeldelser', en: 'Reviews', de: 'Bewertungen' },
    faq: { da: 'FAQ', en: 'FAQ', de: 'FAQ' },
    contact: { da: 'Kontakt', en: 'Contact', de: 'Kontakt' },
  },

  // Hero Section
  hero: {
    title: {
      da: 'Dit Perfekte Sommerhus ved Vandet',
      en: 'Your Perfect Waterfront Summer House',
      de: 'Ihr Perfektes Ferienhaus am Wasser'
    },
    subtitle: {
      da: 'Oplev ro, natur og fantastisk fiskeri i dette charmerende danske sommerhus',
      en: 'Experience tranquility, nature and fantastic fishing in this charming Danish summer house',
      de: 'Erleben Sie Ruhe, Natur und fantastisches Angeln in diesem charmanten dänischen Ferienhaus'
    },
    cta: {
      da: 'Book Nu',
      en: 'Book Now',
      de: 'Jetzt Buchen'
    }
  },

  // About Section
  about: {
    title: {
      da: 'Om Sommerhuset',
      en: 'About the Summer House',
      de: 'Über das Ferienhaus'
    },
    description: {
      da: 'Vores hyggelige sommerhus ligger i naturskønne omgivelser med direkte adgang til nogle af Danmarks bedste fiskevande. Perfekt til en fredelig ferie med familie eller venner.',
      en: 'Our cozy summer house is located in beautiful natural surroundings with direct access to some of Denmark\'s best fishing waters. Perfect for a peaceful vacation with family or friends.',
      de: 'Unser gemütliches Ferienhaus liegt in wunderschöner natürlicher Umgebung mit direktem Zugang zu einigen der besten Angelgewässer Dänemarks. Perfekt für einen friedlichen Urlaub mit Familie oder Freunden.'
    },
    features: [
      {
        title: {
          da: 'Direkte Vandadgang',
          en: 'Direct Water Access',
          de: 'Direkter Wasserzugang'
        },
        description: {
          da: 'Kun få skridt fra huset til den private badebro',
          en: 'Just steps from the house to your private jetty',
          de: 'Nur wenige Schritte vom Haus zu Ihrem privaten Steg'
        }
      },
      {
        title: {
          da: 'Fantastisk Fiskeri',
          en: 'Fantastic Fishing',
          de: 'Fantastisches Angeln'
        },
        description: {
          da: 'Rig på gedde, sandart og aborre',
          en: 'Rich in pike, perch and zander',
          de: 'Reich an Hecht, Barsch und Zander'
        }
      },
      {
        title: {
          da: 'Moderne Faciliteter',
          en: 'Modern Facilities',
          de: 'Moderne Ausstattung'
        },
        description: {
          da: 'Fuldt udstyret køkken og komfortable soveværelser',
          en: 'Fully equipped kitchen and comfortable bedrooms',
          de: 'Voll ausgestattete Küche und komfortable Schlafzimmer'
        }
      }
    ] as FeatureItem[]
  },

  // Gallery Section - UPDATE IMAGES AND DESCRIPTIONS HERE!
  gallery: {
    title: {
      da: 'Galleri',
      en: 'Gallery',
      de: 'Galerie'
    },
    subtitle: {
      da: 'Oplev vores smukke sommerhus og fantastiske omgivelser',
      en: 'See what your perfect fishing adventure looks like',
      de: 'Sehen Sie, wie Ihr perfektes Angelabenteuer aussieht'
    },
    images: [
      {
        src: "/images/gallery/house-exterior.jpg",
        alt: {
          da: "Sommerhus udendørs udsigt",
          en: "Summer house exterior view",
          de: "Ferienhaus Außenansicht"
        }
      },
      {
        src: "/images/gallery/wooden-jetty.jpg",
        alt: {
          da: "Træmole på rolig sø",
          en: "Wooden jetty on calm lake",
          de: "Holzsteg am ruhigen See"
        }
      },
      {
        src: "/images/gallery/living-room.jpg",
        alt: {
          da: "Hyggelig indretning stue",
          en: "Cozy interior living room",
          de: "Gemütliches Wohnzimmer"
        }
      },
      {
        src: "/images/gallery/fishing-catch.jpg",
        alt: {
          da: "Succesfuld fiskefangst",
          en: "Successful fishing catch",
          de: "Erfolgreicher Fischfang"
        }
      },
      {
        src: "/images/gallery/sunset-lake.jpg",
        alt: {
          da: "Solnedgang over sø med mole",
          en: "Sunset over lake with jetty",
          de: "Sonnenuntergang über See mit Steg"
        }
      },
      {
        src: "/images/gallery/kitchen-dining.jpg",
        alt: {
          da: "Køkken og spiseplads",
          en: "Kitchen and dining area",
          de: "Küche und Essbereich"
        }
      },
      {
        src: "/images/gallery/bedroom.jpg",
        alt: {
          da: "Soveværelse med udsigt",
          en: "Bedroom with view",
          de: "Schlafzimmer mit Aussicht"
        }
      },
      {
        src: "/images/gallery/terrace.jpg",
        alt: {
          da: "Udendørs terrasse område",
          en: "Outdoor terrace area",
          de: "Außenterrasse"
        }
      },
      {
        src: "/images/gallery/fresh-fish.jpg",
        alt: {
          da: "Frisk fisk klar til tilberedning",
          en: "Fresh fish prepared for cooking",
          de: "Frischer Fisch zum Kochen vorbereitet"
        }
      },
      {
        src: "/images/gallery/evening-view.jpg",
        alt: {
          da: "Smuk solnedgang fra huset",
          en: "Beautiful sunset view from the house",
          de: "Schöner Sonnenuntergang vom Haus aus"
        }
      }
    ] as GalleryImage[]
  },

  // Activities Section
  activities: {
    title: {
      da: 'Oplevelser & Aktiviteter',
      en: 'Experiences & Activities',
      de: 'Erlebnisse & Aktivitäten'
    },
    items: [
      {
        title: {
          da: 'Fiskeri',
          en: 'Fishing',
          de: 'Angeln'
        },
        description: {
          da: 'Fantastiske fiskemuligheder med gedde, sandart og aborre. Perfekt både fra båd og land.',
          en: 'Fantastic fishing opportunities with pike, perch and zander. Perfect both from boat and shore.',
          de: 'Fantastische Angelmöglichkeiten mit Hecht, Barsch und Zander. Perfekt sowohl vom Boot als auch vom Ufer.'
        },
        image: "/images/activities/fishing.jpg"
      },
      {
        title: {
          da: 'Naturoplevelser',
          en: 'Nature Experiences',
          de: 'Naturerlebnisse'
        },
        description: {
          da: 'Udforsk de smukke skove og stier omkring huset. Perfekt til fuglekiggeri og vandreture.',
          en: 'Explore the beautiful forests and trails around the house. Perfect for birdwatching and hiking.',
          de: 'Erkunden Sie die schönen Wälder und Wanderwege rund um das Haus. Perfekt für Vogelbeobachtung und Wandern.'
        },
        image: "/images/activities/nature.jpg"
      },
      {
        title: {
          da: 'Afslapning',
          en: 'Relaxation',
          de: 'Entspannung'
        },
        description: {
          da: 'Nyd roen ved vandet, grill på terrassen eller bare slap af i den fredelige atmosfære.',
          en: 'Enjoy the peace by the water, barbecue on the terrace or just relax in the peaceful atmosphere.',
          de: 'Genießen Sie die Ruhe am Wasser, grillen Sie auf der Terrasse oder entspannen Sie einfach in der friedlichen Atmosphäre.'
        },
        image: "/images/activities/relaxation.jpg"
      }
    ] as ActivityItem[]
  },

  // Testimonials Section
  testimonials: {
    title: {
      da: 'Hvad Gæsterne Siger',
      en: 'What Guests Say',
      de: 'Was Gäste Sagen'
    },
    reviews: [
      {
        text: {
          da: 'Det perfekte sted for en fisker! Fantastiske fangster og en utrolig rolig atmosfære.',
          en: 'The perfect place for an angler! Fantastic catches and an incredibly peaceful atmosphere.',
          de: 'Der perfekte Ort für einen Angler! Fantastische Fänge und eine unglaublich friedliche Atmosphäre.'
        },
        author: {
          da: 'Hans M., Tyskland',
          en: 'Hans M., Germany',
          de: 'Hans M., Deutschland'
        },
        rating: 5,
        image: "/images/testimonials/hans.jpg"
      },
      {
        text: {
          da: 'Huset er smukt og perfekt placeret. Vi kommer helt sikkert tilbage!',
          en: 'The house is beautiful and perfectly located. We will definitely be back!',
          de: 'Das Haus ist wunderschön und perfekt gelegen. Wir kommen definitiv wieder!'
        },
        author: {
          da: 'Sarah L., England',
          en: 'Sarah L., England',
          de: 'Sarah L., England'
        },
        rating: 5,
        image: "/images/testimonials/sarah.jpg"
      },
      {
        text: {
          da: 'En fantastisk ferie med familien. Børnene elskede at fiske fra molen.',
          en: 'A fantastic vacation with the family. The kids loved fishing from the jetty.',
          de: 'Ein fantastischer Urlaub mit der Familie. Die Kinder liebten das Angeln vom Steg.'
        },
        author: {
          da: 'Lars P., Danmark',
          en: 'Lars P., Denmark',
          de: 'Lars P., Dänemark'
        },
        rating: 5,
        image: "/images/testimonials/lars.jpg"
      }
    ] as TestimonialItem[]
  },

  // FAQ Section
  faq: {
    title: {
      da: 'Ofte Stillede Spørgsmål',
      en: 'Frequently Asked Questions',
      de: 'Häufig Gestellte Fragen'
    },
    items: [
      {
        question: {
          da: 'Skal jeg have fisketegn?',
          en: 'Do I need a fishing license?',
          de: 'Brauche ich einen Angelschein?'
        },
        answer: {
          da: 'Ja, alle over 18 år skal have fisketegn. Du kan købe det online på fisketegn.dk',
          en: 'Yes, everyone over 18 needs a fishing license. You can buy it online at fisketegn.dk',
          de: 'Ja, jeder über 18 Jahre braucht einen Angelschein. Sie können ihn online unter fisketegn.dk kaufen.'
        }
      },
      {
        question: {
          da: 'Er der fiskegrej?',
          en: 'Is fishing equipment provided?',
          de: 'Ist Angelausrüstung vorhanden?'
        },
        answer: {
          da: 'Grundlæggende fiskegrej er tilgængeligt, men vi anbefaler at medbringe dit eget.',
          en: 'Basic fishing equipment is available, but we recommend bringing your own.',
          de: 'Grundlegende Angelausrüstung ist verfügbar, aber wir empfehlen, Ihre eigene mitzubringen.'
        }
      },
      {
        question: {
          da: 'Er båd inkluderet?',
          en: 'Is a boat included?',
          de: 'Ist ein Boot inbegriffen?'
        },
        answer: {
          da: 'Ja, en lille robåd er inkluderet i lejen. Motor kan lejes mod ekstra betaling.',
          en: 'Yes, a small rowing boat is included in the rental. Motor can be rented for an additional fee.',
          de: 'Ja, ein kleines Ruderboot ist in der Miete enthalten. Motor kann gegen Aufpreis gemietet werden.'
        }
      },
      {
        question: {
          da: 'Hvornår kan jeg tjekke ind?',
          en: 'When can I check in?',
          de: 'Wann kann ich einchecken?'
        },
        answer: {
          da: 'Check-in er fra kl. 15:00 og check-out inden kl. 11:00.',
          en: 'Check-in is from 3:00 PM and check-out before 11:00 AM.',
          de: 'Check-in ist ab 15:00 Uhr und Check-out vor 11:00 Uhr.'
        }
      }
    ] as FAQItem[]
  },

  // Contact Section
  contact: {
    title: {
      da: 'Kontakt & Booking',
      en: 'Contact & Booking',
      de: 'Kontakt & Buchung'
    },
    subtitle: {
      da: 'Klar til at booke dit drømmeophold? Kontakt os i dag!',
      en: 'Ready to book your dream stay? Contact us today!',
      de: 'Bereit, Ihren Traumaufenthalt zu buchen? Kontaktieren Sie uns heute!'
    },
    form: {
      name: { da: 'Dit Navn', en: 'Your Name', de: 'Ihr Name' },
      email: { da: 'Email', en: 'Email', de: 'E-Mail' },
      phone: { da: 'Telefon', en: 'Phone', de: 'Telefon' },
      dates: { da: 'Ønskede Datoer', en: 'Preferred Dates', de: 'Gewünschte Daten' },
      guests: { da: 'Antal Gæster', en: 'Number of Guests', de: 'Anzahl Gäste' },
      message: { da: 'Besked', en: 'Message', de: 'Nachricht' },
      send: { da: 'Send Forespørgsel', en: 'Send Inquiry', de: 'Anfrage Senden' }
    },
    info: {
      phoneLabel: { da: 'Ring os', en: 'Call us', de: 'Rufen Sie uns an' },
      emailLabel: { da: 'Send email', en: 'Send email', de: 'E-Mail senden' }
    }
  },

  // Footer Section
  footer: {
    contact: {
      da: 'Kontakt Information',
      en: 'Contact Information',
      de: 'Kontaktinformationen'
    },
    address: {
      da: 'Søvej 123, 5000 Odense, Danmark',
      en: 'Søvej 123, 5000 Odense, Denmark',
      de: 'Søvej 123, 5000 Odense, Dänemark'
    },
    phone: '+45 12 34 56 78',
    email: 'info@sommerhus-fiskeri.dk',
    follow: {
      da: 'Følg Os',
      en: 'Follow Us',
      de: 'Folgen Sie Uns'
    },
    copyright: {
      da: '© 2025 Sommerhus Fiskeri. Alle rettigheder forbeholdes.',
      en: '© 2025 Summer House Fishing. All rights reserved.',
      de: '© 2025 Ferienhaus Angeln. Alle Rechte vorbehalten.'
    }
  }
};