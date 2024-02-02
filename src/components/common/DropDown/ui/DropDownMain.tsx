import React, { useState } from 'react';
import { DropDownContext } from '../module/DropDownStateContext';
import styled from 'styled-components';

interface IDropDown {
  children: React.ReactNode;
  selectedItem: number;
  setSelectedItem: (value: number) => void;
}

const DropDownMain = ({ children, selectedItem, setSelectedItem }: IDropDown) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(prev => !prev);

  return (
    <DropDownContext.Provider value={{ selectedItem, setSelectedItem, open, handleOpen }}>
      <DropDownContainer>{children}</DropDownContainer>
    </DropDownContext.Provider>
  );
};

const DropDownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export default DropDownMain;
