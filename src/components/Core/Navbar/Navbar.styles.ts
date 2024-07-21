import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors } = styleVariables;

type NavbarStyledProps = {
  open: boolean;
};

const NavbarStyled = styled.div<NavbarStyledProps>`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: ${colors.oxfordBlue};
  border-bottom: 1px solid ${colors.charcoal};

  ${mediaQuery['web']} {
    height: 75px;
    justify-content: flex-start;
  }

  img:first-of-type {
    width: 120px;
    height: 50px;
    margin-left: 12px;

    ${mediaQuery['web']} {
      width: 180px;
      height: 75px;
      margin-left: 30px;
    }
  }

  .header-links {
    display: none;
    margin-left: 60px;

    ${mediaQuery['web']} {
      display: flex;
      width: auto;
      margin-right: 30px;
      gap: 64px;
    }

    .header-link {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      background-color: transparent;
      border: none;
      font-weight: 400;
      color: ${colors.white};
      border-bottom: 2px solid ${colors.oxfordBlue};
      text-decoration: none;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        color: ${colors.white};
        border-bottom: 2px solid ${colors.pictonBlue};
      }
    }
  }

  .menu-icon {
    display: block;
    border: none;
    background-color: transparent;

    ${mediaQuery['web']} {
      display: none;
    }

    > img {
      width: 25px;
    }
  }
`;

export { NavbarStyled };
