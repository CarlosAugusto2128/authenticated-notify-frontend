import React from 'react';
import { Link } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';
import { Container, AnimattedText } from './styles';

export default function Home() {
  function openTab() {
    window.open(
      'https://github.com/CarlosAugusto2128/authenticated-notify-frontend'
    );
  }

  return (
    <Container>
      <AnimattedText>
        <span>B</span>
        <span>e</span>
        <span>m</span>
        <span>-</span>
        <span>V</span>
        <span>i</span>
        <span>n</span>
        <span>d</span>
        <span>o</span>
      </AnimattedText>
      <Link to="#" onClick={openTab} target="_blank">
        <FaGithub size={35} />
        Link para o projeto!!
      </Link>
    </Container>
  );
}
