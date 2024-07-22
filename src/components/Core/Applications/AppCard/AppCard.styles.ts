import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../../public/styles/utils/mediaQuery';

const AppCardStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  padding: 2rem;
  margin: 1rem;
  background: ${styleVariables.colors.oxfordBlue}70;
  box-shadow: 0 4px 30px #00000001;
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid ${styleVariables.colors.charcoal};
  border-radius: 8px;
  transition: 0.1s;
  cursor: pointer;
  text-align: left;

  img {
    margin-right: 1rem;
  }

  ${mediaQuery['web']} {
    width: 25rem;
    margin: 2rem;
  }

  &:hover {
    border: 1px solid ${styleVariables.colors.pictonBlue};
  }

  .info {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    .card-header {
      color: ${styleVariables.colors.white};

      .app-name {
        font-size: 24px;
        margin-bottom: 1rem;
      }

      .id-info {
        font-size: 14px;
      }
    }

    .creation-date {
      font-size: 11px;
      color: ${styleVariables.colors.cadetGray};

      ${mediaQuery['web']} {
        font-size: 14px;
      }
    }
  }
`;

export { AppCardStyled };
