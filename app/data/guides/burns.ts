import { GuideData } from './index';

const guide: GuideData = {
  id: 'burns',
  title: 'Burns Treatment',
  description: 'How to treat different types of burns',
  image: 'https://placehold.co/800x400/FA5252/FFFFFF?text=Burns+Treatment',
  steps: [
    "Ensure your own safety and call emergency services immediately, especially if: - Large burn area - Inhaled smoke/hot air - Burns to face/throat - Breathing difficulties. Always seek medical advice after treating a burn.",
    "If person or clothes are on fire: Stop, drop, and roll them on the ground. Use water if available.",
    "Cool the burned area with room temperature water (20°C) for at least 20 minutes.",
    "Use running water if possible, or immerse the burned area if it's an arm or leg.",
    "Remove any jewelry or tight items from the burned area before swelling occurs.",
    "If running water isn't available, use a clean, wet cloth at room temperature.",
    "Only cool the burned area, not the entire body, to prevent hypothermia.",
    "After cooling, loosely cover the burn with a sterile bandage or clean, non-stick cloth."
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