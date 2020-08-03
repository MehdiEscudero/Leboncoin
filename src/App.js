import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Offer from "./containers/Offer";

import Offers from "./containers/Offers";

function App() {
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
      </Switch>
    </Router>
  );
}

export default App;
