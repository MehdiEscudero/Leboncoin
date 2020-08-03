import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Vous devez saisir des informations de connection valide");
    } else {
      try {
        const response = await axios.post(
          "https://leboncoin-api.herokuapp.com/user/log_in",
          {
            email: email,
            password: password,
          }
        );
        if (response.data.token) {
          Cookies.set("token", response.data.token);
          login();
          history.push("/");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
        <input onChange={(event) => setEmail(event.target.value)} type="text" />
        <span>Mot de passe</span>
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <button type="submit" style={{ marginTop: 20 }} className="bluebutton">
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
    </form>
  );
};

export default Login;
