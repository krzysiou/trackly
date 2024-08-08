import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/list-ul.svg';

const ListIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="list" />;
};

export { ListIcon };
