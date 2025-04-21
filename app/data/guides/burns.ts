import { GuideData } from './index';

const guide: GuideData = {
  id: 'burns',
  title: { en: 'Burns Treatment', sw: 'Matibabu ya kuungua' },
  description: { en: 'How to treat different types of burns', sw: 'How to treat different types of burns' },
  image: 'https://placehold.co/800x400/FA5252/FFFFFF?text=Burns+Treatment',
  steps: [
    {
      instruction: { 
        en: "Ensure your own safety and call emergency services immediately, especially if:\n• Large burn area\n• Inhaled smoke/hot air\n• Burns to face/throat\n• Breathing difficulties\n\nAlways seek medical advice after treating a burn.", 
        sw: "Hakikisha usalama wako na piga simu ya dharura mara moja, hasa ikiwa:\n • Sehemu kubwa imeungua\n• Amevuta moshi au hewa ya moto\n• Ameungua usoni au kooni\n• Ana ugumu wa kupumua\n\nDaima tafuta ushauri wa kitabibu baada ya kutibu jeraha la kuungua."
      },
      videoId: "/videos/training/Burn%20Injury/CALL%20BUTTON%20VIDEO.mp4",
      audioEnPath: "/audio/burns/step1_en.wav",
      audioSwPath: "/audio/burns/step1_sw.wav"
    },
    {
      instruction: { 
        en: "If person or clothes are on fire: Stop, drop, and roll them on the ground. Use water if available.", 
        sw: "Mtu au nguo zake zikishika moto: Simama, jitupe chini, na jivingirishe ardhini. Tumia maji yakiwepo."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%201.mp4",
      audioEnPath: "/audio/burns/step2_en.wav",
      audioSwPath: "/audio/burns/step2_sw.wav"
    },
    {
      instruction: { 
        en: "Cool the burned area with room temperature water (20°C) for at least 20 minutes.", 
        sw: "Poza eneo lililoungua kwa maji ya joto la kawaida (20°C) kwa angalau dakika 20."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%203.mp4"
    },
    {
      instruction: { 
        en: "Use running water if possible, or immerse the burned area if it's an arm or leg.", 
        sw: "Tumia maji yanayotiririka ikiwezekana, au tumbukiza eneo lililoungua ikiwa ni mkono au mguu."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%204.mp4"
    },
    {
      instruction: { 
        en: "Remove any jewelry or tight items from the burned area before swelling occurs.", 
        sw: "Ondoa mapambo yoyote au vitu vinavyobana kutoka kwenye eneo lililoungua kabla ya uvimbe kutokea."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%205.mp4"
    },
    {
      instruction: { 
        en: "If running water isn't available, use a clean, wet cloth at room temperature.", 
        sw: "Kama maji yanayotiririka hayapatikani, tumia kitambaa safi kilicholowa maji ya joto la kawaida."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%205.mp4"
    },
    {
      instruction: { 
        en: "Only cool the burned area, not the entire body, to prevent hypothermia.", 
        sw: "Poza eneo lililoungua tu, siyo mwili mzima, ili kuzuia kupungua kwa joto la mwili kupita kiasi (hypothermia)."
      }
    },
    {
      instruction: { 
        en: "After cooling, loosely cover the burn with a sterile bandage or clean, non-stick cloth.", 
        sw: "Baada ya kupoza, funika jeraha la moto kwa ulegevu kwa kutumia bandeji tasa au kitambaa safi kisichoganda."
      },
      videoId: "/videos/training/Burn%20Injury/VIDEO%206.mp4"
    }
  ],
  dangerWarnings: [
    { en: 'Use ice or very cold water', sw: 'Use ice or very cold water' },
    { en: 'Pop any blisters that form', sw: 'Pop any blisters that form' },
    { en: 'Apply creams, ointments, or butter to the burn', sw: 'Apply creams, ointments, or butter to the burn' },
    { en: 'Remove clothes that are stuck to the burn', sw: 'Remove clothes that are stuck to the burn' },
    { en: 'Cool the entire body - focus only on burned area', sw: 'Cool the entire body - focus only on burned area' }
  ],
  criticalSigns: [
    { en: 'First Degree: Red, painful, dry skin without blisters', sw: 'First Degree: Red, painful, dry skin without blisters' },
    { en: 'Second Degree: Blisters, moist skin, usually leaves scars', sw: 'Second Degree: Blisters, moist skin, usually leaves scars' },
    { en: 'Third Degree: Deep injury, dry leather-like skin, severe damage', sw: 'Third Degree: Deep injury, dry leather-like skin, severe damage' }
  ],
  additionalInfo: { 
    en: 'For chemical burns, rinse with clean water for at least 30 minutes. For electrical burns, ensure the power source is off before providing help.', 
    sw: 'For chemical burns, rinse with clean water for at least 30 minutes. For electrical burns, ensure the power source is off before providing help.'
  }
};

export default guide; 