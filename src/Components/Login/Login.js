import React, { Fragment, Component } from "react";
import "./Login.css"

class Login extends Component {
  constructor(props) {
    super(props);

    //trang thai components login
    this.state = {
      username : "",
      password : ""
    }
  }

  //lay gia tri thay doi o username
  changeUsername = (e) => {
    this.setState({
      username : e.target.value
    })
    console.log(this.state.username);
  }

  //lay gia tri thay doi o password
  changePassword = (e) => {
    this.setState({
      password : e.target.value
    })
    console.log(this.state.password);
  }

  Confirm = () => {
    let userData = {
        username : this.state.username,
        password : this.state.password
    }
    console.log(userData);

    this.setState({
      username : "",
      password : ""
    })
  }

  render() {
    return (
      <div className="sum">
        <div className="left">
          <h1 id="a">
            Task
            <br />
            Manager
          </h1>
        </div>
        <div className="right">
          <form>
            <input
              id="input"
              type="text"
              name="username"
              placeholder="User name"
              onChange = {this.changeUsername}
            />
            <br />
            <br />
            <input
              id="input"
              type="password"
              name="password"
              placeholder="Password"
              onChange = {this.changePassword}
            />
            <br />
            <br />
            <br />
            <button id="btn" type="login" value="login" onClick = {this.Confirm}>
              LOGIN
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
