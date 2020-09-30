import styled, { css } from 'styled-components';

export const FormSignIn = styled.form`
  ${(props) =>
    props.isVisibleSignIn
      ? css`
          visibility: visible;
          transform: translate(0px);
        `
      : css`
          visibility: hidden;
          transform: translate(-125%);
        `}
`;

export const FormSignUp = styled.form`
  ${(props) =>
    props.isVisibleSignIn
      ? css`
          visibility: hidden;
          transform: translate(-125%);
        `
      : css`
          visibility: visible;
          transform: translate(0px);
        `}
`;
