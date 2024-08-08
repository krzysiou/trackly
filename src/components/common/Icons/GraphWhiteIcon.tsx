import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/bar-chart-fill-white.svg';

const GraphWhiteIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="graph white" />;
};

export { GraphWhiteIcon };
