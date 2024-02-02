import React from 'react';
import styled from 'styled-components';
import { useDropDownState } from '../module/DropDownStateContext';

interface IDropDownMenus {
  children: React.ReactNode;
}

const DropDownMenus = ({ children }: IDropDownMenus) => {
  const { open } = useDropDownState();

  return <MenuContainer open={open}>{children}</MenuContainer>;
};

const MenuContainer = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: absolute;
  z-index: 1;
  top: 100%;
  width: 100%;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  gap: 2px;
`;

export default DropDownMenus;
