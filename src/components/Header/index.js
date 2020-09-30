import React from 'react';

import { Container, Content } from './styles';

import Notification from '../Notification';

export default function Header() {
  return (
    <Container>
      <Content>
        <h3>NotifyAuth</h3>
        <Notification />
      </Content>
    </Container>
  );
}
