import { FONT_TOKEN } from '@styles/fonts';
import React from 'react';
import styled from 'styled-components';
import { useDropDownState } from '../module/DropDownStateContext';

interface IDropDownMenuItem {
  value: number;
  label: string;
}

const DropDownMenuItem = ({ value, label }: IDropDownMenuItem) => {
  const { setSelectedItem, handleOpen, selectedItem } = useDropDownState();

  const handleClick = () => {
    setSelectedItem(value);
    handleOpen(false);
  };

  return (
    <MenuItemContainer onClick={handleClick} currentValue={selectedItem.value} value={value}>
      {label}
    </MenuItemContainer>
  );
};

const MenuItemContainer = styled.button<{ currentValue: number; value: number }>`
  ${FONT_TOKEN['Body2-14Md']}
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ currentValue, value, theme }) =>
    currentValue === value ? theme.COLORS.red50 : theme.COLORS.white};
  text-align: left;
  color: ${({ currentValue, value, theme }) =>
    currentValue === value ? theme.COLORS.prographyRed : theme.COLORS.black};

  &:hover {
    background-color: ${({ currentValue, value, theme }) =>
      currentValue === value ? theme.COLORS.red50 : theme.COLORS.grey100};
  }
`;

export default DropDownMenuItem;
