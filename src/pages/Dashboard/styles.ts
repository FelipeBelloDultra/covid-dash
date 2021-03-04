import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 20px 20px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 420px;

  button {
    width: 100px;
    font-size: 14px;
    border-radius: 5px;
    top: 45px;
    font-weight: 500;
    color: #fff;
    background: #617480;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
