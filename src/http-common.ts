import axios from "axios";

export default axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1dc16ec5b23648aa968caf240b21f3b7",
  headers: {
    "Content-type": "application/json"
  }
});