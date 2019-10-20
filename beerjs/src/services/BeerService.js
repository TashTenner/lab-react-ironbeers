import axios from "axios";

class BeerService {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://ih-beer-api.herokuapp.com/beers"
    });
  }

  getBeerById(id) {
    return this.axios.get(`/${id}`).then(({ data: beer }) => beer);
  }

  getRandomBeer() {
    return this.axios.get("/random").then(({ data: beer }) => beer);
  }

  // createBeer(body) {
  //   return this.axios.post("/new-beer", body).then(({ data: beer }) => beer);
  // }
}

const beerService = new BeerService();

export default beerService;
