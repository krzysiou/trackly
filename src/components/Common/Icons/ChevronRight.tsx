import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/chevron-right.svg';

const ChevronRight: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="chevron-right" />;
};

export { ChevronRight };
