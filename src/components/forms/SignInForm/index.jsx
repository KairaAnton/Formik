import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignInForm extends Component {
  state = {
    email: '',
    password: '',
    login: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handlerChange = (event) => {
      const {target:{name,value}} = event;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password, login } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={email}
          name="email"
          onChange={this.handlerChange}
          type="text"
        />
        <input
          value={password}
          onChange={this.handlerChange}
          name="password"
          type="password"
        />
        <input
          value={login}
          onChange={this.handlerChange}
          name="login"
          type="text"
        />
        <input type="submit" />
      </form>
    );
  }
}

SignInForm.propTypes = {};

export default SignInForm;
