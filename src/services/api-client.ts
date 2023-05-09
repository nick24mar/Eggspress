import axios, { CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "d3f58c31e44a4c1590186792e6077982",
  },
});

export { CanceledError };
