import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/signin.svg';

const SignInIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="sign-in" />;
};

export { SignInIcon };
