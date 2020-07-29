import React, { useEffect, useState } from "react";
import Container from "../container";
import NavBar from "../navbar";
import axios from "axios";
import Card from "../card";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

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
    <Router>
      <NavBar />
      <Container style={{ display: "flex", justifyContent: "center" }}>
        {offers &&
          offers.map((value) => {
            return (
              <Link
                to="/product"
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
      </Container>
      <Switch>
        <Route path="/product">
          <p>My product page</p>
        </Route>
      </Switch>
    </Router>
  );
};

export default Layout;
