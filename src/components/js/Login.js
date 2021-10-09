import React from "react";
import "../css/Login.css";
import { loginUrl } from "../../spotify";
import IMG_PLACEHOLDER from "../../Images/musique-logo.png";

function Login() {
  return (
    <div className="login">
      <img src={IMG_PLACEHOLDER} alt="" />
      <a href={loginUrl}>LOGIN VIA SPOTIFY</a>
    </div>
  );
}

export default Login;
