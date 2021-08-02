import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import * as S from './styles';

import Logo from '../../assets/logo.svg';

export const Dashboard = () => {
  return (
    <>
      <img src={Logo} alt="Logo do GitCollection" />
      <S.Title>Coleções de Repositorios do GIT</S.Title>

      <S.Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </S.Form>

      <S.Repos>
        <a href="/repositories">
          <img
            src="http://www.brazilusamagazine.com/wp-content/uploads/2018/06/maior_em_obras-e1529758442917.jpg"
            alt="Foto do Repositorio"
          />
          <div>
            <strong>NomeDoRepositorio/mini-curso-reactjs</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </S.Repos>
    </>
  );
};
