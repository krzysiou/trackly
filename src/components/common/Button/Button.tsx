'use client';

import React from 'react';

import { ButtonStyled } from './Button.styles';

type ListParams = {
  Icon?: React.FC;
  label?: string;
  url?: string;
  callback?: () => void;
};

const Button: React.FC<ListParams> = ({ Icon, label, url, callback }) => {
  const linkButtonComponent = url && (
    <a href={url}>
      <button className="button">{label || <Icon />}</button>
    </a>
  );

  const callbackButtonComponent = callback && (
    <button className="button" onClick={callback}>
      {label || <Icon />}
    </button>
  );

  return (
    <ButtonStyled>
      {linkButtonComponent || callbackButtonComponent}
    </ButtonStyled>
  );
};

export { Button };
