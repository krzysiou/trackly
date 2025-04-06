'use client';

import React from 'react';
import Link from 'next/link';

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
          <Link
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
          </Link>
        </p>
      </div>
      <div className="logos">
        <Link
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
        </Link>
        <Link
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
        </Link>
      </div>
    </FooterStyled>
  );
};

export { Footer };
