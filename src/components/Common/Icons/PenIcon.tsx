import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/pen.svg';

const PenIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="pen" />;
};

export { PenIcon };
