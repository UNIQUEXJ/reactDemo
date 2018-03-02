import React, { Component } from 'react';
import './Login.css';
import { withRouter } from "react-router-dom";
import pattern from "../img/pattern.png";
import userIcon from "../img/user_icon.png";
import { post } from '../fetch/index'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUsername: '17621066625',
      loginPassword: '123456'
    };
    this.loginClick = this.loginClick.bind(this)
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  loginClick() {
    if (this.state.loginUsername == null || this.state.loginUsername === "" || this.state.loginPassword == null || this.state.loginPassword === "") {
    } else {
      var result = post('/commonapi/login', {
        username: this.state.loginUsername,
        password: this.state.loginPassword
      });
      result.then(res => {
        return res.json();
      }).then(json => {
        window.localStorage.setItem("sid", json.data.sid);
        this.props.history.push("/index");
      });
    }
  }
  changeUsername(event) {
    this.setState({loginUsername: event.target.value});
  }
  changePassword(event) {
    this.setState({loginPassword: event.target.value});
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="LJ-login-class">
        <div className="LJ-login-title">
          德宁矿矿车系统管理登录
        </div>
        <div className="LJ-login-input-content">
          <img src={pattern} alt=""/>
          <div className="LJ-login-form">
            <img src={userIcon} alt=""/>
            <div className="LJ-login-username">
              <i className="LJ-login-username-icon"></i>
              <input type="text" placeholder="请输入用户名" value={this.state.loginUsername} onChange={this.changeUsername}/>
            </div>
            <div className="LJ-login-password">
              <i className="LJ-login-password-icon"></i>
              <input type="password" placeholder="请输入密码" value={this.state.loginPassword} onChange={this.changePassword}/>
            </div>
            <button className="LJ-btn-login" onClick={this.loginClick}>登录</button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
// export default Login;