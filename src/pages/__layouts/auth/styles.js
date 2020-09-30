import styled from 'styled-components';
import imageBackground from '../../../assets/Images/backgroundImage2.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      -200deg,
      rgba(26, 188, 156, 0.7),
      rgba(231, 76, 60, 0.5)
    ),
    url(${imageBackground});
  background-size: cover;
  /* background: #7159c1; */
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  width: 100%;
  height: 400px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 70px;
  border-bottom-right-radius: 70px;
  border: 10px inset #fff;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: saturate(100%) blur(10px);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  > form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    transition: all 0.6s;

    > h3 {
      margin-bottom: 20px;
      text-align: center;
      font-size: 30px;
      text-transform: uppercase;
      letter-spacing: 2px;
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

        &:focus ~ label,
        &:not(:placeholder-shown) ~ label {
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
        pointer-events: none;
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
