import styled, { css } from 'styled-components';

interface ContainerProps {
  isClose: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 235px;
  height: 100%;
  background-color: #dedede;
  border-right: 1px solid #dce2e6;
  transition: margin 0.5s;

  ${props =>
    props.isClose &&
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
      color: #617480;
      text-decoration: none;
      font-weight: 700;
      position: relative;
      font-size: 18px;
      transition: all 0.2s;

      &:before {
        content: '';
        height: 0;
        width: 0;
        background-color: unset;
        left: 0;
        position: absolute;
        transition: all 0.2s;
      }

      &:hover {
        &:before {
          width: 5px;
          height: 100%;
          background-color: #617480;
        }
      }

      &.nav-is-active {
        background-color: #e5e5e5;

        &:before {
          width: 5px;
          height: 100%;
          background-color: #617480;
        }
      }
    }
  }
`;
