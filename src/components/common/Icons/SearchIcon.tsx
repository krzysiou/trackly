import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/search.svg';

interface SearchIconProps {
  width?: number;
  height?: number;
}

const SearchIcon: React.FC<SearchIconProps> = ({ width = 40, height = 40 }) => {
  return <Image src={logo} width={width} height={height} alt="application" />;
};

export { SearchIcon };
