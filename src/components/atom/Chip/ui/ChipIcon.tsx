import React from 'react';
import { useChipState } from '../modules/ChipStateContext';
import { IconComponents } from '@components/atom/Icon/IconComponents';

const ChipIcon = () => {
  const { isSelected } = useChipState();

  return isSelected ? <IconComponents.cancel /> : <IconComponents.plus />;
};

export default ChipIcon;
