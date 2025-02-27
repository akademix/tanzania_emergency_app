import { useState, useEffect, useMemo } from 'react';

export function useCompletedSteps(moduleId, totalSteps) {
  const storageKey = `progress_${moduleId}`;
  
  // Initialize from localStorage if available
  const getInitialState = () => {
    if (typeof window === 'undefined') return [];
    
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  };
  
  const [completedSteps, setCompletedSteps] = useState(getInitialState);
  const [isReturning, setIsReturning] = useState(false);
  
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved && JSON.parse(saved).length > 0) {
      setIsReturning(true);
    }
  }, [storageKey]);
  
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completedSteps));
  }, [completedSteps, storageKey]);
  
  const toggleStep = (stepIndex) => {
    setCompletedSteps(prev => {
      if (prev.includes(stepIndex)) {
        return prev.filter(i => i !== stepIndex);
      } else {
        return [...prev, stepIndex];
      }
    });
  };
  
  // Memoize the progress calculation
  const progress = useMemo(() => 
    (completedSteps.length / totalSteps) * 100,
    [completedSteps.length, totalSteps]
  );
  
  return { completedSteps, toggleStep, progress, isReturning };
} 