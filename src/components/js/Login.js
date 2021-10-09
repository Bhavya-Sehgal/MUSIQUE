import React from "react";
import "../css/Login.css";
import { loginUrl } from "../../spotify";

function Login() {
  return (
    <div className="login">
      <img src="/musique-logo.png" alt="" />
      <a href={loginUrl}>LOGIN VIA SPOTIFY</a>
    </div>
  );
}

export default Login;
