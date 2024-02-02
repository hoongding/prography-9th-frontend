import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDropDownState } from '../module/DropDownStateContext';

import { IconComponents } from '@components/common/Icon/IconComponents';

const DropDownButton = () => {
  const { open, handleOpen, selectedItem } = useDropDownState();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        svgRef.current &&
        !svgRef.current.contains(e.target as Node)
      ) {
        handleOpen(false);
      }
    };

    if (open) document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open]);

  return (
    <MainButton open={open} onClick={() => handleOpen(!open)} ref={buttonRef}>
      {selectedItem}
      {open ? <IconComponents.up width={16} height={16} /> : <IconComponents.down width={16} height={16} />}
    </MainButton>
  );
};

const MainButton = styled.button<{ open: boolean }>`
  display: flex;
  border: 1.5px solid ${({ theme, open }) => (open ? `${theme.COLORS.prographyRed}` : `${theme.COLORS.grey300}`)};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 12px;
  background-color: ${({ theme, open }) => (open ? theme.COLORS.red50 : theme.COLORS.white)};
`;

export default DropDownButton;
