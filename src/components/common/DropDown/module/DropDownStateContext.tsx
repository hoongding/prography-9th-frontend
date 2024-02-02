import React, { createContext } from 'react';

export interface IDropDownContext {
  children?: React.ReactNode;
  onClick: () => void;
}

export const DropDownContext = createContext<IDropDownContext | null>(null);

export const useDropDownState = () => {
  const context = React.useContext(DropDownContext);

  if (!context) {
    throw new Error('useDropDownState must be used within a DropDownProvider');
  }

  return context;
};
