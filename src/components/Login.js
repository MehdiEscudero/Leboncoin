import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        textAlign: "center",
        alignContent: "space-between",
      }}
    >
      <h3
        style={{
          borderBottom: "solid #f56b2b",
          paddingBottom: 5,
          borderWidth: 1.6,
        }}
      >
        Connection
      </h3>
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
        <button style={{ marginTop: 20 }} className="bluebutton">
          Se connecter
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <span>Vous n'avez pas de compte ?</span>
        <button style={{ marginTop: 20 }} className="transpbutton">
          Créer un compte
        </button>
      </div>
    </div>
  );
};

export default Login;
