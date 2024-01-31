import React from 'react';
import styled from 'styled-components';
import { ChipContext } from '../modules/ChipStateContext';

interface IChipMain {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
}

const ChipMain = ({ children, onClick, isSelected }: IChipMain) => {
  return (
    <ChipContext.Provider value={{ onClick, isSelected }}>
      <ChipButton isSelected={isSelected} onClick={onClick}>
        {children}
      </ChipButton>
    </ChipContext.Provider>
  );
};

const ChipButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme.COLORS.prographyRed : theme.COLORS.grey200)};
  border-radius: 8px;
  padding: 8px 10px;
`;

export default ChipMain;
