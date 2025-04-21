import { GuideData } from './index';

const guide: GuideData = {
  id: 'fire-emergency',
  title: { en: 'Fire Emergency Response', sw: 'Fire Emergency Response' },
  description: { en: 'How to respond to a fire emergency', sw: 'How to respond to a fire emergency' },
  image: 'https://placehold.co/800x400/DC2626/FFFFFF?text=Fire+Emergency',
  steps: [
    {
      instruction: { en: 'Alert everyone in the area by shouting "Fire!"', sw: 'Alert everyone in the area by shouting "Fire!"' },
      audioEnPath: '/audio/fire-emergency/step1_en.mp3',
      audioSwPath: '/audio/fire-emergency/step1_sw.mp3'
    },
    {
      instruction: { en: 'Call emergency services (0800 750 112) immediately', sw: 'Call emergency services (0800 750 112) immediately' },
      audioEnPath: '/audio/fire-emergency/step2_en.mp3',
      audioSwPath: '/audio/fire-emergency/step2_sw.mp3'
    },
    {
      instruction: { en: 'If the fire is small and contained, use a fire extinguisher', sw: 'If the fire is small and contained, use a fire extinguisher' },
      audioEnPath: '/audio/fire-emergency/step3_en.mp3',
      audioSwPath: '/audio/fire-emergency/step3_sw.mp3'
    },
    {
      instruction: { en: 'If the fire is large, evacuate immediately', sw: 'If the fire is large, evacuate immediately' }
    },
    {
      instruction: { en: 'Stay low to avoid smoke inhalation', sw: 'Stay low to avoid smoke inhalation' }
    },
    {
      instruction: { en: 'Feel doors before opening - if hot, find another exit', sw: 'Feel doors before opening - if hot, find another exit' }
    },
    {
      instruction: { en: 'Once outside, stay outside and wait for emergency services', sw: 'Once outside, stay outside and wait for emergency services' }
    }
  ],
  dangerWarnings: [
    { en: 'Do NOT use elevators during a fire', sw: 'Do NOT use elevators during a fire' },
    { en: 'Do NOT go back inside a burning building for any reason', sw: 'Do NOT go back inside a burning building for any reason' },
    { en: 'Do NOT hide in closets or under beds', sw: 'Do NOT hide in closets or under beds' },
    { en: 'Do NOT try to fight a large fire yourself', sw: 'Do NOT try to fight a large fire yourself' },
    { en: 'Do NOT break windows unless absolutely necessary for escape', sw: 'Do NOT break windows unless absolutely necessary for escape' }
  ],
  criticalSigns: [
    { en: 'Difficulty breathing or smoke inhalation', sw: 'Difficulty breathing or smoke inhalation' },
    { en: 'Loss of consciousness', sw: 'Loss of consciousness' },
    { en: 'Burns on skin - especially if severe', sw: 'Burns on skin - especially if severe' },
    { en: 'Signs of shock (pale, clammy skin)', sw: 'Signs of shock (pale, clammy skin)' },
    { en: 'Rapid spread of fire or smoke', sw: 'Rapid spread of fire or smoke' }
  ],
  additionalInfo: { en: 'Remember the acronym PASS when using a fire extinguisher: Pull the pin, Aim at the base of the fire, Squeeze the handle, Sweep from side to side.', sw: 'Remember the acronym PASS when using a fire extinguisher: Pull the pin, Aim at the base of the fire, Squeeze the handle, Sweep from side to side.' }
};

export default guide; 