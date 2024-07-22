import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/question-circle.svg';

const QuestionIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="question-circle" />;
};

export { QuestionIcon };
