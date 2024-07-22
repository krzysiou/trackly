import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const GalleryStyled = styled.div`
  .gallery-section {
    border-top: none;
    margin-top: 4rem;
  }

  .images {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    img {
      z-index: 5;
      width: 18rem;
      height: 11rem;
      margin: 1rem 0.5rem;
      border: 1px solid ${styleVariables.colors.charcoal};
      border-radius: 8px;

      ${mediaQuery['web']} {
        width: 40rem;
        height: 25rem;
        margin: 3rem;
      }
    }
  }

  .more-section {
    border-bottom: none;
    margin-bottom: 2rem;
  }
`;

export { GalleryStyled };
