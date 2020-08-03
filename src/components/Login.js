import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        textAlign: "center",
      }}
    >
      <h3>Connection</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <span>Adresse email</span>
        <input type="text" />
        <span>Mot de passe</span>
        <input type="text" />
        <button>Se connecter</button>
      </div>
      <button>Créer un compte</button>
    </div>
  );
};

export default Login;
