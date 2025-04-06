'use client';

import React from 'react';

import { ButtonStyled } from './Button.styles';
import { tracker } from '../../../tracker';
import { useAuthorization } from '../../hooks/AuthorizationHook';

type ListParams = {
  Icon?: React.FC;
  label?: string;
  url?: string;
  callback?: () => void;
};

const Button: React.FC<ListParams> = ({ Icon, label, url, callback }) => {
  const { session } = useAuthorization();

  const linkButtonComponent = url && (
    <a href={url}>
      <button
        className="button"
        onClick={() =>
          tracker.trackClickElement({
            actor: session?.userId || 'unknown',
            targetName: label === 'Sign up' ? 'Sign Up Link' : 'Sign In Link',
            targetPageType: 'Frontpage',
          })
        }
      >
        {label || <Icon />}
      </button>
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
