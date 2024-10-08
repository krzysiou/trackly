import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/github.svg';

const GithubIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="github" />;
};

export { GithubIcon };
