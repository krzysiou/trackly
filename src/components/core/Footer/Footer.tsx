'use client';

import React from 'react';
import Link from 'next/link';

import { GithubIcon } from '../../common/Icons/GithubIcon';
import { LinkedInIcon } from '../../common/Icons/LinkedInIcon';
import { LogoIcon } from '../../common/Icons/LogoIcon';
import { FooterStyled } from './Footer.styles';

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
