import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;

    span {
      user-select: none;
      color: ${props => props.theme.tertiaryColor};
    }
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
    background: ${props => props.theme.tertiaryColor};

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const InfoContainer = styled.aside`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 30px;

  .alert {
    background: #fff7e0;
    border-radius: 5px;
    padding: 0 30px;
    flex: 1;
    height: 50px;
    display: flex;
    align-items: center;

    span {
      color: #c29100;
      font-size: 14px;
      font-weight: 500;
      user-select: none;
      text-decoration: underline;
    }
  }
`;

export const InfoDetail = styled.div`
  width: 410px;
  padding: 20px;
  max-height: 410px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.fourthColor};

  span {
    display: block;
    font-size: 14px;
    color: ${props => props.theme.colorText};

    & + span {
      margin-top: 20px;
    }
  }
`;
