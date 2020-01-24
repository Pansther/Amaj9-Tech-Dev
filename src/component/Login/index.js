import React from 'react';

import '../../css/loginStyle.css';

import { Link } from 'react-router-dom';

class Login extends React.Component {
  render () {
    return (
      <div className= "login-contain" id ="login-contain-id">
        <div className="contain">
          <div className = "contain-box">
            <div className="idgroup">
              <div className="idinput">
                <text id = "textID"> ID : </text>
              </div>
              <input type="text" name="ID" id = "id" maxlength="10"/>
            </div>

            <div className="pwdgroup">
              <div className="pwdinput">
                <text id = "textPassword"> Password : </text>
              </div>
              <div className="fgpwdgroup">
                <input type="text" name="password" id = "pwd" maxlength="10"/>
                <text id = "forgetpwd">Forgot password?</text>
              </div>

            </div>
            <div className="btgroup">
              <button className="bt" id = "bt1">Login</button>
              <button className="bt" id = "bt2">Sign-up</button>

            </div>
       </div>
      </div>
    </div>
  )
  }
}

export default Login;
