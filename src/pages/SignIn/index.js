import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FormSignIn, FormSignUp } from './styles';

export default function SignIn() {
  const [isVisibleSignIn, setIsVisibleSignIn] = useState(true);

  async function handleVisibleSignIn() {
    setIsVisibleSignIn(!isVisibleSignIn);
  }

  return (
    <>
      <FormSignIn isVisibleSignIn={isVisibleSignIn}>
        <h3>Autenticar-se</h3>
        <div>
          <input type="email" placeholder=" " />
          <label htmlFor="">E-mail:</label>
        </div>
        <div>
          <input type="password" placeholder=" " />
          <label htmlFor="">Senha:</label>
        </div>
        <button type="submit">Acessar</button>
        <Link to="#" onClick={handleVisibleSignIn}>
          Não possui cadastro? Cadastra-se!!
        </Link>
      </FormSignIn>
      <FormSignUp isVisibleSignIn={isVisibleSignIn}>
        <h3>Cadastrar-se</h3>
        <div>
          <input type="text" placeholder=" " />
          <label htmlFor="">Name:</label>
        </div>
        <div>
          <input type="email" placeholder=" " />
          <label htmlFor="">E-mail:</label>
        </div>
        <div>
          <input type="password" placeholder=" " />
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
