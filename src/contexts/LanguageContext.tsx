import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ta' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.gallery': 'Gallery',
    'nav.quality': 'Quality',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.badge': 'Premium Container Manufacturing',
    'hero.title': 'Deepam Engineering Works',
    'hero.subtitle': 'Expert Container Solutions',
    'hero.description': 'Specialists in Container Solutions & Lorry Cabin Fabrication',
    'hero.details': 'Delivering superior quality container bodies and lorry cabins with precision engineering, built for durability, comfort, and performance across diverse industries.',
    'hero.getQuote': 'Get Free Quote',
    'hero.viewProducts': 'View Products',
    'hero.stat1': 'Containers Built',
    'hero.stat2': 'Years Experience',
    'hero.stat3': 'Happy Clients',
    'hero.stat4': 'Support',
    
    // About Section
    'about.title': 'Building Excellence Since 2018',
    'about.label': 'About Us',
    'about.storyLabel': 'Our Story',
    'about.mission': 'Our Mission',
    'about.vision': 'Our Vision',
    'about.qualityTitle': 'Quality Assurance',
    'about.expertTitle': 'Expert Team',
    'about.innovationTitle': 'Innovation',
    'about.yearsBadge': 'Years of Excellence',
    'about.description': 'We are a leading container body manufacturing company in India, specializing in high-quality, customized container solutions for diverse industrial needs.',
      'about.label': 'About Us',
    'about.mission': 'Our Mission',
    'about.missionDesc': 'To deliver world-class container solutions through innovation, quality craftsmanship, and customer-centric approach.',
    'about.vision': 'Our Vision',
    'about.visionDesc': 'To be the preferred choice for container manufacturing in India, known for reliability, innovation, and exceptional service.',
    'about.qualityAssurance': 'Quality Assurance',
    'about.qualityDesc': 'Rigorous quality control processes ensure every container meets the highest standards of durability and performance.',
    'about.expertise': 'Expertise',
    'about.expertiseDesc': 'Over 15 years of experience in container manufacturing with a team of skilled craftsmen and engineers.',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'Continuous R&D to improve designs, materials, and manufacturing processes for better products.',
    'about.storyPara1': 'Established in 2018, Deepam Engineering Works has grown from a small workshop to one of India\'s most trusted container body manufacturers. Our journey began with a simple mission: to provide superior quality container solutions that exceed customer expectations.',
    'about.storyPara2': 'Today, we operate from our state-of-the-art facility, equipped with modern machinery and staffed by skilled professionals who bring decades of combined experience to every project.',
    'about.yearsCount': '5+',
    
    // Footer
    'footer.contactInfo': 'Contact Information',
    'footer.businessHours': 'Business Hours',
    'footer.hours': 'Mon - Fri: 9:00 AM - 6:00 PM',
    'footer.hoursWeekend': 'Sat: 9:00 AM - 2:00 PM',
    'footer.hoursClosed': 'Sun: Closed',
    'footer.followUs': 'Follow Us',
    'footer.copyright': '© 2024 Deepam Engineering Works. All rights reserved.',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.contactUs': 'Contact Us',
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
    'common.callNow': 'Call Now',
    'common.chatWhatsApp': 'Chat on WhatsApp',
    'common.getQuote': 'Get Quote',
  },
  ta: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.products': 'தயாரிப்புகள்',
    'nav.gallery': 'படத்தொகுப்பு',
    'nav.quality': 'தரம்',
    'nav.contact': 'தொடர்பு',
    
    // Hero Section
    'hero.badge': 'உயர்தர கொள்கலன் உற்பத்தி',
    'hero.title': 'தீபம் பொறியியல் பணிகள்',
    'hero.subtitle': 'நிபுணர் கொள்கலன் தீர்வுகள்',
    'hero.description': 'கொள்கலன் தீர்வுகள் & லாரி கேபின் தயாரிப்பில் நிபுணர்கள்',
    'hero.details': 'துல்லியமான பொறியியலுடன் உயர்தர கொள்கலன் உடல்கள் மற்றும் லாரி கேபின்களை வழங்குதல், நீடித்த தன்மை, வசதி மற்றும் பல்வேறு தொழில்களில் செயல்திறனுக்காக கட்டப்பட்டது.',
    'hero.getQuote': 'இலவச மேற்கோள் பெறுங்கள்',
    'hero.viewProducts': 'தயாரிப்புகளைக் காண்க',
    'hero.stat1': 'கொள்கலன்கள் கட்டப்பட்டன',
    'hero.stat2': 'ஆண்டுகள் அனுபவம்',
    'hero.stat3': 'மகிழ்ச்சியான வாடிக்கையாளர்கள்',
    'hero.stat4': 'ஆதரவு',
    
    // About Section
    'about.title': '2018 முதல் கட்டமைப்பின் மிதிப்பு',
    'about.label': 'எங்களைப் பற்றி',
    'about.storyLabel': 'எங்கள் கதை',
    'about.mission': 'எங்கள் மிஷன்',
    'about.vision': 'எங்கள் நோக்கு',
    'about.qualityTitle': 'தர உத்தரவாதம்',
    'about.expertTitle': 'திறமையான குழு',
    'about.innovationTitle': 'கண்ணியம்',
    'about.yearsBadge': 'வருடங்கள் சாதனை',
    'about.description': 'நாங்கள் இந்தியாவின் முன்னணி கொள்கலன் உடல் உற்பத்தி நிறுவனம் ஆவோம், பல்வேறு தொழில்சார் தேவைகளுக்கான உயர்தர, தனிப்பயனாக்கப்பட்ட கொள்கலன் தீர்வுகளில் நிபுணம் வாய்ந்தோம்.',
      'about.label': 'எங்களைப் பற்றி',
    'about.mission': 'எங்கள் மிশன்',
    'about.missionDesc': 'கண்ணியம், தர சமூலனுக்கு மற்றும் வாடிக்கையாளர்-மையப்படுத்தப்பட்ட அணுகுமுறையுடன் உலக-தரத்தின் கொள்கலன் தீர்வுகளை வழங்குவது.',
    'about.vision': 'எங்கள் দৃஷ்டிப்பு',
    'about.visionDesc': 'இந்தியாவில் கொள்கலன் உற்பத்தியின் விருப்பமான தேர்வு ஆகுதல், நம்பகத்தன்மை, கண்ணியம் மற்றும் விதிவிலக்கான சேவைக்கு அறியப்பட்டதாக.',
    'about.qualityAssurance': 'தர உத்தரவாதம்',
    'about.qualityDesc': 'ஒவ்வொரு கொள்கலனும் நீடித்த தன்மை மற்றும் செயல்திறனின் மிக உயர்ந்த தர நிலையை பூர்த்தி செய்வதை உறுதி செய்யும் கண்ணியமான தரக் கட்டுப்பாடு செயல்முறைகள்.',
    'about.expertise': 'நிபுணம்',
    'about.expertiseDesc': 'தேர்ந்தெடுக்கப்பட்ட கொள்கலன் உற்பத்தியில் 15 வருட அனுபவம் கொண்ட தேர்ந்தெடுக்கப்பட்ட கைவினைஞர்கள் மற்றும் பொறியியலாளர் குழுவுடன்.',
    'about.innovation': 'கண்ணியம்',
    'about.innovationDesc': 'வடிவமைப்புகளை, பொருட்களை மற்றும் உற்பத்தி செயல்முறைகளை மேம்படுத்த தொடர்ந்து R&D நடத்தப்பட்டு சிறந்த தயாரிப்புகளைக் கொண்டு வருதல்.',
    'about.storyPara1': '2018 ஆண்டு தொடக்கம், தீபம் எஞ்ஜினியரிங் வர்த்தகம் ஒரு சிறிய தொழிற்சாலையிலிருந்து இந்தியாவின் நம்பகமான கொள்கலன் உடல் உற்பத்தி நிறுவனங்களில் ஒன்றாக உயர்ந்தது. எங்கள் பயணம் வாடிக்கையாளர் எதிர்பார்ப்புகளை மீறுவது என்ற எளிய நோக்கத்துடன் தொடங்கியது.',
    'about.storyPara2': 'இன்று, நாங்கள் நவீன இயந்திரங்களால் சீரமைக்கப்பட்டுள்ள நவீன வசதியில் செயல்படுகிறோம் மற்றும் ஒவ்வொரு திட்டத்திற்கும் பல தசாப்தங்களின் கூட்டு அனுபவத்தை கொண்ட திறமையான தொழில்நுட்ப நிபுணர்கள் பணியாற்றுகிறார்கள்.',
    'about.yearsCount': '5+',
    
    // Footer
    'footer.contactInfo': 'தொடர்பு தகவல்',
    'footer.businessHours': 'வணிக மணிநேரம்',
    'footer.hours': 'திங்கள் - வெள்ளி: 9:00 AM - 6:00 PM',
    'footer.hoursWeekend': 'சனி: 9:00 AM - 2:00 PM',
    'footer.hoursClosed': 'ஞாயிற்று: மூடப்பட்டுள்ளது',
    'footer.followUs': 'எங்களைப் பின்தொடரவும்',
    'footer.copyright': '© 2024 தீபம் பொறியியல் பணிகள். அனைத்து உரிமைகளும் உரிமைப்படுத்தப்பட்டுள்ளன.',
    
    // Common
    'common.learnMore': 'மேலும் அறிக',
    'common.contactUs': 'எங்களை தொடர்பு கொள்ளுங்கள்',
    'common.readMore': 'மேலும் படிக்க',
    'common.viewAll': 'அனைத்தையும் காண்க',
    'common.callNow': 'இப்போது அழைக்கவும்',
    'common.chatWhatsApp': 'WhatsApp இல் அரட்டை',
    'common.getQuote': 'மேற்கோள் பெறுங்கள்',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.products': 'उत्पाद',
    'nav.gallery': 'गैलरी',
    'nav.quality': 'गुणवत्ता',
    'nav.contact': 'संपर्क',
    
    // Hero Section
    'hero.badge': 'प्रीमियम कंटेनर निर्माण',
    'hero.title': 'दीपम इंजीनियरिंग वर्क्स',
    'hero.subtitle': 'विशेषज्ञ कंटेनर समाधान',
    'hero.description': 'कंटेनर समाधान और लॉरी केबिन निर्माण में विशेषज्ञ',
    'hero.details': 'सटीक इंजीनियरिंग के साथ उच्च गुणवत्ता वाले कंटेनर बॉडी और लॉरी केबिन प्रदान करना, स्थायित्व, आराम और विभिन्न उद्योगों में प्रदर्शन के लिए निर्मित।',
    'hero.getQuote': 'मुफ्त उद्धरण प्राप्त करें',
    'hero.viewProducts': 'उत्पाद देखें',
    'hero.stat1': 'कंटेनर निर्मित',
    'hero.stat2': 'वर्षों का अनुभव',
    'hero.stat3': 'खुश ग्राहक',
    'hero.stat4': 'समर्थन',
    
    // About Section
    'about.title': '2018 के बाद से उत्कृष्टता का निर्माण',
    'about.label': 'हमारे बारे में',
    'about.storyLabel': 'हमारी कहानी',
    'about.mission': 'हमारा मिशन',
    'about.vision': 'हमारी दृष्टि',
    'about.qualityTitle': 'गुणवत्ता आश्वासन',
    'about.expertTitle': 'विशेषज्ञ टीम',
    'about.innovationTitle': 'नवाचार',
    'about.yearsBadge': 'वर्षों की उत्कृष्टता',
    'about.description': 'हम भारत की एक प्रमुख कंटेनर बॉडी विनिर्माण कंपनी हैं, विभिन्न औद्योगिक आवश्यकताओं के लिए उच्च गुणवत्ता वाले, अनुकूलित कंटेनर समाधान में विशेषज्ञता रखते हैं।',
      'about.label': 'हमारे बारे में',
    'about.mission': 'हमारा मिशन',
    'about.missionDesc': 'नवाचार, गुणवत्ता कारीगरी और ग्राहक-केंद्रित दृष्टिकोण के माध्यम से विश्व-स्तरीय कंटेनर समाधान प्रदान करना।',
    'about.vision': 'हमारी दृष्टि',
    'about.visionDesc': 'भारत में कंटेनर विनिर्माण के लिए पसंदीदा विकल्प बनना, जो विश्वसनीयता, नवाचार और असाधारण सेवा के लिए जाना जाता है।',
    'about.qualityAssurance': 'गुणवत्ता आश्वास',
    'about.qualityDesc': 'कड़ी गुणवत्ता नियंत्रण प्रक्रियाएं यह सुनिश्चित करती हैं कि प्रत्येक कंटेनर स्थायित्व और प्रदर्शन के सर्वोच्च मानकों को पूरा करता है।',
    'about.expertise': 'विशेषज्ञता',
    'about.expertiseDesc': 'कुशल कारीगरों और इंजीनियरों की एक टीम के साथ कंटेनर विनिर्माण में 15 साल से अधिक का अनुभव।',
    'about.innovation': 'नवाचार',
    'about.innovationDesc': 'बेहतर उत्पादों के लिए डिजाइन, सामग्री और विनिर्माण प्रक्रियाओं में सुधार के लिए निरंतर R&D।',
    'about.storyPara1': '2018 में स्थापित, दीपम इंजीनियरिंग वर्क्स एक छोटी कार्यशाला से भारत के सबसे विश्वसनीय कंटेनर बॉडी निर्माताओं में से एक बन गया है। हमारी यात्रा का आरम्भ एक सरल मिशन के साथ हुआ: उच्च गुणवत्ता वाले कंटेनर समाधान प्रदान करना जो ग्राहक की अपेक्षाओं से ऊपर हो।',
    'about.storyPara2': 'आज, हम अपनी अत्याधुनिक सुविधा से संचालित होते हैं, जिसमें आधुनिक मशीनरी है और कुशल पेशेवरों द्वारा staffed है जो प्रत्येक परियोजना में दशकों का संयुक्त अनुभव लाते हैं।',
    'about.yearsCount': '5+',
    
    // Footer
    'footer.contactInfo': 'संपर्क जानकारी',
    'footer.businessHours': 'व्यावसायिक घंटे',
    'footer.hours': 'सोमवार - शुक्रवार: 9:00 AM - 6:00 PM',
    'footer.hoursWeekend': 'शनिवार: 9:00 AM - 2:00 PM',
    'footer.hoursClosed': 'रविवार: बंद',
    'footer.followUs': 'हमें फॉलो करें',
    'footer.copyright': '© 2024 दीपम इंजीनियरिंग वर्क्स। सर्वाधिकार सुरक्षित।',
    
    // Common
    'common.learnMore': 'और जानें',
    'common.contactUs': 'हमसे संपर्क करें',
    'common.readMore': 'और पढ़ें',
    'common.viewAll': 'सभी देखें',
    'common.callNow': 'अभी कॉल करें',
    'common.chatWhatsApp': 'WhatsApp पर चैट करें',
    'common.getQuote': 'उद्धरण प्राप्त करें',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
