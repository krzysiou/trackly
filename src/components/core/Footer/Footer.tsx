'use client';

import React from 'react';

import { GithubIcon } from '../../common/Icons/GithubIcon';
import { LinkedInIcon } from '../../common/Icons/LinkedInIcon';
import { LogoIcon } from '../../common/Icons/LogoIcon';
import { FooterStyled } from './Footer.styles';
import { tracker } from '../../../tracker';
import { useAuthorization } from '../../hooks/AuthorizationHook';

const githubLink = 'https://github.com/krzysiou';
const linkedInLink = 'https://www.linkedin.com/in/krzysztof-tluszcz';

const Footer: React.FC = () => {
  const { session } = useAuthorization();

  return (
    <FooterStyled>
      <LogoIcon />
      <div className="info">
        <p>
          You can find me on{' '}
          <a
            href={githubLink}
            onClick={() => {
              tracker.trackClickElement({
                actor: session?.userId || 'unknown',
                targetName: 'GitHub Link',
                targetPageType: 'Footer',
              });
            }}
          >
            GitHub
          </a>
        </p>
      </div>
      <div className="logos">
        <a
          href={githubLink}
          onClick={() => {
            tracker.trackClickElement({
              actor: session?.userId || 'unknown',
              targetName: 'GitHub Icon',
              targetPageType: 'Footer',
            });
          }}
        >
          <GithubIcon />
        </a>
        <a
          href={linkedInLink}
          onClick={() => {
            tracker.trackClickElement({
              actor: session?.userId || 'unknown',
              targetName: 'Linked In Icon',
              targetPageType: 'Footer',
            });
          }}
        >
          <LinkedInIcon />
        </a>
      </div>
    </FooterStyled>
  );
};

export { Footer };
