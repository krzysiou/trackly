import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/image.svg';

const ImageIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="image" />;
};

export { ImageIcon };
