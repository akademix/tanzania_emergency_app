import { GuideData } from './index';

const guide: GuideData = {
  id: 'burns',
  title: { en: 'Burns Treatment', sw: 'Matibabu ya kuungua' },
  description: { en: 'How to treat different types of burns', sw: 'Jinsi ya kutibu aina mbalimbali za kuungua' },
  image: 'https://placehold.co/800x400/FA5252/FFFFFF?text=Burns+Treatment',
  audioEnPath: "/audio/burns/burns_title_english.wav",
  audioSwPath: "/audio/burns/burns_title_swahili.wav",
  descriptionAudioEnPath: "/audio/burns/burns_description_english.wav",
  descriptionAudioSwPath: "/audio/burns/burns_description_swahili.wav",
  steps: [
    {
      instruction: { 
        en: "Ensure your own safety and call emergency services immediately, especially if:\n• Large burn area\n• Inhaled smoke/hot air\n• Burns to face/throat\n• Breathing difficulties\n\nAlways seek medical advice after treating a burn.", 
        sw: "Hakikisha usalama wako na piga simu ya dharura mara moja, hasa ikiwa:\n • Sehemu kubwa imeungua\n• Amevuta moshi au hewa ya moto\n• Ameungua usoni au kooni\n• Ana ugumu wa kupumua\n\nDaima tafuta ushauri wa kitabibu baada ya kutibu jeraha la kuungua."
      },
      videoId: "/videos/training/Burn%20Injury/CALL%20BUTTON%20VIDEO.mp4",
      audioEnPath: "/audio/burns/burns_step1_english.wav",
      audioSwPath: "/audio/burns/burns_step1_swahili.wav"
    },
    {
      instruction: { 
        en: "If person or clothes are on fire: Stop, drop, and roll them on the ground. Use water if available.", 
        sw: "Mtu au nguo zake zikishika moto: Simama, jitupe chini, na jivingirishe ardhini. Tumia maji yakiwepo."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%201.mp4",
      audioEnPath: "/audio/burns/burns_step2_english.wav",
      audioSwPath: "/audio/burns/burns_step2_swahili.wav"
    },
    {
      instruction: { 
        en: "Cool the burned area with room temperature water (20°C) for at least 20 minutes.", 
        sw: "Poza eneo lililoungua kwa maji ya joto la kawaida (20°C) kwa angalau dakika 20."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%203.mp4",
      audioEnPath: "/audio/burns/burns_step3_english.wav",
      audioSwPath: "/audio/burns/burns_step3_swahili.wav"
    },
    {
      instruction: { 
        en: "Use running water if possible, or immerse the burned area if it's an arm or leg.", 
        sw: "Tumia maji yanayotiririka ikiwezekana, au tumbukiza eneo lililoungua ikiwa ni mkono au mguu."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%204.mp4",
      audioEnPath: "/audio/burns/burns_step4_english.wav",
      audioSwPath: "/audio/burns/burns_step4_swahili.wav"
    },
    {
      instruction: { 
        en: "Remove any jewelry or tight items from the burned area before swelling occurs.", 
        sw: "Ondoa mapambo yoyote au vitu vinavyobana kutoka kwenye eneo lililoungua kabla ya uvimbe kutokea."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%205.mp4",
      audioEnPath: "/audio/burns/burns_step5_english.wav",
      audioSwPath: "/audio/burns/burns_step5_swahili.wav"
    },
    {
      instruction: { 
        en: "If running water isn't available, use a clean, wet cloth at room temperature.", 
        sw: "Kama maji yanayotiririka hayapatikani, tumia kitambaa safi kilicholowa maji ya joto la kawaida."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%205.mp4",
      audioEnPath: "/audio/burns/burns_step6_english.wav",
      audioSwPath: "/audio/burns/burns_step6_swahili.wav"
    },
    {
      instruction: { 
        en: "Only cool the burned area, not the entire body, to prevent hypothermia.", 
        sw: "Poza eneo lililoungua tu, siyo mwili mzima, ili kuzuia kupungua kwa joto la mwili kupita kiasi (hypothermia)."
      },
      audioEnPath: "/audio/burns/burns_step7_english.wav",
      audioSwPath: "/audio/burns/burns_step7_swahili.wav"
    },
    {
      instruction: { 
        en: "After cooling, loosely cover the burn with a sterile bandage or clean, non-stick cloth.", 
        sw: "Baada ya kupoza, funika jeraha la moto kwa ulegevu kwa kutumia bandeji tasa au kitambaa safi kisichoganda."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%206.mp4",
      audioEnPath: "/audio/burns/burns_step8_english.wav",
      audioSwPath: "/audio/burns/burns_step8_swahili.wav"
    }
  ],
  dangerWarnings: [
    { 
      en: 'Use ice or very cold water', 
      sw: 'Usitumie barafu au maji baridi sana',
      audioEnPath: "/audio/burns/burns_danger1_english.wav",
      audioSwPath: "/audio/burns/burns_danger1_swahili.wav"
    },
    { 
      en: 'Pop any blisters that form', 
      sw: 'Usitoboe malengelenge yoyote yanayojitokeza',
      audioEnPath: "/audio/burns/burns_danger2_english.wav",
      audioSwPath: "/audio/burns/burns_danger2_swahili.wav"
    },
    { 
      en: 'Apply creams, ointments, or butter to the burn', 
      sw: 'Usiweke krimu, marhamu, au siagi kwenye jeraha la kuungua',
      audioEnPath: "/audio/burns/burns_danger3_english.wav",
      audioSwPath: "/audio/burns/burns_danger3_swahili.wav"
    },
    { 
      en: 'Remove clothes that are stuck to the burn', 
      sw: 'Usiondoe nguo zinazogandamana na jeraha la kuungua',
      audioEnPath: "/audio/burns/burns_danger4_english.wav",
      audioSwPath: "/audio/burns/burns_danger4_swahili.wav"
    },
    { 
      en: 'Cool the entire body - focus only on burned area', 
      sw: 'Usipozeshe mwili mzima - lenga tu eneo lililoungua',
      audioEnPath: "/audio/burns/burns_danger5_english.wav",
      audioSwPath: "/audio/burns/burns_danger5_swahili.wav"
    }
  ],
  criticalSigns: [
    { 
      en: 'First Degree: Red, painful, dry skin without blisters', 
      sw: 'Daraja la Kwanza: Ngozi nyekundu, yenye maumivu, kavu bila malengelenge',
      audioEnPath: "/audio/burns/burns_sign1_english.wav",
      audioSwPath: "/audio/burns/burns_sign1_swahili.wav"
    },
    { 
      en: 'Second Degree: Blisters, moist skin, usually leaves scars', 
      sw: 'Daraja la Pili: Malengelenge, ngozi yenye unyevu, kwa kawaida huacha makovu',
      audioEnPath: "/audio/burns/burns_sign2_english.wav",
      audioSwPath: "/audio/burns/burns_sign2_swahili.wav"
    },
    { 
      en: 'Third Degree: Deep injury, dry leather-like skin, severe damage', 
      sw: 'Daraja la Tatu: Jeraha la ndani, ngozi kavu kama ngozi ya wanyama, uharibifu mkubwa',
      audioEnPath: "/audio/burns/burns_sign3_english.wav",
      audioSwPath: "/audio/burns/burns_sign3_swahili.wav"
    }
  ],
  additionalInfo: { 
    en: 'For chemical burns, rinse with clean water for at least 30 minutes. For electrical burns, ensure the power source is off before providing help.', 
    sw: 'Kwa maumivu ya kemikali, osha kwa maji safi kwa angalau dakika 30. Kwa maumivu ya umeme, hakikisha chanzo cha umeme kimezimwa kabla ya kutoa msaada.',
    audioEnPath: "/audio/burns/burns_additional_info_english.wav",
    audioSwPath: "/audio/burns/burns_additional_info_swahili.wav"
  }
};

export default guide; 