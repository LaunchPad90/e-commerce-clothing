import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an accoutn</h2>
        <span>Sign in with email and password</span>

        <form>
          <input type="email" value={this.state.email} required />
          <label>Email</label>
          <input type="password" value={this.state.password} required />
          <label>Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
