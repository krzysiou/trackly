'use client';

import React from 'react';
import Link from 'next/link';

import { FooterStyled } from './Footer.styles';
import { GithubIcon } from '../../Common/Icons/GithubIcon';
import { LinkedInIcon } from '../../Common/Icons/LinkedInIcon';
import { LogoIcon } from '../../Common/Icons/LogoIcon';

const githubLink = 'https://github.com/krzysiou';
const linkedInLink = 'https://www.linkedin.com/in/krzysztof-tluszcz';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <LogoIcon />
      <div className="info">
        <p>
          You can find me on <Link href={githubLink}>GitHub</Link>
        </p>
      </div>
      <div className="logos">
        <Link href={githubLink}>
          <GithubIcon />
        </Link>
        <Link href={linkedInLink}>
          <LinkedInIcon />
        </Link>
      </div>
    </FooterStyled>
  );
};

export { Footer };
