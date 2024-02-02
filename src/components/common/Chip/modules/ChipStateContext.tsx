import React, { createContext, useContext } from 'react';

interface IChipContext {
  onClick: () => void;
  children?: React.ReactNode;
  isSelected: boolean;
}

export const ChipContext = createContext<IChipContext | null>(null);

export const useChipState = () => {
  const context = useContext(ChipContext);

  if (!context) {
    throw new Error('useChipState must be used within a ChipProvider');
  }

  return context;
};
