import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/wrench-circle.svg';

const WrenchIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="wrench-circle" />;
};

export { WrenchIcon };
