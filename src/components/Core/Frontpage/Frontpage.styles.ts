import { styled } from 'styled-components';

import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';
import { styleVariables } from '../../../../public/styles/utils/styleVariables';

const FrontpageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .hero-section {
    border-top: none;
    margin-top: 4rem;
  }

  .hero-container {
    h1 {
      color: ${styleVariables.colors.white};
      font-size: 2.25rem;
      font-weight: 800;
      line-height: 2.8rem;

      ${mediaQuery['web']} {
        font-size: 3.75rem;
        line-height: 4rem;
      }
    }
  }

  .documentation-section {
    margin-bottom: 2rem;
  }
`;

export { FrontpageStyled };
