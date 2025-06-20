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
        en: "Ensure safety & move away\n\n• Move away from the area where the snake is, if you can\n• Do not try to kill or capture the snake\n• If the snake is attached to the victim, use a stick or tool to make it let go\n• Sea snake victims must be moved to dry land\n• Keep yourself and others safe from further bites", 
        sw: "Hakikisha usalama na sogea mbali\n\n• Sogea mbali na eneo lile nyoka alipo, ukiweza\n• Usijaribu kuua au kukamata nyoka\n• Kama nyoka ameambatana na mhanga, tumia fimbo au chombo ili amwache\n• Wahanga wa nyoka wa baharini lazima wahamishe kwenye ardhi kavu\n• Jilinde wewe na wengine dhidi ya kuumwa zaidi" 
      },
      videoId: "/videos/training/Snake%20Bite/VIDEO%201.mp4",
      audioEnPath: "/audio/snake-bite/step1_english.wav",
      audioSwPath: "/audio/snake-bite/step1_swahili.wav"
    },
    {
      instruction: { 
        en: "Move away from snake area\n\n• Move away from the area where the snake is, if you can\n• Do not try to kill or capture the snake\n• If the snake is attached to the victim, use a stick or tool to make it let go\n• Sea snake victims must be moved to dry land", 
        sw: "Sogea mbali na eneo la nyoka\n\n• Sogea mbali na eneo lile nyoka alipo, ukiweza\n• Usijaribu kuua au kukamata nyoka\n• Kama nyoka ameambatana na mhanga, tumia fimbo au chombo ili amwache\n• Wahanga wa nyoka wa baharini lazima wahamishe kwenye ardhi kavu" 
      },
      videoId: "/videos/training/Snake%20Bite/VIDEO%202.mp4",
      audioEnPath: "/audio/snake-bite/step2_english.wav",
      audioSwPath: "/audio/snake-bite/step2_swahili.wav"
    },
    {
      instruction: { 
        en: "Keep victim calm & call for help\n\n• Try to keep the victim calm and reassure him/her\n• Call for help and transportation (0800 750 112) to a health care facility\n• Cleanse wounds to decrease infection risk\n• Remove rings or anything tight from the bitten part of the body\n• They can cause harm if swellings occur", 
        sw: "Weka mhanga atulie na piga simu msaada\n\n• Jaribu kumweka mhanga atulie na kumfariji\n• Piga simu msaada na usafiri (0800 750 112) kwenda kituo cha afya\n• Safisha majeraha kupunguza hatari ya maambukizi\n• Ondoa pete au kitu chochote kilicho kigumu kutoka sehemu iliyoumwa\n• Vinaweza kusababisha madhara kama kuvimba kutatokea" 
      },
      videoId: "/videos/training/Snake%20Bite/VIDEO%203.mp4",
      audioEnPath: "/audio/snake-bite/step3_english.wav",
      audioSwPath: "/audio/snake-bite/step3_swahili.wav"
    },
    {
      instruction: { 
        en: "What NOT to do\n\n• Do not apply a tourniquet\n• Do not cut in the wound\n• Do not try to suck out the venom\n• Do not apply ice or cold water\n• Do not give alcohol or caffeine\n• Do not elevate the bitten limb above heart level", 
        sw: "Usifanye nini\n\n• Usiweke tourniquet (kifungo cha kuzuia damu)\n• Usikatae jeraha\n• Usijaribu kumeza sumu\n• Usiweke barafu au maji baridi\n• Usimpe pombe au kifeine\n• Usiinue kiungo kilichoumwa juu ya kiwango cha moyo" 
      },
      videoId: "/videos/training/Snake%20Bite/CALL%20BUTTON%20VIDEO.mp4",
      audioEnPath: "/audio/snake-bite/step4_english.wav",
      audioSwPath: "/audio/snake-bite/step4_swahili.wav"
    },
    {
      instruction: { 
        en: "Immobilize completely\n\n• Immobilize the person completely\n• Splint the bitten limb to keep it still, using a stick or the other limb\n• Monitor the patient's breathing and level of consciousness\n• Place the patient in recovery position if reduced consciousness\n• Be prepared for vomiting", 
        sw: "Simamisha kabisa\n\n• Simamisha mtu kabisa\n• Weka splint kwenye kiungo kilichoumwa ili kisihamike, ukitumia fimbo au kiungo kingine\n• Chunguza kupumua kwa mgonjwa na kiwango cha ufahamu\n• Weka mgonjwa katika nafasi ya kuokoa kama ufahamu umepungua\n• Jiandae kwa kutapika" 
      },
      videoId: "/videos/training/Snake%20Bite/VIDEO%204.mp4",
      audioEnPath: "/audio/snake-bite/step5_english.wav",
      audioSwPath: "/audio/snake-bite/step5_swahili.wav"
    },
    {
      instruction: { 
        en: "Ongoing monitoring & reassurance\n\n• Reassure the victim continuously\n• Many bites are caused by non-venomous snakes\n• Even venomous snakes usually do not cause immediate death\n• Seeking immediate help is essential\n• Monitor vital signs until help arrives\n• Keep detailed notes of symptoms and timing", 
        sw: "Ufuatiliaji unaoendelea na faraja\n\n• Endelea kumfariji mhanga\n• Kuumwa kwingi ni kutokana na nyoka wasio na sumu\n• Hata nyoka wenye sumu kwa kawaida hawasababishi kifo cha haraka\n• Kutafuta msaada wa haraka ni muhimu\n• Chunguza alama muhimu za uhai hadi msaada ufike\n• Weka maelezo ya kina ya dalili na muda" 
      },
      videoId: "/videos/training/Snake%20Bite/VIDEO%205.mp4",
      audioEnPath: "/audio/snake-bite/step6_english.wav",
      audioSwPath: "/audio/snake-bite/step6_swahili.wav"
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