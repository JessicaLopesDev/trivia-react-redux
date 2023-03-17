import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    name: '',
    email: '',
    isDisabled: true,
  };

  handleLoginValidation = () => {
    const { name, email } = this.state;

    const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    const minLength = 1;
    const nameValidation = name.length < minLength;

    this.setState({
      isDisabled: !emailValidation || nameValidation,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.handleLoginValidation());
  };

  render() {
    const { name, email, isDisabled } = this.state;

    return (
      <form>
        <h1>Trivia</h1>
        <label htmlFor="input-player-name">
          Nome
          <input
            type="text"
            id="input-player-name"
            data-testid="input-player-name"
            placeholder="Digite seu nome"
            name="name"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-gravatar-email">
          Email
        </label>
        <input
          data-testid="input-gravatar-email"
          id="input-gravatar-email"
          type="email"
          placeholder="Digite seu email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <button
          data-testid="btn-play"
          disabled={ isDisabled }
        >
          Play
        </button>
      </form>
    );
  }
}
