import { styled } from 'styled-components';

import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';
import { styleVariables } from '../../../../public/styles/utils/styleVariables';

type SectioNStyledParams = {
  align: 'left' | 'right' | 'center';
};

const SectionStyled = styled.div<SectioNStyledParams>`
  width: 100%;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${styleVariables.colors.oxfordBlue};
    width: 100%;
    margin: 3rem 0;
    border-top: 1px solid ${styleVariables.colors.charcoal};
    border-bottom: 1px solid ${styleVariables.colors.charcoal};

    background: ${styleVariables.colors.oxfordBlue}70;
    box-shadow: 0 4px 30px #00000001;
    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);

    ${mediaQuery['web']} {
      margin: 5rem 0;
    }

    .section-wrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      margin: 4rem 1.5rem;

      align-items: ${(props) => {
        switch (props.align) {
          case 'left': {
            return 'flex-start';
          }
          case 'right': {
            return 'flex-end';
          }
          case 'center': {
            return 'center';
          }
        }
      }};

      ${mediaQuery['web']} {
        width: 60rem;
      }

      .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 90%;

        align-items: ${(props) => {
          switch (props.align) {
            case 'left': {
              return 'flex-start';
            }
            case 'right': {
              return 'flex-end';
            }
            case 'center': {
              return 'center';
            }
          }
        }};

        .section-image img {
          margin-bottom: 1.5rem;
          height: 4rem;
          width: 4rem;

          ${mediaQuery['web']} {
            margin-bottom: 2rem;
            height: 6rem;
            width: 6rem;
          }
        }

        h2 {
          color: ${styleVariables.colors.white};
          font-size: 1.5rem;
          font-weight: 800;
          line-height: 1.8rem;

          ${mediaQuery['web']} {
            font-size: 2em;
            line-height: 2.2rem;
          }
        }

        p {
          font-size: 1.125rem;
          line-height: 1.75rem;
          margin: 1.5rem 0;

          ${mediaQuery['web']} {
            margin: 3rem 0;
          }

          span {
            color: ${styleVariables.colors.pictonBlue};
          }
        }
      }
    }
  }
`;

export { SectionStyled };
