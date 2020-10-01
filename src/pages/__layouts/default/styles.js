import styled from 'styled-components';
import imageBackground from '../../../assets/Images/backgroundImage.jpg';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      -100deg,
      rgba(52, 58, 64, 0.7),
      rgba(73, 80, 87, 0.7)
    ),
    url(${imageBackground});
  background-size: cover;
`;
