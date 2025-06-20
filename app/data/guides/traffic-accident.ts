import { GuideData } from './index';

export const trafficAccidentGuide: GuideData = {
  id: 'traffic-accident',
  title: { en: 'traffic accident response', sw: 'mwitikio wa ajali ya barabarani' },
  description: { en: 'Comprehensive guide for responding to traffic accidents safely and effectively', sw: 'Mwongozo kamili wa kuitikia ajali za barabarani kwa usalama na ufanisi' },
  image: 'https://placehold.co/800x400/3B82F6/FFFFFF?text=Traffic+Accident+Response',
  audioEnPath: "/audio/traffic-accident/traffic_accident_title_english.wav",
  audioSwPath: "/audio/traffic-accident/traffic_accident_title_swahili.wav",
  descriptionAudioEnPath: "/audio/traffic-accident/traffic_accident_description_english.wav",
  descriptionAudioSwPath: "/audio/traffic-accident/traffic_accident_description_swahili.wav",
  steps: [
    {
      instruction: { 
        en: "Scene safety & emergency call\n\n• Assess immediate dangers: traffic, fire, fuel leaks, unstable vehicles\n• Position your vehicle safely with hazard lights on\n• Call emergency services immediately (0800 750 112)\n• Provide exact location, number of casualties, and nature of injuries\n• Request fire service if there's fire or fuel spillage", 
        sw: "Usalama wa eneo na simu ya dharura\n\n• Tathmini hatari za haraka: trafiki, moto, uvujaji wa mafuta, magari yasiyo thabiti\n• Weka gari lako mahali salama na taa za hatari zikiwaka\n• Piga simu ya huduma za dharura mara moja (0800 750 112)\n• Toa mahali halisi, idadi ya walijeruhiwa, na aina ya majeraha\n• Omba huduma ya moto kama kuna moto au mafuta yamemwagika" 
      },
      videoId: "/videos/training/Traffic%20Accident/VIDEO%201.mp4",
      audioEnPath: "/audio/traffic-accident/step1_english.wav",
      audioSwPath: "/audio/traffic-accident/step1_swahili.wav"
    },
    {
      instruction: { 
        en: "Secure the scene\n\n• Place warning triangles 50-150m behind accident (highway: 150m, city: 50m)\n• Wear high-visibility vest if available\n• Turn off ignition of damaged vehicles if safely accessible\n• Apply handbrake and hazard lights on all vehicles\n• Clear debris from roadway if safe to do so", 
        sw: "Weka usalama wa eneo\n\n• Weka alama za onyo mita 50-150 nyuma ya ajali (barabara kuu: 150m, mjini: 50m)\n• Vaa jaketi ya kuonekana ikiwa inapatikana\n• Zima injini ya magari yaliyoharibiwa kama ni salama kuyafikia\n• Weka breki ya mkono na taa za hatari kwenye magari yote\n• Ondoa vipande vya magari barabarani kama ni salama kufanya hivyo" 
      },
      videoId: "/videos/training/Traffic%20Accident/VIDEO%202.mp4",
      audioEnPath: "/audio/traffic-accident/step2_english.wav",
      audioSwPath: "/audio/traffic-accident/step2_swahili.wav"
    },
    {
      instruction: { 
        en: "Initial assessment\n\n• Count the number of casualties from a safe distance\n• Identify priorities: unconscious victims first, then severe bleeding\n• Look for obvious signs of life-threatening injuries\n• Ask bystanders to help control traffic and assist\n• Do not approach if there are downed power lines or fuel fires", 
        sw: "Tathmini ya awali\n\n• Hesabu idadi ya walijeruhiwa kutoka umbali salama\n• Tambua vipaumbele: wasimaizi kwanza, kisha kutokwa damu kwingi\n• Tafuta dalili za wazi za majeraha yanayotishia uhai\n• Omba watu wengine kusaidia kudhibiti trafiki na kutoa msaada\n• Usikaribie kama kuna mistari ya umeme iliyoanguka au moto wa mafuta" 
      },
      videoId: "/videos/training/Traffic%20Accident/VIDEO%203.mp4",
      audioEnPath: "/audio/traffic-accident/step3_english.wav",
      audioSwPath: "/audio/traffic-accident/step3_swahili.wav"
    },
    {
      instruction: { 
        en: "Conscious casualties assessment\n\n• Approach conscious victims first - they may have hidden injuries\n• Ask: \"Are you hurt? Can you move your fingers and toes?\"\n• If they can move safely, help them exit the vehicle\n• Move to a safe location away from traffic\n• Keep them warm, calm, and monitor for shock symptoms\n• Do not give food, water, or medication", 
        sw: "Tathmini ya walijeruhiwa walio macho\n\n• Karibia wahanga walio macho kwanza - wanaweza kuwa na majeraha ya fiche\n• Uliza: \"Umejeruhiwa? Unaweza kuhamisha vidole vya mikono na miguu?\"\n• Kama wanaweza kuhama kwa usalama, wasaidie kutoka garini\n• Wahamishe mahali salama mbali na trafiki\n• Waweke joto, watulie, na wachunguze dalili za shinikizo\n• Usiwape chakula, maji, au dawa" 
      },
      videoId: "/videos/training/Traffic%20Accident/VIDEO%204.mp4",
      audioEnPath: "/audio/traffic-accident/step4_english.wav",
      audioSwPath: "/audio/traffic-accident/step4_swahili.wav"
    },
    {
      instruction: { 
        en: "Unconscious casualties - vehicle access\n\n• Check responsiveness: shout \"Can you hear me?\" and gently tap shoulders\n• If no response, carefully access the airway without moving the head/neck\n• Lean through window or door opening - do not climb into vehicle\n• Support the head and neck in neutral position\n• Check for breathing by looking, listening, and feeling for 10 seconds", 
        sw: "Wahanga wasimaizi - kufikia gari\n\n• Angalia majibu: piga kelele \"Unaweza kunisikia?\" na gusa begani kwa upole\n• Kama hakuna jibu, fikia njia ya hewa kwa uangalifu bila kuhamisha kichwa/shingo\n• Inamia kupitia dirisha au mlango - usiingie ndani ya gari\n• Tegemeza kichwa na shingo katika nafasi ya kawaida\n• Angalia kupumua kwa kutazama, kusikiliza, na kuhisi kwa sekunde 10" 
      },
      videoId: "/videos/training/Traffic%20Accident/VIDEO%205.mp4",
      audioEnPath: "/audio/traffic-accident/step5_english.wav",
      audioSwPath: "/audio/traffic-accident/step5_swahili.wav"
    },
    {
      instruction: { 
        en: "Airway management & breathing\n\n• Open airway: place one hand on forehead, two fingers under chin\n• Gently tilt head back only if necessary to open airway\n• Clear visible obstructions from mouth with finger sweep\n• If breathing normally: maintain airway and monitor\n• If not breathing: prepare for CPR - may need to extract from vehicle", 
        sw: "Usimamizi wa njia ya hewa na kupumua\n\n• Fungua njia ya hewa: weka mkono mmoja kwenye uso, vidole viwili chini ya kidevu\n• Inamisha kichwa nyuma kwa upole tu kama ni lazima kufungua njia ya hewa\n• Ondoa vito vinavyoonekana kinywani kwa kidole\n• Kama anapumua vizuri: dumisha njia ya hewa na uchunguze\n• Kama hapumi: jiandae kwa CPR - huenda ukahitaji kumtoa garini" 
      },
      videoId: "/videos/training/Traffic%20Accident/VIDEO%206.mp4",
      audioEnPath: "/audio/traffic-accident/step6_english.wav",
      audioSwPath: "/audio/traffic-accident/step6_swahili.wav"
    },
    {
      instruction: { 
        en: "Spinal injury considerations\n\n• Assume spinal injury in all unconscious casualties\n• Maintain head and neck alignment at all times\n• Only move if immediate life threat (fire, drowning risk)\n• If extraction needed: use log-roll technique with 3+ people\n• Continuous support of head, neck, and spine during any movement\n• Place on firm surface with head slightly elevated", 
        sw: "Mipango ya jeraha la uti wa mgongo\n\n• Dhani jeraha la uti wa mgongo kwa wahanga wote wasimaizi\n• Dumisha mstari wa kichwa na shingo wakati wote\n• Hamisha tu kama kuna hatari ya haraka ya uhai (moto, hatari ya kuzama)\n• Kama kutoa kunahitajika: tumia mbinu ya log-roll na watu 3+\n• Tegemeza kichwa, shingo, na uti wa mgongo wakati wa mwendo wowote\n• Weka kwenye uso mkuu na kichwa kikiwa juu kidogo" 
      },
      videoId: "/videos/training/Traffic%20Accident/VIDEO%207.mp4",
      audioEnPath: "/audio/traffic-accident/step7_english.wav",
      audioSwPath: "/audio/traffic-accident/step7_swahili.wav"
    },
    {
      instruction: { 
        en: "Bleeding control & shock management\n\n• Control severe bleeding with direct pressure using clean cloth\n• Elevate bleeding limb above heart level if no fracture suspected\n• Apply pressure points if direct pressure insufficient\n• Cover wounds to prevent infection\n• Monitor for shock: pale skin, rapid pulse, confusion, thirst\n• Keep casualties warm but not overheated", 
        sw: "Kudhibiti kutokwa damu na usimamizi wa shinikizo\n\n• Dhibiti kutokwa damu kwingi kwa shinikizo la moja kwa moja kwa kitambaa safi\n• Inua kiungo kinachotoka damu juu ya kiwango cha moyo kama hakuna mivunjiko inayoshukiwa\n• Tumia nukta za shinikizo kama shinikizo la moja kwa moja halitoshi\n• Funika majeraha kuzuia maambukizi\n• Chunguza shinikizo: ngozi yenye rangi nyeupe, mapigo ya haraka, kuchanganyikiwa, kiu\n• Weka wahanga joto lakini si kupita kiasi" 
      },
      videoId: "/videos/training/Traffic%20Accident/VIDEO%208.mp4",
      audioEnPath: "/audio/traffic-accident/step8_english.wav",
      audioSwPath: "/audio/traffic-accident/step8_swahili.wav"
    },
    {
      instruction: { 
        en: "Ongoing care & handover\n\n• Continuously monitor all casualties until help arrives\n• Document observations: time, injuries, treatments given\n• Prepare clear handover information for emergency services\n• Collect witness contact information if possible\n• Take photos of scene (after ensuring safety)\n• Stay with casualties to provide reassurance and monitor vital signs", 
        sw: "Huduma inayoendelea na kukabidhi\n\n• Chunguza wahanga wote kila wakati hadi msaada ufike\n• Andika uchunguzi: muda, majeraha, matibabu yaliyotolewa\n• Andaa taarifa wazi za kukabidhi kwa huduma za dharura\n• Kusanya taarifa za mawasiliano ya mashahidi ikiwezekana\n• Piga picha za eneo (baada ya kuhakikisha usalama)\n• Kaa na wahanga kutoa faraja na kuchunguza alama muhimu za uhai" 
      },
      videoId: "/videos/training/Traffic%20Accident/VIDEO%209.mp4",
      audioEnPath: "/audio/traffic-accident/step9_english.wav",
      audioSwPath: "/audio/traffic-accident/step9_swahili.wav"
    }
  ],
  dangerWarnings: [
    { 
      en: 'Move casualties with suspected spinal injuries unless immediate life threat', 
      sw: 'Hamisha wahanga wanaoshukiwa kuwa na majeraha ya uti wa mgongo isipokuwa kuna hatari ya haraka ya uhai',
      audioEnPath: "/audio/traffic-accident/danger1_english.wav",
      audioSwPath: "/audio/traffic-accident/danger1_swahili.wav"
    },
    { 
      en: 'Remove motorcycle helmets unless airway is completely blocked', 
      sw: 'Ondoa kofia za pikipiki isipokuwa njia ya hewa imezuiliwa kabisa',
      audioEnPath: "/audio/traffic-accident/danger2_english.wav",
      audioSwPath: "/audio/traffic-accident/danger2_swahili.wav"
    },
    { 
      en: 'Give food, water, or medication to casualties', 
      sw: 'Toa chakula, maji, au dawa kwa wahanga',
      audioEnPath: "/audio/traffic-accident/danger3_english.wav",
      audioSwPath: "/audio/traffic-accident/danger3_swahili.wav"
    },
    { 
      en: 'Leave casualties alone or leave the scene before help arrives', 
      sw: 'Acha wahanga peke yao au kuondoka eneo kabla ya msaada kufika',
      audioEnPath: "/audio/traffic-accident/danger4_english.wav",
      audioSwPath: "/audio/traffic-accident/danger4_swahili.wav"
    },
    { 
      en: 'Move vehicles unless they pose immediate danger to life', 
      sw: 'Hamisha magari isipokuwa yana hatari ya haraka kwa uhai',
      audioEnPath: "/audio/traffic-accident/danger5_english.wav",
      audioSwPath: "/audio/traffic-accident/danger5_swahili.wav"
    },
    { 
      en: 'Approach if there are downed power lines or fuel fires', 
      sw: 'Karibia kama kuna mistari ya umeme iliyoanguka au moto wa mafuta',
      audioEnPath: "/audio/traffic-accident/danger6_english.wav",
      audioSwPath: "/audio/traffic-accident/danger6_swahili.wav"
    }
  ],
  criticalSigns: [
    { 
      en: 'Airway: Noisy breathing, gurgling, or complete obstruction', 
      sw: 'Njia ya hewa: Kupumua kwa kelele, mvugumo, au kuzuiliwa kabisa',
      audioEnPath: "/audio/traffic-accident/sign1_english.wav",
      audioSwPath: "/audio/traffic-accident/sign1_swahili.wav"
    },
    { 
      en: 'Breathing: Absent, very slow (<10/min), or very fast (>30/min)', 
      sw: 'Kupumua: Hakipo, polepole sana (<10/dak), au haraka sana (>30/dak)',
      audioEnPath: "/audio/traffic-accident/sign2_english.wav",
      audioSwPath: "/audio/traffic-accident/sign2_swahili.wav"
    },
    { 
      en: 'Circulation: No pulse, very weak pulse, or severe bleeding', 
      sw: 'Mzunguko wa damu: Hakuna mapigo, mapigo dhaifu sana, au kutokwa damu kwingi',
      audioEnPath: "/audio/traffic-accident/sign3_english.wav",
      audioSwPath: "/audio/traffic-accident/sign3_swahili.wav"
    },
    { 
      en: 'Consciousness: Unresponsive, confused, or rapidly deteriorating', 
      sw: 'Ufahamu: Haitikii, kuchanganyikiwa, au kuharibika haraka',
      audioEnPath: "/audio/traffic-accident/sign4_english.wav",
      audioSwPath: "/audio/traffic-accident/sign4_swahili.wav"
    },
    { 
      en: 'Spinal: Loss of sensation, inability to move limbs, or neck pain', 
      sw: 'Uti wa mgongo: Kupoteza hisia, kutoweza kuhamisha viungo, au maumivu ya shingo',
      audioEnPath: "/audio/traffic-accident/sign5_english.wav",
      audioSwPath: "/audio/traffic-accident/sign5_swahili.wav"
    }
  ],
  additionalInfo: { 
    en: 'Remember ABC priority: Airway, Breathing, Circulation. Traffic accidents often involve multiple casualties - triage to help the most people possible. Always ensure your own safety first - you cannot help others if you become a casualty yourself.', 
    sw: 'Kumbuka kipaumbele cha ABC: Airway (Njia ya hewa), Breathing (Kupumua), Circulation (Mzunguko wa damu). Ajali za barabarani mara nyingi zinahusisha wahanga wengi - panga ili kusaidia watu wengi iwezekanavyo. Daima hakikisha usalama wako kwanza - huwezi kusaidia wengine kama utakuwa mhanga mwenyewe.',
    audioEnPath: "/audio/traffic-accident/additional_info_english.wav",
    audioSwPath: "/audio/traffic-accident/additional_info_swahili.wav"
  }
};

export default trafficAccidentGuide; 