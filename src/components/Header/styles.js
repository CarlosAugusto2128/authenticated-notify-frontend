import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 120px;
  margin: 0 auto;

  > img {
    height: 100%;
  }

  > nav {
    display: flex;
    align-items: center;

    > button {
      margin-left: 20px;
      position: relative;
      border: 0;
      color: #fff;
      background: transparent;

      &:hover > div {
        visibility: visible;
        opacity: 1;
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        padding: 8px;
        left: calc(50% - 75px);
        top: calc(100% + 30px);
        position: absolute;
        visibility: hidden;
        opacity: 0;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.7);
        transition: all 0.6s;

        &::before {
          content: '';
          width: 0;
          height: 0;
          top: -15px;
          left: calc(50% - 15px);
          position: absolute;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-bottom: 15px solid rgba(0, 0, 0, 0.7);
        }
      }
    }
  }
`;
