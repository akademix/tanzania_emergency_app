import { GuideData, GuideStep } from './index';

const guide: GuideData = {
  id: 'burns',
  title: 'Burns Treatment',
  description: 'How to treat different types of burns',
  image: 'https://placehold.co/800x400/FA5252/FFFFFF?text=Burns+Treatment',
  steps: [
    {
      instruction: "Ensure your own safety and call emergency services immediately, especially if:\n• Large burn area\n• Inhaled smoke/hot air\n• Burns to face/throat\n• Breathing difficulties\n\nAlways seek medical advice after treating a burn.",
      videoId: "/videos/training/Burn%20Injury/CALL%20BUTTON%20VIDEO.mp4"
    },
    {
      instruction: "If person or clothes are on fire: Stop, drop, and roll them on the ground. Use water if available.",
      videoId: "/videos/training/Burn%20Injury/VIDEO%201.mp4"
    },
    {
      instruction: "Cool the burned area with room temperature water (20°C) for at least 20 minutes.",
      videoId: "/videos/training/Burn%20Injury/VIDEO%203.mp4"
    },
    {
      instruction: "Use running water if possible, or immerse the burned area if it's an arm or leg.",
      videoId: "/videos/training/Burn%20Injury/VIDEO%204.mp4"
    },
    {
      instruction: "Remove any jewelry or tight items from the burned area before swelling occurs.",
      videoId: "/videos/training/Burn%20Injury/VIDEO%205.mp4"
    },
    {
      instruction: "If running water isn't available, use a clean, wet cloth at room temperature.",
      videoId: "/videos/training/Burn%20Injury/VIDEO%205.mp4"
    },
    {
      instruction: "Only cool the burned area, not the entire body, to prevent hypothermia."
    },
    {
      instruction: "After cooling, loosely cover the burn with a sterile bandage or clean, non-stick cloth.",
      videoId: "/videos/training/Burn%20Injury/VIDEO%206.mp4"
    }
  ],
  dangerWarnings: [
    'Use ice or very cold water',
    'Pop any blisters that form',
    'Apply creams, ointments, or butter to the burn',
    'Remove clothes that are stuck to the burn',
    'Cool the entire body - focus only on burned area'
  ],
  criticalSigns: [
    'First Degree: Red, painful, dry skin without blisters',
    'Second Degree: Blisters, moist skin, usually leaves scars',
    'Third Degree: Deep injury, dry leather-like skin, severe damage'
  ],
  additionalInfo: 'For chemical burns, rinse with clean water for at least 30 minutes. For electrical burns, ensure the power source is off before providing help.'
};

export default guide; 