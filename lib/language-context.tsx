"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "sw"

type Translations = {
  [key in Language]: {
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
    firstAidFor: string
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
    firstAidLocations: string
    findNearbyLocations: string
    immediateActions: string
    resetProgress: string
    resetProgressConfirmTitle: string
    resetProgressConfirmDescription: string
    cancel: string
    confirm: string
    continueOrStartOver: string
    continueOrStartOverDescription: string
    continue: string
    startOver: string
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
    stepsCompleted: string
    doNot: string
    criticalSignsToMonitor: string
    additionalInformation: string
    watchDemonstration: string
    videoDialogTitle: string
    videoDialogDescription: string
    closeButton: string
  }
}

const translations: Translations = {
  en: {
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
    firstAidFor: "First Aid for",
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
    firstAidLocations: "First Aid Locations",
    findNearbyLocations: "Find nearby locations",
    immediateActions: "Immediate Actions",
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
    appDescription: "A comprehensive first aid guide application designed to help you prepare for emergencies.",
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
    locationError: "Could not find your location",
    refreshLocation: "Refresh location",
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
    fireEmergencyDescription: "Steps to take during a fire emergency",
    videoPlayerError: "Error playing video",
    locationPermissionDenied: "Location permission denied",
    shareLocation: "Share Location",
    copyLocationInfo: "Copy Location Info",
    locationCopied: "Location copied to clipboard",
    stepsCompleted: "steps completed",
    doNot: "Do Not",
    criticalSignsToMonitor: "Critical Signs to Monitor",
    additionalInformation: "Additional Information",
    watchDemonstration: "Watch Demonstration",
    videoDialogTitle: "Video Tutorial",
    videoDialogDescription: "Watch this tutorial for more information",
    closeButton: "Close"
  },
  sw: {
    guide: "Mwongozo wa dharura",
    quickReference: "Rejea ya haraka",
    emergency: "Piga simu ya dharura",
    emergencyNumber: "Piga 0800 750 112",
    location: "Mahali Pangu",
    enable: "Wezesha",
    disable: "Zima",
    address: "Anwani",
    coordinates: "Vipimo vya GPS",
    fetchingAddress: "Inaleta anwani...",
    fetchingCoordinates: "Inaleta vipimo...",
    waitingLocation: "Inasubiri data ya mahali...",
    firstAid: "Huduma ya Kwanza",
    firstAidFor: "Huduma ya Kwanza kwa",
    back: "Rudi",
    trafficAccident: "Ajali ya Barabarani",
    snakeBite: "Kuumwa na Nyoka",
    fireEmergency: "Dharura ya Moto",
    burns: "Kuungua",
    treatment: "Matibabu",
    burnTreatment: {
      title: "Matibabu ya Kuungua",
      steps: [
        "Pooza mahali palipoungua kwa maji baridi kwa dakika 20",
        "Ondoa nguo na vito kutoka eneo lililoungua",
        "Funika eneo lililoungua kwa bendeji safi",
        "Tafuta msaada wa matibabu kwa kuungua kubwa",
      ],
    },
    trafficAccidentTreatment: {
      title: "Mwitikio wa Ajali ya Barabarani",
      steps: [
        "Hakikisha usalama wako kwanza - ega gari kwa usalama na kuwasha taa za hatari",
        "Piga simu ya dharura (0800 750 112) mara moja",
        "Usiwahamishe waathiriwa isipokuwa wapo hatarini",
        "Angalia fahamu na kupumua kwa waathiriwa",
        "Weka shinikizo kwenye jeraha lolote linalotoa damu kwa kutumia kitambaa safi",
        "Waweke waathiriwa katika hali ya joto na utulivu hadi msaada ufike",
        "Kusanya taarifa na weka kumbukumbu ya tukio ikiwezekana",
      ],
    },
    snakeBiteTreatment: {
      title: "Matibabu ya Kuumwa na Nyoka",
      steps: [
        "Mtulize mwathiriwa ili kupunguza kusambaa kwa sumu",
        "Piga simu ya dharura (0800 750 112) mara moja",
        "Ondoa vitu vyovyote vinavyobana (vito, saa) kutoka eneo lililoathirika",
        "Weka eneo lililoumwa chini ya kiwango cha moyo",
        "Safisha jeraha kwa sabuni na maji ikiwa inapatikana",
        "USIFUNGE jeraha wala kujaribu kufyonza sumu",
        "Jaribu kukumbuka au kupiga picha nyoka kwa utambuzi",
      ],
    },
    firstAidLocations: "Maeneo ya Huduma ya Kwanza",
    findNearbyLocations: "Tafuta maeneo ya karibu",
    immediateActions: "Hatua za Haraka",
    resetProgress: "Anza Upya",
    resetProgressConfirmTitle: "Anza Upya",
    resetProgressConfirmDescription: "Una uhakika unataka kuanza upya? Kitendo hiki hakiwezi kutenduliwa.",
    cancel: "Ghairi",
    confirm: "Thibitisha",
    continueOrStartOver: "Endelea au Anza Upya?",
    continueOrStartOverDescription: "Una maendeleo ya awali. Unataka kuendelea au kuanza upya?",
    continue: "Endelea",
    startOver: "Anza Upya",
    callEmergency: "Piga Simu ya Dharura",
    pageNotFound: "Ukurasa Haupatikani",
    pageNotFoundDes: "Ukurasa ulioombwa haukupatikana.",
    pageNotFoundDescription: "Ukurasa unaoutafuta haupo au umehamishwa.",
    emergencyContacts: "Mawasiliano ya Dharura",
    name: "Jina",
    phone: "Namba ya Simu",
    addContact: "Ongeza Mawasiliano",
    deleteContact: "Futa",
    yourEmergencyContacts: "Mawasiliano yako ya Dharura",
    noContactsYet: "Hakuna mawasiliano bado",
    addYourFirstContact: "Ongeza mawasiliano yako ya kwanza ya dharura",
    firstAidApp: "Programu ya Huduma ya Kwanza",
    appDescription: "Mwongozo kamili wa huduma ya kwanza ulioundwa kukusaidia kujiandaa kwa dharura.",
    copyRight: "© 2023 Programu ya Huduma ya Kwanza. Haki zote zimehifadhiwa.",
    privacyPolicy: "Sera ya Faragha",
    termsOfService: "Masharti ya Huduma",
    quickLinks: "Viungo vya Haraka",
    home: "Nyumbani",
    about: "Kuhusu Sisi",
    contact: "Wasiliana",
    resources: "Rasilimali",
    faq: "Maswali Yanayoulizwa Mara kwa Mara",
    loading: "Inapakia...",
    error: "Hitilafu imetokea",
    retry: "Jaribu tena",
    save: "Hifadhi",
    play: "Cheza",
    pause: "Simamisha",
    mute: "Nyamazisha",
    unmute: "Rejesha Sauti",
    fullscreen: "Skrini Kamili",
    exitFullscreen: "Toka Skrini Kamili",
    findingLocation: "Inatafuta mahali ulipo...",
    locationError: "Haikuweza kupata mahali ulipo",
    refreshLocation: "Onyesha upya mahali",
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
    fireEmergencyDescription: "Hatua za kuchukua wakati wa dharura ya moto",
    videoPlayerError: "Hitilafu katika kucheza video",
    locationPermissionDenied: "Ruhusa ya mahali imekataliwa",
    shareLocation: "Shiriki Mahali",
    copyLocationInfo: "Nakili Taarifa za Mahali",
    locationCopied: "Taarifa za mahali zimenakiliwa",
    stepsCompleted: "hatua zimekamilika",
    doNot: "Usifanye",
    criticalSignsToMonitor: "Dalili Muhimu za Kufuatilia",
    additionalInformation: "Taarifa za Ziada",
    watchDemonstration: "Tazama Mfano",
    videoDialogTitle: "Mafunzo ya Video",
    videoDialogDescription: "Tazama mafunzo haya kwa taarifa zaidi",
    closeButton: "Funga"
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

