import styled from 'styled-components';

export const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
`;

export const ContentPage = styled.div`
  flex: 1;
  padding: 30px;
  transition: transform 0.5s;
  height: 100%;
  width: 100%;
`;
