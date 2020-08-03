import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";

import axios from "axios";
import Card from "../components/Card";
import { Link, useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/offer/" + id
    );

    setData(response.data);
    console.log(response.data);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <p style={{ backgroundColor: "red" }}>En cours de chargement</p>
      ) : (
        <Wrapper style={{ display: "flex", justifyContent: "center" }}>
          {data &&
            data.offer.map((value) => {
              return (
                <Link
                  to="/offer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card
                    key={value.id}
                    img={value.picture.url}
                    title={value.title}
                    price={value.price}
                    date={new Date(value.created).toLocaleDateString()}
                  />
                </Link>
              );
            })}
        </Wrapper>
      )} */}
      <span>Hello Brice</span>
    </>
  );
};

export default Offer;
