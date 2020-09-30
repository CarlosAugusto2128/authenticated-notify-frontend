import { toast } from 'react-toastify';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { signFailure, signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    toast.success('Autenticado com sucesso!');
    history.push('/home');
  } catch (err) {
    yield put(signFailure());
    toast.error('Falha ao autenticar-se, verifique seus dados!');
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
    });

    toast.success('Cadastro realizado com sucesso!');
  } catch (err) {
    yield put(signFailure());
    toast.error('Falha ao se cadastrar, verifique os dados informados!!');
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
