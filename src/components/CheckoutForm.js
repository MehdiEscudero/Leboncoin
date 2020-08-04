import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import Cookies from "js-cookie";

const CheckoutForm = ({ amount, title }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // On récupère ici les données bancaires que l'utilisateur rentre
    const cardElement = elements.getElement(CardElement);
    // Demande de création d'un token via l'API Stripe
    // On envoie les données bancaires dans la requête
    const stripeResponse = await stripe.createToken(cardElement, {
      name: Cookies.get("user").id,
    });
    console.log(stripeResponse);
    const stripeToken = stripeResponse.token.id;
    // Une fois le token reçu depuis l'API Stripe
    // Requête vers notre serveur
    // On envoie le token reçu depuis l'API Stripe
    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/payment",
      {
        stripeToken,
        amount: amount,
        title: title,
      }
    );
    console.log(response.data);
    // Si la réponse du serveur est favorable, la transaction a eu lieu
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };
  return (
    <>
      {!completed ? (
        <form
          onSubmit={handleSubmit}
          style={{ width: 500, textAlign: "center" }}
        >
          <CardElement />
          <button
            style={{ width: "100%", marginTop: 10 }}
            className="bluebutton"
            type="submit"
          >
            Valider
          </button>
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </>
  );
};
export default CheckoutForm;
