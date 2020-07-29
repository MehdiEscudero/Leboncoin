import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

import Layout from "./components/layout";

function App() {
  library.add(faPlus, faSearch, faUser);
  return <Layout />;
}

export default App;
