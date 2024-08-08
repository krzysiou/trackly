import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/bar-chart-fill.svg';

const GraphIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="graph" />;
};

export { GraphIcon };
