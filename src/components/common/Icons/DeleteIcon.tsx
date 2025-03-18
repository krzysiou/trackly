import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/delete.svg';

interface DeleteIconProps {
  width?: number;
  height?: number;
}

const DeleteIcon: React.FC<DeleteIconProps> = ({ width = 40, height = 40 }) => {
  return <Image src={logo} width={width} height={height} alt="delete" />;
};

export { DeleteIcon };
