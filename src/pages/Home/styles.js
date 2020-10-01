import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: calc(100vh - 120px);

  > a {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #f5f5f5;
    right: 10px;
    bottom: 10px;
    position: absolute;

    & > svg {
      margin-right: 4px;
    }
  }
`;

export const AnimattedText = styled.div`
  margin-bottom: 6em;
  position: relative;
  -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));

  & > span {
    display: inline-block;
    position: relative;
    color: #f5f5f5;
    font-size: 4em;
    text-transform: uppercase;
    animation: animatedText 1s ease-in-out infinite;

    &:nth-of-type(1) {
      animation-delay: calc(0.1s * 1);
    }
    &:nth-of-type(2) {
      animation-delay: calc(0.1s * 2);
    }
    &:nth-of-type(3) {
      animation-delay: calc(0.1s * 3);
    }
    &:nth-of-type(4) {
      animation-delay: calc(0.1s * 4);
    }
    &:nth-of-type(5) {
      animation-delay: calc(0.1s * 5);
    }
    &:nth-of-type(6) {
      animation-delay: calc(0.1s * 6);
    }
    &:nth-of-type(7) {
      animation-delay: calc(0.1s * 7);
    }
    &:nth-of-type(8) {
      animation-delay: calc(0.1s * 8);
    }
    &:nth-of-type(9) {
      animation-delay: calc(0.1s * 9);
    }
  }

  @keyframes animatedText {
    0% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(-20px);
    }
    40%,
    100% {
      transform: translateY(0px);
    }
  }
`;
