import React, {StrictMode} from "react"; 
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from "./components/Home.js";
import SiparisOlustur from "./components/SiparisOlustur.js";
import SiparisOnay from "./components/SiparisOnay.js"; 


const App = () => {
  return (
    <StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pizza" children={<SiparisOlustur />} />
          <Route path="/order" children={<SiparisOnay />} />
        </Switch>
      </Router>
    </StrictMode>
  );
};
export default App;