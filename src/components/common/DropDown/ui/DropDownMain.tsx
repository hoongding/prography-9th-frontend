import React from 'react';
import { DropDownContext } from '../module/DropDownStateContext';

interface IDropDown {
  children: React.ReactNode;
  onClick: () => void;
  selected: boolean;
  setSelected: (value: boolean) => void;
}

const DropDownMain = ({ children, onClick, selected, setSelected }: IDropDown) => {
  return <DropDownContext.Provider value={{ onClick }}>{children}</DropDownContext.Provider>;
};

export default DropDownMain;
