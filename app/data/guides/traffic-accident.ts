import { GuideData } from './index';

const guide: GuideData = {
  id: 'traffic-accident',
  title: { en: 'Traffic Accident Response', sw: 'Traffic Accident Response' },
  description: { en: 'How to respond to a traffic accident', sw: 'How to respond to a traffic accident' },
  image: 'https://placehold.co/800x400/3B82F6/FFFFFF?text=Traffic+Accident+Response',
  steps: [
    {
      instruction: { en: 'Ensure your own safety and call emergency services immediately - Provide exact location - State number of people involved - Report any trapped victims - Mention if there\'s fire or dangerous goods', sw: 'Ensure your own safety and call emergency services immediately - Provide exact location - State number of people involved - Report any trapped victims - Mention if there\'s fire or dangerous goods' }
    },
    {
      instruction: { en: 'Secure the accident scene: Turn on hazard lights, place warning triangle at least 100m behind the accident', sw: 'Secure the accident scene: Turn on hazard lights, place warning triangle at least 100m behind the accident' }
    },
    {
      instruction: { en: 'Check for danger: Fire, traffic, fuel leaks, unstable vehicles', sw: 'Check for danger: Fire, traffic, fuel leaks, unstable vehicles' }
    },
    {
      instruction: { en: 'Check consciousness of victims - speak loudly and clearly', sw: 'Check consciousness of victims - speak loudly and clearly' }
    },
    {
      instruction: { en: 'Check breathing and pulse - be prepared for CPR if needed', sw: 'Check breathing and pulse - be prepared for CPR if needed' }
    },
    {
      instruction: { en: 'If conscious, keep victims calm and still - don\'t move them unless in immediate danger', sw: 'If conscious, keep victims calm and still - don\'t move them unless in immediate danger' }
    },
    {
      instruction: { en: 'Control any serious bleeding with direct pressure using clean cloth', sw: 'Control any serious bleeding with direct pressure using clean cloth' }
    },
    {
      instruction: { en: 'Keep victims warm using blankets or coats', sw: 'Keep victims warm using blankets or coats' }
    }
  ],
  dangerWarnings: [
    { en: 'Remove motorcycle helmets unless victim is not breathing', sw: 'Remove motorcycle helmets unless victim is not breathing' },
    { en: 'Move victims with potential neck or spine injuries', sw: 'Move victims with potential neck or spine injuries' },
    { en: 'Give food or drink to victims', sw: 'Give food or drink to victims' },
    { en: 'Leave the scene until emergency services arrive', sw: 'Leave the scene until emergency services arrive' },
    { en: 'Attempt to move vehicles unless they pose immediate danger', sw: 'Attempt to move vehicles unless they pose immediate danger' }
  ],
  criticalSigns: [
    { en: 'Consciousness: Confusion, drowsiness, or unconsciousness', sw: 'Consciousness: Confusion, drowsiness, or unconsciousness' },
    { en: 'Breathing: Difficulty breathing or irregular breathing', sw: 'Breathing: Difficulty breathing or irregular breathing' },
    { en: 'Circulation: Weak pulse, pale/cold skin, severe bleeding', sw: 'Circulation: Weak pulse, pale/cold skin, severe bleeding' },
    { en: 'Movement: Inability to move limbs, severe pain when moving', sw: 'Movement: Inability to move limbs, severe pain when moving' }
  ],
  additionalInfo: { en: 'Document the scene if possible (photos, notes) and collect contact information from witnesses while waiting for emergency services.', sw: 'Document the scene if possible (photos, notes) and collect contact information from witnesses while waiting for emergency services.' }
};

export default guide; 