import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Offer from "./containers/Offer";

import Offers from "./containers/Offers";
import Login from "./components/Login";
import Cookies from "js-cookie";
import Signup from "./components/Signup";
import Payment from "./components/Payment";
import Publish from "./components/Publish";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogged(true);
    }
  });

  library.add(faPlus, faSearch, faUser);

  return (
    <Router>
      <Header
        isLogged={isLogged}
        logout={() => {
          setIsLogged(false);
          Cookies.remove("token");
        }}
      />
      <Switch>
        <Route path="/offers">
          <Offers />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/payment/:id">
          <Payment />
        </Route>
        <Route path="/publish">
          <Publish />
        </Route>
        <Route path="/login">
          <Login login={() => setIsLogged(true)} />
        </Route>
        <Route path="/signup">
          <Signup login={() => setIsLogged(true)} />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
