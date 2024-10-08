'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { SignInStyled } from './SignUp.styles';
import { Section } from '../../common/Section/Section';
import { Background } from '../../common/Background/Background';
import { Button } from '../../common/Button/Button';
import { DeleteIcon } from '../../common/Icons/DeleteIcon';
import { useAuthorization } from '../../hooks/AuthorizationHook';
import { PenIcon } from '../../common/Icons/PenIcon';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>();

  const { signUp } = useAuthorization();

  const clear = (callback: React.Dispatch<React.SetStateAction<string>>) => (
    <button className="clear" onClick={() => callback('')}>
      <DeleteIcon />
    </button>
  );

  const errorComponent = error && <p className="error-message">{error}</p>;

  return (
    <SignInStyled>
      <Background />
      <Section name="signup" SectionImage={PenIcon} align="left">
        <h2>Sign Up</h2>
        {errorComponent}
        <div className="signup-inputs">
          <div className="input-container">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              tabIndex={1}
              onKeyDown={(event) => {
                if (event.code === 'Enter') {
                  signUp(setError, username, password);
                }
              }}
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
              onKeyDown={(event) => {
                if (event.code === 'Enter') {
                  signUp(setError, username, password);
                }
              }}
              required
            />
            {password && clear(setPassword)}
          </div>
        </div>
        <p className="info">
          Already signed up?{' '}
          <Link href="/signin" className="link">
            Sign in instead
          </Link>
        </p>
        <Button
          label="Sign up"
          callback={() => signUp(setError, username, password)}
        />
      </Section>
    </SignInStyled>
  );
};

export { SignUp };
