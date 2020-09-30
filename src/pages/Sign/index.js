import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FormSignIn, FormSignUp } from './styles';

import { signInRequest, signUpRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const [emailSignIn, setEmailSignIn] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');
  const [nameSignUp, setNameSignUp] = useState('');
  const [emailSignUp, setEmailSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');
  const [isVisibleSignIn, setIsVisibleSignIn] = useState(true);
  const dispatch = useDispatch();

  async function handleVisibleSignIn() {
    setIsVisibleSignIn(!isVisibleSignIn);
  }

  async function handleSubmitSignIn(e) {
    e.preventDefault();

    dispatch(signInRequest(emailSignIn, passwordSignIn));
  }

  async function handleSubmitSignUp(e) {
    e.preventDefault();

    try {
      dispatch(signUpRequest(nameSignUp, emailSignUp, passwordSignUp));
    } catch (err) {
      return err;
    } finally {
      setIsVisibleSignIn(!isVisibleSignIn);
      setEmailSignUp('');
      setNameSignUp('');
      setPasswordSignUp('');
    }
  }

  return (
    <>
      <FormSignIn
        onSubmit={handleSubmitSignIn}
        isVisibleSignIn={isVisibleSignIn}
      >
        <h3>Autenticar-se</h3>
        <div>
          <input
            type="email"
            placeholder=" "
            onChange={(e) => setEmailSignIn(e.target.value)}
            value={emailSignIn}
          />
          <label htmlFor="">E-mail:</label>
        </div>
        <div>
          <input
            type="password"
            placeholder=" "
            onChange={(e) => setPasswordSignIn(e.target.value)}
            value={passwordSignIn}
          />
          <label htmlFor="">Senha:</label>
        </div>
        <button type="submit">Acessar</button>
        <Link to="#" onClick={handleVisibleSignIn}>
          Não possui cadastro? Cadastra-se!!
        </Link>
      </FormSignIn>
      <FormSignUp
        onSubmit={handleSubmitSignUp}
        isVisibleSignIn={isVisibleSignIn}
      >
        <h3>Cadastrar-se</h3>
        <div>
          <input
            type="text"
            placeholder=" "
            onChange={(e) => setNameSignUp(e.target.value)}
            value={nameSignUp}
          />
          <label htmlFor="">Name:</label>
        </div>
        <div>
          <input
            type="email"
            placeholder=" "
            onChange={(e) => setEmailSignUp(e.target.value)}
            value={emailSignUp}
          />
          <label htmlFor="">E-mail:</label>
        </div>
        <div>
          <input
            type="password"
            placeholder=" "
            onChange={(e) => setPasswordSignUp(e.target.value)}
            value={passwordSignUp}
          />
          <label htmlFor="">Senha:</label>
        </div>
        <button type="submit">Acessar</button>
        <Link to="#" onClick={handleVisibleSignIn}>
          Já possui uma conta? Autenticar-se!!
        </Link>
      </FormSignUp>
    </>
  );
}
