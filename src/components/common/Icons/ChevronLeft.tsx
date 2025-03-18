import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/chevron-left.svg';

const ChevronLeft: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="chevron-left" />;
};

export { ChevronLeft };
