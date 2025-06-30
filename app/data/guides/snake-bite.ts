import { GuideData } from './index';

export const snakeBiteGuide: GuideData = {
  id: 'snake-bite',
  title: { en: 'snake bite treatment', sw: 'matibabu ya kuumwa na nyoka' },
  description: { en: 'Comprehensive guide for treating snake bites safely and effectively', sw: 'Mwongozo kamili wa kutibu kuumwa na nyoka kwa usalama na ufanisi' },
  image: 'https://placehold.co/800x400/10B981/FFFFFF?text=Snake+Bite+Treatment',
  audioEnPath: "/audio/snake-bite/snake_bite_title_english.wav",
  audioSwPath: "/audio/snake-bite/snake_bite_title_swahili.wav",
  descriptionAudioEnPath: "/audio/snake-bite/snake_bite_description_english.wav",
  descriptionAudioSwPath: "/audio/snake-bite/snake_bite_description_swahili.wav",
  steps: [
    {
      instruction: { 
        en: "Ensure immediate safety for yourself and others before approaching the victim.", 
        sw: "Hakikisha usalama wa haraka kwa ajili yako na wengine kabla ya kumkaribia mhanga."
      },
      videoId: "/videos/training/Snake%20Bite/VIDEO%201.mp4",
      audioEnPath: "/audio/snake-bite/step1_english.wav",
      audioSwPath: "/audio/snake-bite/step1_swahili.wav"
    },
    {
      instruction: { 
        en: "Move away from the area where the snake is, if you can. Do not try to kill or capture the snake. If the snake is attached to the victim, use a stick or tool to make it let go. Sea snake victims must be moved to dry land.", 
        sw: "Sogea mbali na eneo lile nyoka alipo, ukiweza. Usijaribu kuua au kukamata nyoka. Kama nyoka ameambatana na mhanga, tumia fimbo au chombo ili amwache. Wahanga wa nyoka wa baharini lazima wahamishwe kwenye ardhi kavu."
      },
      videoId: "/videos/training/Snake%20Bite/VIDEO%202.mp4",
      audioEnPath: "/audio/snake-bite/step2_english.wav",
      audioSwPath: "/audio/snake-bite/step2_swahili.wav"
    },
    {
      instruction: { 
        en: "Try to keep the victim calm and reassure him/her. Call for help and transportation (0800 750 112) to a health care facility. Cleanse wounds to decrease infection risk. Remove rings or anything tight from the bitten part of the body. They can cause harm if swellings occur. Do not apply a tourniquet, cut in the wound or try to suck out the venom.", 
        sw: "Jaribu kumweka mhanga atulie na kumfariji. Piga simu ya msaada na usafiri (0800 750 112) kwenda kituo cha afya. Safisha majeraha kupunguza hatari ya maambukizi. Ondoa pete au kitu chochote kizito kutoka sehemu iliyoumwa. Vinaweza kusababisha madhara kama kuvimba kutatokea. Usiweke kifungo cha kuzuia damu, usikatae jeraha au kujaribu kumeza sumu."
      },
      videoId: "/videos/training/Snake%20Bite/VIDEO%203.mp4",
      audioEnPath: "/audio/snake-bite/step3_english.wav",
      audioSwPath: "/audio/snake-bite/step3_swahili.wav"
    },
    {
      instruction: { 
        en: "Immobilize the person completely. Splint the bitten limb to keep it still, using a stick or the other limb. Monitor the patient's breathing and level of consciousness. Place the patient in recovery position if reduced consciousness, and be prepared for vomiting. Reassure the victim. Many bites are caused by non-venomous snakes, and even venomous snakes usually do not cause immediate death. Seeking immediate help is essential!", 
        sw: "Simamisha mtu kabisa. Weka kijiti kwenye kiungo kilichoumwa ili kisihamike, ukitumia fimbo au kiungo kingine. Chunguza kupumua kwa mgonjwa na kiwango cha ufahamu. Weka mgonjwa katika nafasi ya kupona kama ufahamu umepungua, na jiandae kwa kutapika. Mfariji mhanga. Kuumwa kwingi ni kutokana na nyoka wasio na sumu, na hata nyoka wenye sumu kwa kawaida hawasababishi kifo cha haraka. Kutafuta msaada wa haraka ni muhimu!"
      },
      videoId: "/videos/training/Snake%20Bite/VIDEO%204.mp4",
      audioEnPath: "/audio/snake-bite/step4_english.wav",
      audioSwPath: "/audio/snake-bite/step4_swahili.wav"
    }
  ],
  dangerWarnings: [
    { 
      en: 'Apply a tourniquet or try to suck out the venom', 
      sw: 'Weka kifungo cha kuzuia damu au kujaribu kumeza sumu',
      audioEnPath: "/audio/snake-bite/danger1_english.wav",
      audioSwPath: "/audio/snake-bite/danger1_swahili.wav"
    },
    { 
      en: 'Cut into the wound or make incisions', 
      sw: 'Kata jeraha au fanya mikato',
      audioEnPath: "/audio/snake-bite/danger2_english.wav",
      audioSwPath: "/audio/snake-bite/danger2_swahili.wav"
    },
    { 
      en: 'Apply ice, cold water, or submerge in water', 
      sw: 'Weka barafu, maji baridi, au kuzamisha majini',
      audioEnPath: "/audio/snake-bite/danger3_english.wav",
      audioSwPath: "/audio/snake-bite/danger3_swahili.wav"
    },
    { 
      en: 'Give alcohol, caffeine, or stimulants to the victim', 
      sw: 'Mpa mhanga pombe, kifeine, au vichochezi',
      audioEnPath: "/audio/snake-bite/danger4_english.wav",
      audioSwPath: "/audio/snake-bite/danger4_swahili.wav"
    },
    { 
      en: 'Try to kill or capture the snake for identification', 
      sw: 'Jaribu kuua au kukamata nyoka kwa utambulisho',
      audioEnPath: "/audio/snake-bite/danger5_english.wav",
      audioSwPath: "/audio/snake-bite/danger5_swahili.wav"
    },
    { 
      en: 'Elevate the bitten limb above heart level', 
      sw: 'Inua kiungo kilichoumwa juu ya kiwango cha moyo',
      audioEnPath: "/audio/snake-bite/danger6_english.wav",
      audioSwPath: "/audio/snake-bite/danger6_swahili.wav"
    }
  ],
  criticalSigns: [
    { 
      en: 'Breathing: Difficulty breathing, shallow breathing, or respiratory distress', 
      sw: 'Kupumua: Ugumu wa kupumua, kupumua kwa uchuchu, au dhiki ya kupumua',
      audioEnPath: "/audio/snake-bite/sign1_english.wav",
      audioSwPath: "/audio/snake-bite/sign1_swahili.wav"
    },
    { 
      en: 'Consciousness: Confusion, drowsiness, or loss of consciousness', 
      sw: 'Ufahamu: Kuchanganyikiwa, usingizi, au kupoteza fahamu',
      audioEnPath: "/audio/snake-bite/sign2_english.wav",
      audioSwPath: "/audio/snake-bite/sign2_swahili.wav"
    },
    { 
      en: 'Circulation: Weak pulse, pale skin, or signs of shock', 
      sw: 'Mzunguko wa damu: Mapigo dhaifu, ngozi yenye rangi nyeupe, au dalili za shinikizo',
      audioEnPath: "/audio/snake-bite/sign3_english.wav",
      audioSwPath: "/audio/snake-bite/sign3_swahili.wav"
    },
    { 
      en: 'Local symptoms: Severe swelling, intense pain, or tissue death', 
      sw: 'Dalili za eneo: Kuvimba kwingi, maumivu makali, au kufa kwa tishu',
      audioEnPath: "/audio/snake-bite/sign4_english.wav",
      audioSwPath: "/audio/snake-bite/sign4_swahili.wav"
    },
    { 
      en: 'Systemic symptoms: Nausea, vomiting, or allergic reactions', 
      sw: 'Dalili za mfumo: Kichefuchefu, kutapika, au athari za mzio',
      audioEnPath: "/audio/snake-bite/sign5_english.wav",
      audioSwPath: "/audio/snake-bite/sign5_swahili.wav"
    }
  ],
  additionalInfo: { 
    en: 'If possible, note the snake\'s appearance (color, pattern, size) from a safe distance to help medical professionals identify it. Most snake bites are from non-venomous species, but always treat every bite as potentially dangerous and seek immediate medical attention.', 
    sw: 'Ikiwezekana, angalia mwonekano wa nyoka (rangi, mchoro, ukubwa) kutoka umbali salama ili kusaidia wataalamu wa matibabu kumtambua. Kuumwa kwingi na nyoka ni kutoka aina zisizo na sumu, lakini daima tibu kila kuumwa kama kuna hatari na utafute matibabu ya haraka.',
    audioEnPath: "/audio/snake-bite/additional_info_english.wav",
    audioSwPath: "/audio/snake-bite/additional_info_swahili.wav"
  }
};

export default snakeBiteGuide; 