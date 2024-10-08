import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../../public/styles/utils/mediaQuery';

const { colors } = styleVariables;

const DropdownStyled = styled.div`
  ${mediaQuery['web']} {
    display: none;
  }

  .menu {
    position: absolute;
    top: 57px;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${colors.oxfordBlue};
    padding: 10px;
    border-bottom: 1px solid ${colors.charcoal};
    text-align: right;

    .menu-item {
      margin: 15px 0;

      .header-link {
        background-color: transparent;
        border: none;
        font-size: 16px;
        font-weight: 400;
        color: ${colors.white};
        border-bottom: 2px solid ${colors.oxfordBlue};
        text-decoration: none;
        transition: 0.2s;
      }
    }
  }
`;

export { DropdownStyled };
