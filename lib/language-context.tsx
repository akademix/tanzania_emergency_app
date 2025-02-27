"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "sw"

type Translations = {
  [key in Language]: {
    training: string
    learnSkills: string
    guide: string
    quickReference: string
    emergency: string
    emergencyNumber: string
    location: string
    enable: string
    disable: string
    address: string
    coordinates: string
    fetchingAddress: string
    fetchingCoordinates: string
    waitingLocation: string
    firstAid: string
    trainingModules: string
    basicFirstAid: string
    basicFirstAidDesc: string
    cprCourse: string
    cprCourseDesc: string
    woundTreatment: string
    woundTreatmentDesc: string
    startCourse: string
    minutes: string
    lessons: string
    back: string
    trafficAccident: string
    snakeBite: string
    fireEmergency: string
    burns: string
    treatment: string
    burnTreatment: {
      title: string
      steps: string[]
    }
    trafficAccidentTreatment: {
      title: string
      steps: string[]
    }
    snakeBiteTreatment: {
      title: string
      steps: string[]
    }
    lesson: string
    firstAidLocations: string
    findNearbyLocations: string
    continueOrStartOver: string
    continueOrStartOverDescription: string
    continue: string
    startOver: string
    resetProgress: string
    resetProgressConfirmTitle: string
    resetProgressConfirmDescription: string
    cancel: string
    confirm: string
    callEmergency: string
    pageNotFound: string
    pageNotFoundDes: string
    pageNotFoundDescription: string
    emergencyContacts: string
    name: string
    phone: string
    addContact: string
    deleteContact: string
    yourEmergencyContacts: string
    noContactsYet: string
    addYourFirstContact: string
    firstAidApp: string
    appDescription: string
    copyRight: string
    privacyPolicy: string
    termsOfService: string
    quickLinks: string
    home: string
    about: string
    contact: string
    resources: string
    faq: string
    loading: string
    error: string
    retry: string
    save: string
    play: string
    pause: string
    mute: string
    unmute: string
    fullscreen: string
    exitFullscreen: string
    findingLocation: string
    locationError: string
    refreshLocation: string
    firePreventionTips: string
    evacuationSteps: string
    drowning: string
    poisoning: string
    heartAttack: string
    stroke: string
    sendMessage: string
    yourName: string
    yourEmail: string
    message: string
    submit: string
    followUs: string
    newsletter: string
    subscribeToNewsletter: string
    emailAddress: string
    subscribe: string
    settings: string
    emergencyServices: string
    fireEmergencyTitle: string
    fireEmergencyDescription: string
    videoPlayerError: string
    locationPermissionDenied: string
    shareLocation: string
    copyLocationInfo: string
    locationCopied: string
  }
}

const translations: Translations = {
  en: {
    training: "Training program",
    learnSkills: "Learn essential skills",
    guide: "Emergency guide",
    quickReference: "Quick reference",
    emergency: "Call emergency",
    emergencyNumber: "Dial 0800 750 112",
    location: "My Location",
    enable: "Enable",
    disable: "Disable",
    address: "Address",
    coordinates: "GPS Coordinates",
    fetchingAddress: "Fetching address...",
    fetchingCoordinates: "Fetching coordinates...",
    waitingLocation: "Waiting for location data...",
    firstAid: "First Aid",
    trainingModules: "Training Modules",
    basicFirstAid: "Basic First Aid",
    basicFirstAidDesc: "Learn the essential principles of first aid",
    cprCourse: "CPR Course",
    cprCourseDesc: "Cardiopulmonary resuscitation for adults and children",
    woundTreatment: "Wound Treatment",
    woundTreatmentDesc: "Handling cuts, scrapes and other wounds",
    startCourse: "Start Course",
    minutes: "min",
    lessons: "lessons",
    back: "Back",
    trafficAccident: "Traffic Accident",
    snakeBite: "Snake Bite",
    fireEmergency: "Fire Emergency",
    burns: "Burns",
    treatment: "Treatment",
    burnTreatment: {
      title: "Burns Treatment",
      steps: [
        "Cool the burn with lukewarm water for at least 20 minutes",
        "Remove clothing and jewelry from the burned area",
        "Cover the burn with clean bandage or dressing",
        "Seek medical help for large or deep burns",
      ],
    },
    trafficAccidentTreatment: {
      title: "Traffic Accident Response",
      steps: [
        "Ensure your own safety first - park safely and turn on hazard lights",
        "Call emergency services (0800 750 112) immediately",
        "Do not move injured persons unless they are in immediate danger",
        "Check for consciousness and breathing of the victims",
        "Apply pressure to any bleeding wounds using clean cloth",
        "Keep injured persons warm and calm until help arrives",
        "Collect information and document the scene if possible",
      ],
    },
    snakeBiteTreatment: {
      title: "Snake Bite Treatment",
      steps: [
        "Keep the person calm and still to slow down venom spread",
        "Call emergency services (0800 750 112) immediately",
        "Remove any constricting items (jewelry, watches) from affected area",
        "Keep the bitten area below heart level",
        "Clean the wound with soap and water if available",
        "Do NOT apply a tourniquet or try to suck out the venom",
        "Try to remember or safely photograph the snake for identification",
      ],
    },
    lesson: "Lesson",
    firstAidLocations: "First Aid Locations",
    findNearbyLocations: "Find nearby locations",
    resetProgress: "Reset Progress",
    resetProgressConfirmTitle: "Reset Progress",
    resetProgressConfirmDescription: "Are you sure you want to reset your progress? This action cannot be undone.",
    cancel: "Cancel",
    confirm: "Confirm",
    continueOrStartOver: "Continue or Start Over?",
    continueOrStartOverDescription:
      "You have previous progress. Do you want to continue where you left off or start over?",
    continue: "Continue",
    startOver: "Start Over",
    callEmergency: "Call Emergency",
    pageNotFound: "Page Not Found",
    pageNotFoundDes: "The requested page could not be found.",
    pageNotFoundDescription: "The page you are looking for does not exist or has been moved.",
    emergencyContacts: "Emergency Contacts",
    name: "Name",
    phone: "Phone Number",
    addContact: "Add Contact",
    deleteContact: "Delete",
    yourEmergencyContacts: "Your Emergency Contacts",
    noContactsYet: "No contacts added yet",
    addYourFirstContact: "Add your first emergency contact",
    firstAidApp: "First Aid App",
    appDescription: "A comprehensive first aid guide and training application designed to help you prepare for emergencies.",
    copyRight: "© 2023 First Aid App. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    quickLinks: "Quick Links",
    home: "Home",
    about: "About Us",
    contact: "Contact",
    resources: "Resources",
    faq: "FAQ",
    loading: "Loading...",
    error: "An error occurred",
    retry: "Retry",
    save: "Save",
    play: "Play",
    pause: "Pause",
    mute: "Mute",
    unmute: "Unmute",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit Fullscreen",
    findingLocation: "Finding your location...",
    locationError: "Could not determine your location",
    refreshLocation: "Refresh Location",
    firePreventionTips: "Fire Prevention Tips",
    evacuationSteps: "Evacuation Steps",
    drowning: "Drowning",
    poisoning: "Poisoning",
    heartAttack: "Heart Attack",
    stroke: "Stroke",
    sendMessage: "Send Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    message: "Message",
    submit: "Submit",
    followUs: "Follow Us",
    newsletter: "Newsletter",
    subscribeToNewsletter: "Subscribe to our newsletter",
    emailAddress: "Email Address",
    subscribe: "Subscribe",
    settings: "Settings",
    emergencyServices: "Emergency Services",
    fireEmergencyTitle: "Fire Emergency",
    fireEmergencyDescription: "Learn how to respond to fire emergencies",
    videoPlayerError: "Error loading video",
    locationPermissionDenied: "Location permission denied",
    shareLocation: "Share Location",
    copyLocationInfo: "Copy Location Info",
    locationCopied: "Location information copied to clipboard"
  },
  sw: {
    training: "Programu ya Mafunzo",
    learnSkills: "Jifunze ujuzi muhimu",
    guide: "Mwongozo wa dharura",
    quickReference: "Rejea ya haraka",
    emergency: "Piga simu ya dharura",
    emergencyNumber: "Piga 0800 750 112",
    location: "Mahali Pangu",
    enable: "Wezesha",
    disable: "Zima",
    address: "Anwani",
    coordinates: "Koordineti za GPS",
    fetchingAddress: "Inapata anwani...",
    fetchingCoordinates: "Inapata koordineti...",
    waitingLocation: "Inasubiri data ya mahali...",
    firstAid: "Huduma ya Kwanza",
    trainingModules: "Moduli za Mafunzo",
    basicFirstAid: "Huduma ya Kwanza ya Msingi",
    basicFirstAidDesc: "Jifunze kanuni muhimu za huduma ya kwanza",
    cprCourse: "Kozi ya CPR",
    cprCourseDesc: "Uhuishaji wa moyo na mapafu kwa watu wazima na watoto",
    woundTreatment: "Matibabu ya Vidonda",
    woundTreatmentDesc: "Kushughulikia michubuko, majeraha na vidonda vingine",
    startCourse: "Anza Kozi",
    minutes: "dakika",
    lessons: "masomo",
    back: "Rudi",
    trafficAccident: "Ajali ya Barabarani",
    snakeBite: "Kuumwa na Nyoka",
    fireEmergency: "Dharura ya Moto",
    burns: "Kuungua",
    treatment: "Matibabu",
    burnTreatment: {
      title: "Matibabu ya Kuungua",
      steps: [
        "Pooza eneo lililoungua kwa maji vuguvugu kwa dakika 20 au zaidi",
        "Ondoa nguo na vito kwenye eneo lililoungua",
        "Funika eneo lililoungua kwa bendeji safi",
        "Tafuta msaada wa daktari kwa kuungua kukubwa au kwa kina",
      ],
    },
    trafficAccidentTreatment: {
      title: "Kukabiliana na Ajali ya Barabarani",
      steps: [
        "Hakikisha usalama wako kwanza - egeshea gari salama na washa taa za hatari",
        "Piga simu ya dharura (0800 750 112) mara moja",
        "Usihamishee walioumia isipokuwa wapo hatarini",
        "Angalia kama waathirika wana fahamu na wanapumua",
        "Bandika kidonda kinachotoka damu kwa kutumia kitambaa safi",
        "Waweke waathirika katika hali ya joto na utulivu hadi msaada ufike",
        "Kusanya taarifa na picha za tukio ikiwezekana",
      ],
    },
    snakeBiteTreatment: {
      title: "Matibabu ya Kuumwa na Nyoka",
      steps: [
        "Mweke mgonjwa atulie ili kuzuia sumu kusambaa haraka",
        "Piga simu ya dharura (0800 750 112) mara moja",
        "Ondoa vitu vyovyote vinavyobana (vito, saa) kutoka eneo lililoathirika",
        "Weka sehemu iliyoumwa chini ya kiwango cha moyo",
        "Safisha kidonda kwa sabuni na maji ikiwa vinapatikana",
        "USIFUNGE kamba kubana wala kujaribu kufyonza sumu",
        "Jaribu kukumbuka au kupiga picha ya nyoka kwa uangalifu kwa utambuzi",
      ],
    },
    lesson: "Somo",
    firstAidLocations: "Maeneo ya Huduma ya Kwanza",
    findNearbyLocations: "Tafuta maeneo ya karibu",
    resetProgress: "Weka upya Maendeleo",
    resetProgressConfirmTitle: "Weka upya Maendeleo",
    resetProgressConfirmDescription:
      "Je, una uhakika unataka kuweka upya maendeleo yako? Kitendo hiki hakiwezi kutenduliwa.",
    cancel: "Ghairi",
    confirm: "Thibitisha",
    continueOrStartOver: "Endelea au Anza Upya?",
    continueOrStartOverDescription: "Una maendeleo ya awali. Je, unataka kuendelea kutoka ulipoishia au kuanza upya?",
    continue: "Endelea",
    startOver: "Anza Upya",
    callEmergency: "Piga Simu ya Dharura",
    pageNotFound: "Maeneo Yeyote",
    pageNotFoundDes: "Hakuna maeneo kupatikana kwa kurudi.",
    pageNotFoundDescription: "The page you are looking for does not exist or has been moved.",
    emergencyContacts: "Anwani za Dharura",
    name: "Jina",
    phone: "Namba ya Simu",
    addContact: "Ongeza Anwani",
    deleteContact: "Futa",
    yourEmergencyContacts: "Anwani Zako za Dharura",
    noContactsYet: "Hakuna anwani zilizoongezwa bado",
    addYourFirstContact: "Ongeza anwani yako ya kwanza ya dharura",
    firstAidApp: "Programu ya Huduma ya Kwanza",
    appDescription: "Mwongozo kamili wa huduma ya kwanza na programu ya mafunzo iliyoundwa kukusaidia kujiandaa kwa dharura.",
    copyRight: "© 2023 Programu ya Huduma ya Kwanza. Haki zote zimehifadhiwa.",
    privacyPolicy: "Sera ya Faragha",
    termsOfService: "Masharti ya Huduma",
    quickLinks: "Viungo vya Haraka",
    home: "Nyumbani",
    about: "Kuhusu Sisi",
    contact: "Wasiliana",
    resources: "Rasilimali",
    faq: "Maswali",
    loading: "Inapakia...",
    error: "Hitilafu imetokea",
    retry: "Jaribu tena",
    save: "Hifadhi",
    play: "Cheza",
    pause: "Simamisha",
    mute: "Zima sauti",
    unmute: "Washa sauti",
    fullscreen: "Skrini kamili",
    exitFullscreen: "Toka skrini kamili",
    findingLocation: "Inatafuta eneo lako...",
    locationError: "Haikuweza kubaini eneo lako",
    refreshLocation: "Onyesha upya Eneo",
    firePreventionTips: "Vidokezo vya Kuzuia Moto",
    evacuationSteps: "Hatua za Kuondoka",
    drowning: "Kuzama",
    poisoning: "Sumu",
    heartAttack: "Shambulio la Moyo",
    stroke: "Kiharusi",
    sendMessage: "Tuma Ujumbe",
    yourName: "Jina Lako",
    yourEmail: "Barua pepe Yako",
    message: "Ujumbe",
    submit: "Wasilisha",
    followUs: "Tufuate",
    newsletter: "Jarida",
    subscribeToNewsletter: "Jiandikishe kupokea jarida letu",
    emailAddress: "Anwani ya Barua pepe",
    subscribe: "Jiandikishe",
    settings: "Mipangilio",
    emergencyServices: "Huduma za Dharura",
    fireEmergencyTitle: "Dharura ya Moto",
    fireEmergencyDescription: "Jifunze jinsi ya kukabiliana na dharura za moto",
    videoPlayerError: "Hitilafu katika kupakia video",
    locationPermissionDenied: "Ruhusa ya eneo imekataliwa",
    shareLocation: "Shiriki Eneo",
    copyLocationInfo: "Nakili Taarifa za Eneo",
    locationCopied: "Taarifa za eneo zimenakiliwa kwenye ubao"
  },
}

// Define a type for your translation values
type TranslationValue = string | { title: string; steps: string[] };

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.en) => TranslationValue
  tString: (key: keyof typeof translations.en) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Create a helper function to ensure string output for JSX contexts
  const tString = (key: keyof typeof translations.en): string => {
    const value = translations[language][key];
    return typeof value === "string" ? value : JSON.stringify(value);
  };

  // Keep the original t function for when you need the structured data
  const t = (key: keyof typeof translations.en): TranslationValue => 
    translations[language][key];

  return <LanguageContext.Provider value={{ language, setLanguage, t, tString }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

