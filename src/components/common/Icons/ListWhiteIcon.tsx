import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/list-ul-white.svg';

const ListWhiteIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="list white" />;
};

export { ListWhiteIcon };
