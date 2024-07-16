'use client';

import { createGlobalStyle } from 'styled-components';

import { styleVariables } from './utils/styleVariables';

const { colors } = styleVariables;

const Globals = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${colors.cadetGray};
    background-color: ${colors.abyssBlue};
  }
`;

export { Globals };
