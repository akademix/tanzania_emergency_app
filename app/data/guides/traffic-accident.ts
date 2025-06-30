import { GuideData } from './index';

export const trafficAccidentGuide: GuideData = {
  id: 'traffic-accident',
  title: { en: 'traffic accident response', sw: 'mwitikio wa ajali ya barabarani' },
  description: { en: 'Comprehensive guide for responding to traffic accidents safely and effectively', sw: 'Mwongozo kamili wa kuitikia ajali za barabarani kwa usalama na ufanisi' },
  image: 'https://placehold.co/800x400/3B82F6/FFFFFF?text=Traffic+Accident+Response',
  audioEnPath: "/audio/traffic/traffic_accident_title_english.wav",
  audioSwPath: "/audio/traffic/traffic_accident_title_swahili.wav",
  descriptionAudioEnPath: "/audio/traffic/traffic_accident_description_english.wav",
  descriptionAudioSwPath: "/audio/traffic/traffic_accident_description_swahili.wav",
  steps: [
    {
      instruction: { 
        en: "Assess safety before approaching the scene. Turn on hazard lights and park to protect the accident site. Be alert for oncoming vehicles, flames, fuel leaks, and other dangers. Secure the area to prevent further accidents. Wear a reflective vest for visibility. Place warning triangle 50-150 meters away depending on road speed. Switch off ignition and apply handbrake of crashed car if possible.", 
        sw: "Tathmini usalama kabla ya kufikia eneo. Washa taa za hatari na egeza gari ili kulinda eneo la ajali. Chunguza magari yanayokuja, moto, uvujaji wa mafuta, na hatari zingine. Hakikisha usalama wa eneo kuzuia ajali zaidi. Vaa jaketi ya kung'ara ili kuonekana. Weka alama ya onyo mita 50-150 kulingana na kasi ya barabara. Zima injini na weka breki ya mkono ya gari lililoanguka ikiwezekana."
      },
      videoId: "/videos/training/Road%20Traffic%20Accident/VIDEO%201.mp4",
      audioEnPath: "/audio/traffic/traffic_accident_step1_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_step1_swahili.wav"
    },
    {
      instruction: { 
        en: "Call for help (0800 750 112) and attract attention from other bystanders if you need assistance. Provide exact location, number of casualties, and nature of injuries.", 
        sw: "Piga simu ya msaada (0800 750 112) na uvute umakini wa watu wengine ikiwa unahitaji msaada. Toa mahali halisi, idadi ya walijeruhiwa, na aina ya majeraha."
      },
      videoId: "/videos/training/Road%20Traffic%20Accident/VIDEO%202.mp4",
      audioEnPath: "/audio/traffic/traffic_accident_step2_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_step2_swahili.wav"
    },
    {
      instruction: { 
        en: "Approach the casualties and get an overview of the injured. Try talking to them. If someone does not answer, touch or shake their shoulder gently to determine if they are unconscious.", 
        sw: "Karibia wahanga na upate muhtasari wa walijeruhiwa. Jaribu kuzungumza nao. Kama mtu hajibu, mguse au mgongongee begani kwa upole ili kujua kama amezimia."
      },
      videoId: "/videos/training/Road%20Traffic%20Accident/VIDEO%203.mp4",
      audioEnPath: "/audio/traffic/traffic_accident_step3_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_step3_swahili.wav"
    },
    {
      instruction: { 
        en: "Casualties inside a vehicle who are awake and able to exit themselves, or with little support, can do so as long as there is no increased risk of further injury. Make sure they are safe and have someone monitor them. Keep them warm, as cold increases damage in the body and risk of bleeding.", 
        sw: "Wahanga walio ndani ya gari walio macho na wanaweza kutoka wenyewe, au kwa msaada mdogo, wanaweza kufanya hivyo mradi hakuna hatari ya kuongezeka kwa jeraha zaidi. Hakikisha wana usalama na mtu awakaguze. Waweke joto, kwani baridi huongeza uharibifu mwilini na hatari ya kutokwa damu."
      },
      videoId: "/videos/training/Road%20Traffic%20Accident/VIDEO%204.mp4",
      audioEnPath: "/audio/traffic/traffic_accident_step4_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_step4_swahili.wav"
    },
    {
      instruction: { 
        en: "Casualties inside a vehicle who are unconscious (unresponsive to speech or gentle shoulder shaking) are at risk of airway obstruction. Carefully lean into the vehicle through the door or window closest to them. Position yourself beside the casualty's head while staying outside the vehicle for safety.", 
        sw: "Wahanga walio ndani ya gari wasio na fahamu (hawajibu mazungumzo au kugongongwa begani kwa upole) wako hatarini ya kuzuiliwa njia ya hewa. Inamia ndani ya gari kwa uangalifu kupitia mlango au dirisha lililo karibu nao. Jiweke kando ya kichwa cha mhanga huku ukiwa nje ya gari kwa usalama."
      },
      videoId: "/videos/training/Road%20Traffic%20Accident/VIDEO%205.mp4",
      audioEnPath: "/audio/traffic/traffic_accident_step5_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_step5_swahili.wav"
    },
    {
      instruction: { 
        en: "Open the casualty's airways and check breathing. Place one hand at the back of the head above the nape, and the other under the chin. Gently lift the head into neutral position, aligning it with the trunk. This opens airways and relieves weight from cervical spine. Check breathing as covered in unconscious and CPR modules.", 
        sw: "Fungua njia ya hewa ya mhanga na uangalie kupumua. Weka mkono mmoja nyuma ya kichwa juu ya shingo, na mwingine chini ya kidevu. Inua kichwa kwa upole hadi nafasi ya kawaida, ukikipanga na mwili. Hii inafungua njia ya hewa na kupunguza uzito kutoka uti wa mgongo wa shingoni. Angalia kupumua kama inavyofundishwa katika moduli za wasimaizi na CPR."
      },
      videoId: "/videos/training/Road%20Traffic%20Accident/VIDEO%206.mp4",
      audioEnPath: "/audio/traffic/traffic_accident_step6_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_step6_swahili.wav"
    },
    {
      instruction: { 
        en: "If breathing is normal, maintain the head and neck position until help arrives. Only move the casualty out of the car when it is safe. If spinal injury is suspected, ensure proper back and neck stabilization throughout the process.", 
        sw: "Kama kupumua ni kawaida, dumisha msimamo wa kichwa na shingo hadi msaada ufike. Hamisha mhanga nje ya gari tu wakati ni salama. Kama jeraha la uti wa mgongo linashukiwa, hakikisha udhamini sahihi wa mgongo na shingo wakati wote."
      },
      videoId: "/videos/training/Road%20Traffic%20Accident/VIDEO%207.mp4",
      audioEnPath: "/audio/traffic/traffic_accident_step7_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_step7_swahili.wav"
    },
    {
      instruction: { 
        en: "Casualties outside a vehicle (thrown from car, motorcycle riders, pedestrians) who are awake should be helped according to other modules: burns, bleeding, and musculoskeletal injuries. If you suspect back or neck damage with risk of spinal column injury, keep the patient still and stabilize the neck until help arrives.", 
        sw: "Wahanga walio nje ya gari (waliotupwa kutoka garini, waendesha pikipiki, waendaji kwa miguu) walio macho wanafaa kusaidiwa kulingana na moduli zingine: kuungua, kutokwa damu, na majeraha ya misuli na mifupa. Kama unashuku uharibifu wa mgongo au shingo na hatari ya jeraha la uti wa mgongo, mwache mgonjwa atulie na uthabiti shingo hadi msaada ufike."
      },
      videoId: "/videos/training/Road%20Traffic%20Accident/VIDEO%208.mp4",
      audioEnPath: "/audio/traffic/traffic_accident_step8_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_step8_swahili.wav"
    },
    {
      instruction: { 
        en: "Casualties who are unconscious on the ground (motorcycle riders, pedestrians, or those thrown from vehicle) should be approached and assessed according to the 'Unconscious Patient' or 'CPR' modules, if applicable.", 
        sw: "Wahanga wasio na fahamu ardhini (waendesha pikipiki, waendaji kwa miguu, au waliotupwa kutoka garini) wanafaa kukaribwa na kutathminiwa kulingana na moduli za 'Mgonjwa Asiye na Fahamu' au 'CPR', ikihusika."
      },
      videoId: "/videos/training/Road%20Traffic%20Accident/VIDEO%209.mp4",
      audioEnPath: "/audio/traffic/traffic_accident_step9_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_step9_swahili.wav"
    }
  ],
  dangerWarnings: [
    { 
      en: 'Move casualties with suspected spinal injuries unless immediate life threat', 
      sw: 'Hamisha wahanga wanaoshukiwa kuwa na majeraha ya uti wa mgongo isipokuwa kuna hatari ya haraka ya uhai',
      audioEnPath: "/audio/traffic/traffic_accident_danger1_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_danger1_swahili.wav"
    },
    { 
      en: 'Remove motorcycle helmets unless airway is completely blocked', 
      sw: 'Ondoa kofia za pikipiki isipokuwa njia ya hewa imezuiliwa kabisa',
      audioEnPath: "/audio/traffic/traffic_accident_danger2_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_danger2_swahili.wav"
    },
    { 
      en: 'Give food, water, or medication to casualties', 
      sw: 'Toa chakula, maji, au dawa kwa wahanga',
      audioEnPath: "/audio/traffic/traffic_accident_danger3_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_danger3_swahili.wav"
    },
    { 
      en: 'Leave casualties alone or leave the scene before help arrives', 
      sw: 'Acha wahanga peke yao au kuondoka eneo kabla ya msaada kufika',
      audioEnPath: "/audio/traffic/traffic_accident_danger4_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_danger4_swahili.wav"
    },
    { 
      en: 'Move vehicles unless they pose immediate danger to life', 
      sw: 'Hamisha magari isipokuwa yana hatari ya haraka kwa uhai',
      audioEnPath: "/audio/traffic/traffic_accident_danger5_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_danger5_swahili.wav"
    },
    { 
      en: 'Approach if there are downed power lines or fuel fires', 
      sw: 'Karibia kama kuna mistari ya umeme iliyoanguka au moto wa mafuta',
      audioEnPath: "/audio/traffic/traffic_accident_danger6_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_danger6_swahili.wav"
    }
  ],
  criticalSigns: [
    { 
      en: 'Airway: Noisy breathing, gurgling, or complete obstruction', 
      sw: 'Njia ya hewa: Kupumua kwa kelele, mvugumo, au kuzuiliwa kabisa',
      audioEnPath: "/audio/traffic/traffic_accident_sign1_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_sign1_swahili.wav"
    },
    { 
      en: 'Breathing: Absent, very slow (<10/min), or very fast (>30/min)', 
      sw: 'Kupumua: Hakipo, polepole sana (<10/dak), au haraka sana (>30/dak)',
      audioEnPath: "/audio/traffic/traffic_accident_sign2_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_sign2_swahili.wav"
    },
    { 
      en: 'Circulation: No pulse, very weak pulse, or severe bleeding', 
      sw: 'Mzunguko wa damu: Hakuna mapigo, mapigo dhaifu sana, au kutokwa damu kwingi',
      audioEnPath: "/audio/traffic/traffic_accident_sign3_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_sign3_swahili.wav"
    },
    { 
      en: 'Consciousness: Unresponsive, confused, or rapidly deteriorating', 
      sw: 'Ufahamu: Haitikii, kuchanganyikiwa, au kuharibika haraka',
      audioEnPath: "/audio/traffic/traffic_accident_sign4_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_sign4_swahili.wav"
    },
    { 
      en: 'Spinal: Loss of sensation, inability to move limbs, or neck pain', 
      sw: 'Uti wa mgongo: Kupoteza hisia, kutoweza kuhamisha viungo, au maumivu ya shingo',
      audioEnPath: "/audio/traffic/traffic_accident_sign5_english.wav",
      audioSwPath: "/audio/traffic/traffic_accident_sign5_swahili.wav"
    }
  ],
  additionalInfo: { 
    en: 'Remember ABC priority: Airway, Breathing, Circulation. Traffic accidents often involve multiple casualties - triage to help the most people possible. Always ensure your own safety first - you cannot help others if you become a casualty yourself.', 
    sw: 'Kumbuka kipaumbele cha ABC: Airway (Njia ya hewa), Breathing (Kupumua), Circulation (Mzunguko wa damu). Ajali za barabarani mara nyingi zinahusisha wahanga wengi - panga ili kusaidia watu wengi iwezekanavyo. Daima hakikisha usalama wako kwanza - huwezi kusaidia wengine kama utakuwa mhanga mwenyewe.',
    audioEnPath: "/audio/traffic/traffic_accident_additional_info_english.wav",
    audioSwPath: "/audio/traffic/traffic_accident_additional_info_swahili.wav"
  }
};

export default trafficAccidentGuide; 