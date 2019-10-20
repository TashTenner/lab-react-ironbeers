import React, { Component } from "react";
import beerService from "../services/BeerService";

class BeerDetails extends Component {
  state = {
    beer: {}
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    try {
      const beer = await beerService.getBeerById(id);
      this.setState({
        beer
      });
    } catch (error) {}
  }

  render() {
    const { beer } = this.state;
    return (
      <div>
        <img src={beer.image_url} alt="beer" className="BeerAll-size"></img>
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    );
  }
}

export default BeerDetails;
