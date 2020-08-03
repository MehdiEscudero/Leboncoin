import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";

import axios from "axios";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();

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
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p style={{ backgroundColor: "red" }}>En cours de chargement</p>
      ) : (
        <Wrapper style={{ margin: 20 }}>
          <h5>Acheter en ligne</h5>
          <img style={{ maxWidth: 500 }} src={data.picture.url} alt="product" />
          <h5>{data.title}</h5>
          <h5 style={{ color: "#f56b2b" }}>{data.price} €</h5>
          <h6>Vos coordonnées bancaires</h6>
          <div style={{ display: "flex", marginBottom: 50 }}>
            <input type="text" placeholder="numéro de carte"></input>
            <input type="text" placeholder="MM/YY"></input>
            <input type="text" placeholder="CVV"></input>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Payment;
