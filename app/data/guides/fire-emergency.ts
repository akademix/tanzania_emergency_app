import { GuideData, GuideStep } from './index';

const guide: GuideData = {
  id: 'fire-emergency',
  title: 'Fire Emergency Response',
  description: 'How to respond to a fire emergency',
  image: 'https://placehold.co/800x400/DC2626/FFFFFF?text=Fire+Emergency',
  steps: [
    {
      instruction: 'Alert everyone in the area by shouting "Fire!"'
    },
    {
      instruction: 'Call emergency services (0800 750 112) immediately'
    },
    {
      instruction: 'If the fire is small and contained, use a fire extinguisher'
    },
    {
      instruction: 'If the fire is large, evacuate immediately'
    },
    {
      instruction: 'Stay low to avoid smoke inhalation'
    },
    {
      instruction: 'Feel doors before opening - if hot, find another exit'
    },
    {
      instruction: 'Once outside, stay outside and wait for emergency services'
    }
  ],
  dangerWarnings: [
    'Do NOT use elevators during a fire',
    'Do NOT go back inside a burning building for any reason',
    'Do NOT hide in closets or under beds',
    'Do NOT try to fight a large fire yourself',
    'Do NOT break windows unless absolutely necessary for escape'
  ],
  criticalSigns: [
    'Trapped or missing people',
    'Spreading of fire to nearby structures',
    'Presence of hazardous materials',
    'Signs of smoke inhalation such as coughing, shortness of breath',
    'Burns on skin - especially if severe'
  ],
  additionalInfo: 'Remember the acronym PASS when using a fire extinguisher: Pull the pin, Aim at the base of the fire, Squeeze the handle, Sweep from side to side.'
};

export default guide; 