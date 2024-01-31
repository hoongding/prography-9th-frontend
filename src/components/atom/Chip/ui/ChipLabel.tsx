import React from 'react';
import styled from 'styled-components';
import { useChipState } from '../modules/ChipStateContext';
import { FONT_TOKEN } from '@styles/fonts';

interface IChipLabel {
  children: React.ReactNode;
  customTextColor?: string;
}

const ChipLabel = ({ children, customTextColor }: IChipLabel) => {
  const { isSelected } = useChipState();

  return (
    <Label customTextColor={customTextColor} isSelected={isSelected}>
      {children}
    </Label>
  );
};

const Label = styled.span<{ customTextColor?: string; isSelected: boolean }>`
  ${({ isSelected }) => (!isSelected ? FONT_TOKEN['Body1-16Md'] : FONT_TOKEN['Body1-16Bd'])};

  color: ${({ customTextColor, theme, isSelected }) =>
    customTextColor ? customTextColor : isSelected ? theme.COLORS.prographyRed : theme.COLORS.black};
`;

export default ChipLabel;
