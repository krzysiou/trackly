import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/sad.svg';

const SadIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="sad" />;
};

export { SadIcon };
