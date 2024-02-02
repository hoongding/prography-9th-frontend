import { FONT_TOKEN } from '@styles/fonts';
import React from 'react';
import styled from 'styled-components';
import { useDropDownState } from '../module/DropDownStateContext';

interface IDropDownMenuItem {
  value: number;
  label: string;
  divider?: boolean;
}

const DropDownMenuItem = ({ value, label, divider }: IDropDownMenuItem) => {
  const { setSelectedItem, handleOpen } = useDropDownState();

  const handleClick = () => {
    setSelectedItem(value);
    handleOpen(false);
  };

  return <MenuItemContainer onClick={handleClick}>{label}</MenuItemContainer>;
};

const MenuItemContainer = styled.button`
  ${FONT_TOKEN['Body2-14Md']}
  width: 100%;
  padding: 8px;
  background-color: white;
  text-align: left;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export default DropDownMenuItem;
