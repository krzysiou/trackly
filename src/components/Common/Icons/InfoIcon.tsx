import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/info-circle.svg';

const InfoIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="info-circle" />;
};

export { InfoIcon };
