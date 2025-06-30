import { GuideData } from './index';

export const burnsGuide: GuideData = {
  id: 'burns',
  title: { en: 'burns treatment', sw: 'matibabu ya kuungua' },
  description: { en: 'How to treat different types of burns', sw: 'Jinsi ya kutibu aina mbalimbali za kuungua' },
  image: 'https://placehold.co/800x400/FA5252/FFFFFF?text=Burns+Treatment',
  audioEnPath: "/audio/burns/burns_title_english.wav",
  audioSwPath: "/audio/burns/burns_title_swahili.wav",
  descriptionAudioEnPath: "/audio/burns/burns_description_english.wav",
  descriptionAudioSwPath: "/audio/burns/burns_description_swahili.wav",
  steps: [
    {
      instruction: { 
        en: "If person or clothes are on fire: Stop, drop, and roll them on the ground.", 
        sw: "Ikiwa mtu au nguo zake zimeshika moto: Msimamishe, amjitupe chini, na amjivingirishe ardhini."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%201.mp4",
      audioEnPath: "/audio/burns/burns_step1_english.wav",
      audioSwPath: "/audio/burns/burns_step1_swahili.wav"
    },
    {
      instruction: { 
        en: "You can also pour water on the area if possible.", 
        sw: "Unaweza pia kumwaga maji kwenye eneo hilo ikiwezekana."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%202.mp4",
      audioEnPath: "/audio/burns/burns_step2_english.wav",
      audioSwPath: "/audio/burns/burns_step2_swahili.wav"
    },
    {
      instruction: { 
        en: "Cool the burned area with cold, running water for at least 20 minutes. Do not cool the entire patient due to risk of hypothermia.", 
        sw: "Poza eneo lililoungua kwa maji baridi yanayotiririka kwa angalau dakika 20. Usipozeshe mgonjwa mzima kwa sababu ya hatari ya kupungua kwa joto la mwili."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%203.mp4",
      audioEnPath: "/audio/burns/burns_step3_english.wav",
      audioSwPath: "/audio/burns/burns_step3_swahili.wav"
    },
    {
      instruction: { 
        en: "If running water is not available, you can put the affected limb in water.", 
        sw: "Kama maji yanayotiririka hayapatikani, unaweza kuweka kiungo kilichoathiriwa kwenye maji."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%204.mp4",
      audioEnPath: "/audio/burns/burns_step4_english.wav",
      audioSwPath: "/audio/burns/burns_step4_swahili.wav"
    },
    {
      instruction: { 
        en: "Alternatively, if nothing else is available, use a clean towel and moisten it with water.", 
        sw: "Ikiwa hakuna kingine kinapatikana, tumia taula safi na uiloweshe kwa maji."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%205.mp4",
      audioEnPath: "/audio/burns/burns_step5_english.wav",
      audioSwPath: "/audio/burns/burns_step5_swahili.wav"
    },
    {
      instruction: { 
        en: "Remove rings and jewelry from the burned area before swelling occurs.", 
        sw: "Ondoa pete na mapambo kutoka kwenye eneo lililoungua kabla ya uvimbe kutokea."
      },
      audioEnPath: "/audio/burns/burns_step6_english.wav",
      audioSwPath: "/audio/burns/burns_step6_swahili.wav"
    },
    {
      instruction: { 
        en: "While cooling, call for help immediately (0800 750 112) if:\n• The injury is large\n• The patient has inhaled hot air or smoke from fire\n• The patient has difficulty breathing or has burn injuries in the mouth, face, or throat due to risk of airway damage and swelling\n\nAlways call for help if you are in doubt!", 
        sw: "Wakati wa kupoza, piga simu ya msaada mara moja (0800 750 112) ikiwa:\n• Jeraha ni kubwa\n• Mgonjwa amevuta hewa ya moto au moshi kutoka kwenye moto\n• Mgonjwa ana ugumu wa kupumua au ana majeraha ya kuungua kinywani, usoni, au kooni kwa sababu ya hatari ya uharibifu wa njia ya hewa na uvimbe\n\nDaima piga simu ya msaada ikiwa una mashaka!"
      },
      videoId: "/videos/training/Burn%20Injury/CALL%20BUTTON%20VIDEO.mp4",
      audioEnPath: "/audio/burns/burns_step7_english.wav",
      audioSwPath: "/audio/burns/burns_step7_swahili.wav"
    },
    {
      instruction: { 
        en: "Cover the wound with a sterile bandage or clean, non-sticky material. Do not apply any cream or oil. Do not burst any blisters.", 
        sw: "Funika jeraha kwa bandeji safi au kitambaa safi kisichoganda. Usiweke krimu au mafuta yoyote. Usipasue malengelenge yoyote."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%206.mp4",
      audioEnPath: "/audio/burns/burns_step8_english.wav",
      audioSwPath: "/audio/burns/burns_step8_swahili.wav"
    },
    {
      instruction: { 
        en: "If the injury is minor, contact medical personnel for evaluation and wound care.", 
        sw: "Ikiwa jeraha ni dogo, wasiliana na wataalamu wa afya kwa tathmini na huduma ya jeraha."
      },
      audioEnPath: "/audio/burns/burns_step9_english.wav",
      audioSwPath: "/audio/burns/burns_step9_swahili.wav"
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
      sw: 'Usipasue malengelenge yoyote yanayojitokeza',
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
      sw: 'Daraja la Tatu: Jeraha la ndani, ngozi kavu kama ngozi, uharibifu mkubwa',
      audioEnPath: "/audio/burns/burns_sign3_english.wav",
      audioSwPath: "/audio/burns/burns_sign3_swahili.wav"
    }
  ],
  additionalInfo: { 
    en: 'For chemical burns, rinse with clean water for at least 30 minutes. For electrical burns, ensure the power source is off before providing help.', 
    sw: 'Kwa kuungua kwa kemikali, osha kwa maji safi kwa angalau dakika 30. Kwa kuungua kwa umeme, hakikisha chanzo cha umeme kimezimwa kabla ya kutoa msaada.',
    audioEnPath: "/audio/burns/burns_additional_info_english.wav",
    audioSwPath: "/audio/burns/burns_additional_info_swahili.wav"
  }
};

export default burnsGuide; 