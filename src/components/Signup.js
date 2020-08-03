import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import Wrapper from "./Wrapper";

const Signup = ({ login }) => {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [cgu, setCgu] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !pseudo || !confirmPassword) {
      alert("Tous les champs du formulaire sont obligatoire");
    } else if (password !== confirmPassword) {
      alert("Vos mots de passe ne sont pas identique");
    } else if (!cgu) {
      alert("Vous devez accepter les CGU pour pouvoir poursuivre");
    } else {
      try {
        const response = await axios.post(
          "https://leboncoin-api.herokuapp.com/user/sign_up",
          {
            email: email,
            username: pseudo,
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
    <Wrapper>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
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
          Créer un compte
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span>Pseudo</span>
          <input
            onChange={(event) => setPseudo(event.target.value)}
            type="text"
          />
          <span style={{ marginTop: 10 }}>Adresse email</span>
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <div style={{ display: "flex", marginTop: 10 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: 5,
              }}
            >
              <span>Mot de passe</span>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Confirmation du mot de passe</span>
              <input
                onChange={(event) => setconfirmPassword(event.target.value)}
                type="password"
              />
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 15 }}>
            <input
              style={{
                boxShadow: "0px 0px 0px 1px #f56b2b",
              }}
              type="checkbox"
              value={cgu}
              onChange={() => setCgu(!cgu)}
            />
            <span style={{ marginLeft: 15 }}>
              J'accepte les conditions générales de ventes
            </span>
          </div>
          <button
            type="submit"
            style={{ marginTop: 20, marginBottom: 10 }}
            className="bluebutton"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Signup;
