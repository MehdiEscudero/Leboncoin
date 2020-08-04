import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";

import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Offers = ({ searchOffer }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/offer/with-count"
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
        <p>En cours de chargement</p>
      ) : (
        <Wrapper style={{ display: "flex", justifyContent: "center" }}>
          {data &&
            data.offers
              .filter((value) => {
                if (searchOffer) {
                  return value.title
                    .toLowerCase()
                    .includes(searchOffer.toLowerCase());
                } else {
                  return value;
                }
              })
              .map((value) => {
                return (
                  <Link
                    key={"link-" + value._id}
                    to={"/offer/" + value._id}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Card
                      key={"product-" + value._id}
                      img={value.picture.url}
                      title={value.title}
                      price={value.price}
                      date={new Date(value.created).toLocaleDateString()}
                    />
                  </Link>
                );
              })}
        </Wrapper>
      )}
    </>
  );
};

export default Offers;
