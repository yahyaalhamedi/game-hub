import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d2f22bc202374a5f8433ddc0a40aaad1",
  },
});
