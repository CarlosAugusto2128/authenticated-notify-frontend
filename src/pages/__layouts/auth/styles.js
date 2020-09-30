import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #7159c1;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  height: 350px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);

  > form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    transition: all 0.4s;

    > h3 {
      margin-bottom: 20px;
      text-align: center;
      font-size: 22px;
    }

    > div {
      width: 100%;
      position: relative;
      margin-bottom: 20px;

      > input {
        width: 100%;
        height: 35px;
        padding: 19px 5px 0;
        border: 0;
        color: #fff;
        border-bottom: 1px solid #fff;
        background: transparent;

        &:focus ~ label {
          top: 2px;
          left: 1px;
          font-size: 12px;
          color: #999;
        }
      }

      > label {
        top: 15px;
        left: 5px;
        position: absolute;
        transition: all 0.4s;
      }
    }

    > button {
      height: 35px;
      margin-bottom: 20px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: #7159c1;
    }

    > a {
      color: #fff;
      font-size: 14px;
      text-align: center;
      transition: all 0.4s;

      &:hover {
        color: #999;
      }
    }
  }
`;
