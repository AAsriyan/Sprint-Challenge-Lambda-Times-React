import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginText: ""
    };
  }

  changeHandler = e => {
    this.setState({ loginText: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.loginText);
    this.setState({ loginText: "" });
    window.location.reload();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            placeholder="Username"
            value={this.state.loginText}
            onChange={this.changeHandler}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
