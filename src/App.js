import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./resources/css/ccc-styles.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import WhatsOn from "./Components/WhatsOn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/whatson">
            <WhatsOn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
