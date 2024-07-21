'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { SignInStyled } from './SignIn.styles';
import { Section } from '../../Common/Section/Section';
import { Background } from '../../Common/Background/Background';
import { SignInIcon } from '../../Common/Icons/SignInIcon';
import { Button } from '../../Common/Button/Button';
import { DeleteIcon } from '../../Common/Icons/DeleteIcon';
import { useAuthorization } from '../../Hooks/AuthorizationHook';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>();

  const { signIn } = useAuthorization();

  const clear = (callback: React.Dispatch<React.SetStateAction<string>>) => (
    <button className="clear" onClick={() => callback('')}>
      <DeleteIcon />
    </button>
  );

  const errorComponent = error && (
    <p className="error-message">ERROR: {error}</p>
  );

  return (
    <SignInStyled>
      <Background />
      <Section name="signin" SectionImage={SignInIcon} align="left">
        <h2>Sign In</h2>
        {errorComponent}
        <div className="signin-inputs">
          <div className="input-container">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              tabIndex={1}
              required
            />
            {username && clear(setUsername)}
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              tabIndex={1}
              required
            />
            {password && clear(setPassword)}
          </div>
        </div>
        <p className="info">
          First time here?{' '}
          <Link href="/signup" className="link">
            Sign up instead
          </Link>
        </p>
        <Button
          label="Sign in"
          callback={() => signIn(setError, username, password)}
        />
      </Section>
    </SignInStyled>
  );
};

export { SignIn };
