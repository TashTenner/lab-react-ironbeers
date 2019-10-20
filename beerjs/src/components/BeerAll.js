import React, { Component } from "react";
import axios from "axios";
import "./BeerAll.css";
import { Link } from "react-router-dom";

class BeerAll extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    return (
      <div className="BeerAll">
        {this.state.beers.map(beer => (
          <div>
            <img src={beer.image_url} alt="beer" className="BeerAll-size"></img>
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <button>
              <Link to={`/beers/${beer._id}`}>More details</Link>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default BeerAll;
