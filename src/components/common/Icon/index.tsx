import React from 'react';

import { IconComponents } from './IconComponents';

interface IconProps {
  name: keyof typeof IconComponents;
  width?: number;
  height?: number;
  fill?: string;
  ref?: React.Ref<SVGSVGElement>;
}

const Icon = ({ name, width = 21, height = 21, fill = '#ffffff', ref }: IconProps) => {
  const IconComponent = IconComponents[name];

  return <IconComponent width={width} height={height} fill={fill} ref={ref} />;
};

export default Icon;
