import React from 'react';

import '../../css/loginStyle.css';

import closeBt from '../../img/login/close-button.svg' ;

import {
  Link,
  BrowserRouter,
  Switch,
 } from 'react-router-dom';


class Login extends React.Component {
  render () {
    return (
      <div className= "login-contain" id ="login-contain-id">
        <div className="contain">
        <div className="boxClose">
        <img onClick ={()=>closeLogin()} src={closeBt} alt="close-button" id ="closeBt"/>
        </div>
          <div className = "contain-box">
            <div className="idgroup">
              <div className="idinput">
                <text id = "textID"> ID : </text>
              </div>
              <input type="text" name="ID" id = "id" maxLength="10"/>
            </div>

            <div className="pwdgroup">
              <div className="pwdinput">
                <text id = "textPassword"> Password : </text>
              </div>
              <div className="fgpwdgroup">
<<<<<<< HEAD
                <input type="text" name="password" id = "pwd" maxLength="10"/>
=======
                <input type ="password" name="password" id = "pwd" maxlength="10"/>
>>>>>>> aae5073860c77d4655ae49cec5668b0b4edb69ef
                <text id = "forgetpwd">Forgot password?</text>
              </div>

            </div>
            <div className="btgroup">
              <button className="bt" id = "bt1">Login</button>

              <Link to = "/register">
              <button onClick ={()=>closeLogin()} className="bt" id = "bt2">Sign-up</button>

              </Link>

            </div>
       </div>
      </div>
    </div>
  )
  }
}
const closeLogin = ()=>{
  let closeButton = document.getElementById("login-contain-id")
  closeButton.style.opacity = "0";
  closeButton.style.visibility = "hidden";
  console.log(closeButton);
}
export default Login;
