'use client';

import React from 'react';

import { ButtonStyled } from './Button.styles';

type ListParams = {
  label: string;
  url?: string;
  callback?: () => void;
};

const Button: React.FC<ListParams> = ({ label, url, callback }) => {
  const linkButtonComponent = url && (
    <a href={url}>
      <button className="button">{label}</button>
    </a>
  );

  const callbackButtonComponent = callback && (
    <button className="button" onClick={callback}>
      {label}
    </button>
  );

  return (
    <ButtonStyled>
      {linkButtonComponent || callbackButtonComponent}
    </ButtonStyled>
  );
};

export { Button };
