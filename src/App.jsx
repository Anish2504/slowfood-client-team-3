<<<<<<< HEAD
import React from "react";
import DisplayProductData from '.components/DisplayProductData';

const App = () => {
  return (
    <>
      <h1 id="menu-header">Menu</h1>
      <div id="index"><DisplayProductData/></div>
    </>
  );
=======
import React, { Component } from "react";
import { authenticate } from "./modules/auth";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    renderLoginForm: false,
    authenticated: false,
    message: ""
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;

    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p id="message">{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p id="message">
            Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}
          </p>
        );
    }

    return <>{renderLogin}</>;
  }
>>>>>>> bc8a0cba5ff93ad28af83238246ce12deb2f9730
}

export default App;