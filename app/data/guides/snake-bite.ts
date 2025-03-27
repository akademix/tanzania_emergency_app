import { GuideData } from './index';

const guide: GuideData = {
  id: 'snake-bite',
  title: 'Snake Bite Treatment',
  description: 'How to respond to a snake bite',
  image: 'https://placehold.co/800x400/10B981/FFFFFF?text=Snake+Bite+Treatment',
  steps: [
    "Ensure your own safety and move away from the snake's area. If still attached, use a stick to make it release - do not attempt to catch or kill it.",
    "Call emergency services immediately, especially if: - Snake is venomous or unknown - Difficulty breathing - Bite on head/neck - Signs of severe allergic reaction.",
    "Keep the person calm and still to slow down venom spread.",
    "Remove any constricting items (jewelry, watches, tight clothing) from the affected area.",
    "Keep the bitten area below heart level.",
    "Clean the wound with soap and water if available.",
    "Place the person on their left side (recovery position) in case of vomiting."
  ],
  dangerWarnings: [
    'Apply a tourniquet or try to suck out the venom',
    'Cut into the wound',
    'Apply ice or submerge in water',
    'Drink alcohol or caffeinated beverages',
    'Take ibuprofen or other non-paracetamol pain medication'
  ],
  criticalSigns: [
    'Monitor airway and breathing - be prepared for resuscitation if needed',
    'Paracetamol may be given for pain relief',
    'Reassure the victim - many snakes are non-venomous',
    'Immobilize the affected limb and use a stretcher if available'
  ],
  additionalInfo: 'Different snakes cause different symptoms. If possible, note the color and pattern of the snake to help medical professionals identify it and provide the correct antivenom if needed.'
};

export default guide; 