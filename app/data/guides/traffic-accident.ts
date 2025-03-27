import { GuideData } from './index';

const guide: GuideData = {
  id: 'traffic-accident',
  title: 'Traffic Accident Response',
  description: 'How to respond to a traffic accident',
  image: 'https://placehold.co/800x400/3B82F6/FFFFFF?text=Traffic+Accident+Response',
  steps: [
    'Ensure your own safety and call emergency services immediately - Provide exact location - State number of people involved - Report any trapped victims - Mention if there\'s fire or dangerous goods',
    'Secure the accident scene: Turn on hazard lights, place warning triangle at least 100m behind the accident',
    'Check for danger: Fire, traffic, fuel leaks, unstable vehicles',
    'Check consciousness of victims - speak loudly and clearly',
    'Check breathing and pulse - be prepared for CPR if needed',
    'If conscious, keep victims calm and still - don\'t move them unless in immediate danger',
    'Control any serious bleeding with direct pressure using clean cloth',
    'Keep victims warm using blankets or coats'
  ],
  dangerWarnings: [
    'Remove motorcycle helmets unless victim is not breathing',
    'Move victims with potential neck or spine injuries',
    'Give food or drink to victims',
    'Leave the scene until emergency services arrive',
    'Attempt to move vehicles unless they pose immediate danger'
  ],
  criticalSigns: [
    'Consciousness: Confusion, drowsiness, or unconsciousness',
    'Breathing: Difficulty breathing or irregular breathing',
    'Circulation: Weak pulse, pale/cold skin, severe bleeding',
    'Movement: Inability to move limbs, severe pain when moving'
  ],
  additionalInfo: 'Document the scene if possible (photos, notes) and collect contact information from witnesses while waiting for emergency services.'
};

export default guide; 