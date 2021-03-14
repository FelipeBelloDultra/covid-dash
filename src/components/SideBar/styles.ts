import styled, { css } from 'styled-components';

interface ContainerProps {
  isClose: boolean;
  isMobile: boolean;
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 235px;
  height: 100%;
  background-color: ${props => props.theme.secondaryColor};
  border-right: 1px solid ${props => props.theme.fourthColor};
  transition: all 0.5s;

  ${props =>
    props.isClose &&
    !props.isMobile &&
    css`
      margin-left: -180px;

      button {
        transform: rotate(-180deg);
      }

      ul li a {
        opacity: 0;
        padding-right: 0;
        margin-right: 55px;

        &.nav-is-active {
          background-color: unset;
        }
      }
    `}

  ${props =>
    props.isMobile &&
    css`
        position: fixed;
        top: 0;
        z-index: 10000;
        left: -235px;
      }
    `}

  ${props =>
    props.open &&
    css`
        left: 0;
        box-shadow: 4px 4px 13px -3px rgba(0,0,0,0.6);
      }
    `}
`;

export const ButtonToggleSideBar = styled.div`
  padding: 10px;

  button {
    transition: transform 0.5s;
    display: block;
    width: 35px;
    height: 35px;
    background-color: transparent;
    border: 0;
    margin-left: auto;
  }
`;

export const ListSideBar = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    margin-bottom: 10px;

    a {
      padding: 7px 45px 7px 20px;
      margin: 0 10px;
      display: flex;
      align-items: center;
      color: ${props => props.theme.tertiaryColor};
      text-decoration: none;
      font-weight: 700;
      position: relative;
      font-size: 18px;

      &:before {
        content: '';
        height: 0;
        width: 0;
        background-color: unset;
        left: 0;
        position: absolute;
      }

      &:hover {
        &:before {
          width: 5px;
          height: 100%;
          background-color: ${props => props.theme.tertiaryColor};
        }
      }

      &.nav-is-active {
        background-color: ${props => props.theme.primaryColor};

        &:before {
          width: 5px;
          height: 100%;
          background-color: ${props => props.theme.tertiaryColor};
        }
      }
    }
  }
`;
