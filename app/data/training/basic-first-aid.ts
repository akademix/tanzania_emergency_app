import { TrainingData } from './index';

const training: TrainingData = {
  id: 'basic-first-aid',
  title: 'Basic First Aid',
  description: 'Learn the fundamentals of providing basic first aid in emergency situations',
  duration: 30,
  lessons: [
    {
      title: 'Introduction to First Aid',
      videoId: 'ea1RJUOiNfQ',
      description: 'Learn how to perform a primary survey - the first and most crucial step in providing first aid.'
    },
    {
      title: 'Assessing Emergency Situations',
      videoId: 'placeholder2',
      description: 'Learn how to quickly assess an emergency situation and determine the best course of action.'
    },
    {
      title: 'CPR Basics',
      videoId: 'placeholder3',
      description: 'An introduction to cardiopulmonary resuscitation (CPR) techniques and when to use them.'
    },
    {
      title: 'Treating Wounds and Bleeding',
      videoId: 'placeholder4',
      description: 'Learn how to clean and dress wounds, and control bleeding in emergency situations.'
    },
    {
      title: 'Handling Fractures and Sprains',
      videoId: 'placeholder5',
      description: 'Techniques for immobilizing and providing first aid for suspected fractures and sprains.'
    }
  ]
};

export default training; 