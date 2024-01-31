import React from 'react';
import { useChipState } from '../modules/ChipStateContext';
import { IconComponents } from '@components/atom/Icon/IconComponents';
import COLORS from '@styles/colors';

const ChipIcon = () => {
  const { isSelected } = useChipState();

  return isSelected ? (
    <IconComponents.cancel width={16} height={16} fill={COLORS.prographyRed} />
  ) : (
    <IconComponents.plus width={16} height={16} />
  );
};

export default ChipIcon;
