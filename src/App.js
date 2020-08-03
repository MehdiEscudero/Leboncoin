import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Offer from "./containers/Offer";

import Offers from "./containers/Offers";
import Login from "./components/Login";
import Wrapper from "./components/Wrapper";

const App = () => {
  library.add(faPlus, faSearch, faUser);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/offers">
          <Offers />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/login">
          <Wrapper>
            <Login />
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
