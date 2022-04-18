import axios from "axios";

export const api = axios.create({
  baseURL: "http://api.imersaofx.danieldcs.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer Z3VpbGhlcm1ldDIxM0BnbWFpbC5jb20=",
  },
});
