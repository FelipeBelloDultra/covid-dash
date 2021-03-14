import styled from 'styled-components';

export const ContainerGraph = styled.div`
  position: relative;
  width: 410px;
  height: 410px;
  padding: 10px;
  margin-right: 0;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.fourthColor};

  @media (max-width: 1130px) {
    height: auto;
    width: 100%;
  }
`;
