import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { api } from 'services/api';

import * as S from './styles';

import Logo from '../../assets/logo.svg';

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const Dashboard = () => {
  const [repos, setRepos] = useState<GithubRepository[]>([]);
  const [newRepo, setNewRepo] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNewRepo(e.target.value);
  }

  async function handleAddRepo(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    const response = await api.get<GithubRepository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepos([...repos, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={Logo} alt="Logo do GitCollection" />
      <S.Title>Coleções de Repositorios do GIT</S.Title>

      <S.Form onSubmit={handleAddRepo}>
        <input
          placeholder="username/repository_name"
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </S.Form>

      <S.Repos>
        {repos.map(repository => (
          <a href="/repositories" key={repository.full_name}>
            <img
              src={repository.owner.avatar_url}
              alt={`Foto do repositorio ${repository.owner.login}`}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </S.Repos>
    </>
  );
};
