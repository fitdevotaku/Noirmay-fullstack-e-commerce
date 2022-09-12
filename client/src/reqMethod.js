import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTMwYmNjYmU0NGIxOTJhNTAwNjFiYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjc2ODc2MSwiZXhwIjoxNjYzNjMyNzYxfQ.9KZPrFc8kwyl2uo3O4Jl5JgcqfOPNAiqhIeMfR4YZts";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
