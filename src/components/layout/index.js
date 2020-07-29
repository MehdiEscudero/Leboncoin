import React, { useEffect, useState } from "react";
import Container from "../container";
import NavBar from "../navbar";
import axios from "axios";
import Card from "../card";
const Layout = () => {
  const [offers, setOffers] = useState(null);
  useEffect(() => {
    if (!offers) {
      axios
        .get(
          "https://leboncoin-api.herokuapp.com/offer/with-count?page=1&limit=25"
        )
        .then((res) => {
          setOffers(res.data.offers);
        });
    }
    console.log(offers);
  });
  return (
    <>
      <NavBar />
      <Container style={{ display: "flex", justifyContent: "center" }}>
        {offers &&
          offers.map((value) => {
            return (
              <Card
                key={value.id}
                img={value.picture.url}
                title={value.title}
                price={value.price}
              />
            );
          })}
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
