import { styled } from 'styled-components';

import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const ListStyled = styled.div`
  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 1.125rem;
      line-height: 1.75rem;
      margin: 1rem 0;
      margin-left: -0.3rem;

      ${mediaQuery['web']} {
        margin: 0.5rem 0;
      }

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;

export { ListStyled };
