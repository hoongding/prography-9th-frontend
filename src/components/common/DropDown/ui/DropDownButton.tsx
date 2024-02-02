import React from 'react';
import styled from 'styled-components';
import { useDropDownState } from '../module/DropDownStateContext';

const DropDownButton = () => {
  const { open, handleOpen, selectedItem } = useDropDownState();

  return (
    <MainButton open={open} onClick={handleOpen}>
      {selectedItem}
    </MainButton>
  );
};

const MainButton = styled.button<{ open: boolean }>`
  display: flex;
  border: ${({ theme, open }) => ('1.5px solid ' + open ? `${theme.COLORS.prographyRed}` : `${theme.COLORS.grey300}`)};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 12px;
  background-color: ${({ theme, open }) => (open ? theme.COLORS.red50 : theme.COLORS.white)};
`;

export default DropDownButton;
