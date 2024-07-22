import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/trackly-full-logo.svg';

const FullLogoIcon: React.FC = () => {
  return <Image src={logo} width={120} height={40} alt="trackly-full-logo" />;
};

export { FullLogoIcon };
