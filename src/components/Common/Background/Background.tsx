'use client';

import React from 'react';

import { BackgroundStyled } from './Background.styles';
import { LogoIcon } from '../../Common/Icons/LogoIcon';

const Background: React.FC = () => {
  return (
    <BackgroundStyled>
      <LogoIcon />
    </BackgroundStyled>
  );
};

export { Background };
