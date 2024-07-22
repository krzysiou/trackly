import { styled } from 'styled-components';

import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const BackgroundStyled = styled.div`
  position: fixed;
  top: 10rem;
  right: -1rem;
  margin: auto;

  ${mediaQuery['web']} {
    top: 6rem;
    right: 6rem;
  }

  img {
    width: 22rem;
    height: 22rem;

    ${mediaQuery['web']} {
      width: 40rem;
      height: 40rem;
    }
  }
`;

export { BackgroundStyled };
