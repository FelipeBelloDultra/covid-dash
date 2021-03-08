import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #dce2e6;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;

  button {
    padding: 14px 20px;
    margin: 12px 0px;
    font-size: 14px;
    border-radius: 5px;
    font-weight: 500;
    color: #fff;
    background: ${props => props.theme.tertiaryColor};
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
