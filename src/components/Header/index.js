import React from 'react';
import { useDispatch } from 'react-redux';

import { MdPowerSettingsNew } from 'react-icons/md';
import { Container, Content } from './styles';

import Notification from '../Notification';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <h3>NotifyAuth</h3>
        <nav>
          <Notification />
          <button type="button" onClick={handleSignOut}>
            <MdPowerSettingsNew size={30} />
            <div>
              <span>Sair do Sistema</span>
            </div>
          </button>
        </nav>
      </Content>
    </Container>
  );
}
