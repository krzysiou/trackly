import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/window-stack.svg';

const ApplicationsIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="applications" />;
};

export { ApplicationsIcon };
