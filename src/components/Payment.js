import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Payment = () => {
  const [isLogged, setIsLogged] = useState(false);
  const { id } = useParams();
  const stripePromise = loadStripe(
    "pk_test_51HCXpIDXBKbBbGJ0lIVTzNhNrBPs1BQ6LAJaBtOgtGvd3TfgB8d2rdcbxdN7l6uQfNRKtO8N4wCzNvpZ3E7MLkBn00ZewUaYFB"
  );
  const history = useHistory();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/offer/" + id
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogged(true);
    } else {
      history.push("/login");
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>En cours de chargement</p>
      ) : (
        <Wrapper style={{ margin: 20 }}>
          <h5>Acheter en ligne</h5>
          <img style={{ maxWidth: 500 }} src={data.picture.url} alt="product" />
          <h5>{data.title}</h5>
          <h5 style={{ color: "#f56b2b" }}>{data.price} €</h5>
          <h6>Vos coordonnées bancaires</h6>
          <div style={{ display: "flex", marginBottom: 50, width: 500 }}>
            <Elements stripe={stripePromise} style={{ width: 500 }}>
              <CheckoutForm
                amount={data.price}
                title={data.title}
                style={{ width: 500 }}
              />
            </Elements>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Payment;
