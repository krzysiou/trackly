import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/search.svg';

const SearchIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="application" />;
};

export { SearchIcon };
