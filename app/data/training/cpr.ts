import { TrainingData } from './index';

const training: TrainingData = {
  id: 'cpr',
  title: 'CPR Course',
  description: 'Comprehensive training on cardiopulmonary resuscitation techniques',
  duration: 45,
  lessons: [
    {
      title: 'Introduction to CPR',
      videoId: 'placeholder1',
      description: 'Understanding when and why CPR is needed, and the basic principles behind it.'
    },
    {
      title: 'Adult CPR Techniques',
      videoId: 'placeholder2',
      description: 'Step-by-step guide to performing CPR on adults, including compression techniques.'
    },
    {
      title: 'Child CPR Techniques',
      videoId: 'placeholder3',
      description: 'Modified techniques for performing CPR on children aged 1-8 years.'
    },
    {
      title: 'Infant CPR Techniques',
      videoId: 'placeholder4',
      description: 'Specialized techniques for performing CPR on infants under 1 year of age.'
    },
    {
      title: 'Using an AED',
      videoId: 'placeholder5',
      description: 'How to use an Automated External Defibrillator (AED) in conjunction with CPR.'
    },
    {
      title: 'Recovery Position',
      videoId: 'placeholder6',
      description: 'When and how to place someone in the recovery position after CPR.'
    },
    {
      title: 'Common CPR Mistakes',
      videoId: 'placeholder7',
      description: 'Common errors to avoid when performing CPR and how to ensure effectiveness.'
    }
  ]
};

export default training; 