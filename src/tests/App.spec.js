import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

import App from '../App';

describe('Testes App', () => {
  it('Testa a página de Login: Validação dos campos e redirecionamento para a página Settings', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const nameInput = screen.getByPlaceholderText('Digite seu nome');
    const emailInput = screen.getByPlaceholderText('Digite seu email');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    const playButton = screen.getByRole('button', { name: 'Play' });
    expect(playButton).toBeDisabled();

    userEvent.type(nameInput, 'Teste');
    userEvent.type(emailInput, 'teste@email.com');
    expect(playButton).toBeEnabled();

    const settingsButton = screen.getByRole('button', { name: 'Configurações' });
    userEvent.click(settingsButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/settings');
  });
});