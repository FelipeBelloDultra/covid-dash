import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    height: 45px;
    width: 300px;
    border: 1px solid #dce2e6;
    padding: 0 15px;
    border-radius: 5px;
    font-size: 14px;
    color: #000;
  }
`;

export const FilterContainer = styled.ul`
  display: flex;
  left: 0;
  border-radius: 5px;
  top: 45px;
  flex-direction: column;
  max-height: 190px;
  width: 300px;
  overflow-y: scroll;
  background: #fff;
  padding: 10px;
  border: 1px solid #dce2e6;
  position: absolute;
  z-index: 9999;

  li {
    margin: 0 -10px;
    position: relative;
    display: flex;
    align-items: center;

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

    button {
      display: flex;
      align-items: center;
      padding: 9px 10px;
      background-color: transparent;
      height: 100%;
      width: 100%;
      font-size: 14px;
      color: #617480;
      text-align: left;
    }
  }
`;
