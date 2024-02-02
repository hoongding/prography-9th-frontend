import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDropDownState } from '../module/DropDownStateContext';

import { IconComponents } from '@components/common/Icon/IconComponents';
import { FONT_TOKEN } from '@styles/fonts';
import COLORS from '@styles/colors';

const DropDownButton = () => {
  const { open, handleOpen, selectedItem } = useDropDownState();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (buttonRef.current && svgRef.current) {
        if (
          !(buttonRef.current === e.target || buttonRef.current.contains(e.target as Node)) &&
          !(svgRef.current === e.target || svgRef.current.contains(e.target as Node))
        ) {
          handleOpen(false);
        }
      }
    };

    if (open) document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open]);

  return (
    <MainButton open={open} onClick={() => handleOpen(!open)} ref={buttonRef}>
      {selectedItem.label}
      {open ? (
        <IconComponents.up width={16} height={16} ref={svgRef} fill={COLORS.prographyRed} />
      ) : (
        <IconComponents.down width={16} height={16} ref={svgRef} />
      )}
    </MainButton>
  );
};

const MainButton = styled.button<{ open: boolean }>`
  ${FONT_TOKEN['Body2-14Md']}
  color: ${({ theme, open }) => (open ? `${theme.COLORS.prographyRed}` : `${theme.COLORS.black}`)};
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
