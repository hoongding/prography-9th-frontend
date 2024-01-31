import React, { createContext, useContext } from 'react';

interface ChipContextType {
  onClick: () => void;
  children?: React.ReactNode;
  isSelected: boolean;
}

export const ChipContext = createContext<ChipContextType | null>(null);

export const useChipState = () => {
  const context = useContext(ChipContext);

  if (!context) {
    throw new Error('useChipState must be used within a ChipProvider');
  }

  return context;
};
