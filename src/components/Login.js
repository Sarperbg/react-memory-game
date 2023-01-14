import React from "react";
import "../style/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="App">
      <div className="login-page-header">
        <h1 className="header-text">MEMORY GAMES</h1>
      </div>

      <div className="login-page-content">
         <Link to="SettingsPage" onClick={(event) => {}} className='btn-login' >
            <button className="btn-settings">SETTINGS</button>
          </Link>

          <Link to="GameBoardPage" onClick={(event) => {}} className='btn-login'>
            <button className="btn-start">START</button>
          </Link>
      </div>
    </div>
  );
};

export default Login;
