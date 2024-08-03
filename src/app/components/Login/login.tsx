import React from "react";
import styles from "./login.module.css";

const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
    <p>faça o seu login para acessar:</p>
    <button className={styles.loginButton}>login</button>
  </div>
  );
};

export default Login;
