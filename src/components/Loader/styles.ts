import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(97, 116, 128, 0.4);
  display: flex;
  overflow: hidden;
  opacity: 0;
  z-index: -1;

  img {
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.active {
    opacity: 1;
    z-index: 10000;

    img {
      display: block;
      user-select: none;
      pointer-events: none;
    }
  }
`;
