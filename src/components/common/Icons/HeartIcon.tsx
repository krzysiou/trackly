import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/heart.svg';

const HeartIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="heart" />;
};

export { HeartIcon };
