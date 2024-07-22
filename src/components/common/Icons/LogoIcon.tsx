import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/trackly-logo.svg';

const LogoIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="trackly-logo" />;
};

export { LogoIcon };
