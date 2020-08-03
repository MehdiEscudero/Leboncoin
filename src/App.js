import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Offer from "./containers/Offer";

import Offers from "./containers/Offers";
import Login from "./components/Login";
import Wrapper from "./components/Wrapper";
import Cookies from "js-cookie";

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
        <Route path="/login">
          <Wrapper>
            <Login login={() => setIsLogged(true)} />
          </Wrapper>
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
