import { GuideData } from './index';

const guide: GuideData = {
  id: 'snake-bite',
  title: { en: 'Snake Bite Treatment', sw: 'Snake Bite Treatment' },
  description: { en: 'How to respond to a snake bite', sw: 'How to respond to a snake bite' },
  image: 'https://placehold.co/800x400/10B981/FFFFFF?text=Snake+Bite+Treatment',
  steps: [
    {
      instruction: { en: "Ensure your own safety and move away from the snake's area. If still attached, use a stick to make it release - do not attempt to catch or kill it.", sw: "Ensure your own safety and move away from the snake's area. If still attached, use a stick to make it release - do not attempt to catch or kill it." }
    },
    {
      instruction: { en: "Call emergency services immediately, especially if: - Snake is venomous or unknown - Difficulty breathing - Bite on head/neck - Signs of severe allergic reaction.", sw: "Call emergency services immediately, especially if: - Snake is venomous or unknown - Difficulty breathing - Bite on head/neck - Signs of severe allergic reaction." }
    },
    {
      instruction: { en: "Keep the person calm and still to slow down venom spread.", sw: "Keep the person calm and still to slow down venom spread." }
    },
    {
      instruction: { en: "Remove any constricting items (jewelry, watches, tight clothing) from the affected area.", sw: "Remove any constricting items (jewelry, watches, tight clothing) from the affected area." }
    },
    {
      instruction: { en: "Keep the bitten area below heart level.", sw: "Keep the bitten area below heart level." }
    },
    {
      instruction: { en: "Clean the wound with soap and water if available.", sw: "Clean the wound with soap and water if available." }
    },
    {
      instruction: { en: "Place the person on their left side (recovery position) in case of vomiting.", sw: "Place the person on their left side (recovery position) in case of vomiting." }
    }
  ],
  dangerWarnings: [
    { en: 'Apply a tourniquet or try to suck out the venom', sw: 'Apply a tourniquet or try to suck out the venom' },
    { en: 'Cut into the wound', sw: 'Cut into the wound' },
    { en: 'Apply ice or submerge in water', sw: 'Apply ice or submerge in water' },
    { en: 'Drink alcohol or caffeinated beverages', sw: 'Drink alcohol or caffeinated beverages' },
    { en: 'Take ibuprofen or other non-paracetamol pain medication', sw: 'Take ibuprofen or other non-paracetamol pain medication' }
  ],
  criticalSigns: [
    { en: 'Monitor airway and breathing - be prepared for resuscitation if needed', sw: 'Monitor airway and breathing - be prepared for resuscitation if needed' },
    { en: 'Paracetamol may be given for pain relief', sw: 'Paracetamol may be given for pain relief' },
    { en: 'Reassure the victim - many snakes are non-venomous', sw: 'Reassure the victim - many snakes are non-venomous' },
    { en: 'Immobilize the affected limb and use a stretcher if available', sw: 'Immobilize the affected limb and use a stretcher if available' }
  ],
  additionalInfo: { en: 'Different snakes cause different symptoms. If possible, note the color and pattern of the snake to help medical professionals identify it and provide the correct antivenom if needed.', sw: 'Different snakes cause different symptoms. If possible, note the color and pattern of the snake to help medical professionals identify it and provide the correct antivenom if needed.' }
};

export default guide; 