import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BeerAll from "./components/BeerAll";
import BeerDetails from "./components/BeerDetails";
import BeerRandom from "./components/BeerRandom";
import BeerNew from "./components/BeerNew";

import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={BeerAll} />
          <Route exact path="/beers/:id" component={BeerDetails} />
          <Route exact path="/random-beer" component={BeerRandom} />
          <Route exact path="/new-beer" component={BeerNew} />
        </Switch>
      </div>
    );
  }
}

export default App;
