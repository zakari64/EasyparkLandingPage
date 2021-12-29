import React from "react";
import login from "../styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <div className="backgroundz">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="formz">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Entrez user ..." id="username" />
        <label for="password">Password</label>
        <input type="password" placeholder="Entrez pwd ..." id="password" />
        <Link to="/HomePage">
          <button className="btn">Log In</button>
        </Link>
      </form>
    </section>
  );
}

export default Login;
