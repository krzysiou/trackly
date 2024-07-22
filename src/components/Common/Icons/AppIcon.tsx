import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/app.svg';

const AppIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="application" />;
};

export { AppIcon };
