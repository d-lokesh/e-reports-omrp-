import http from "./httpService";

const url = "http://localhost:3001/auth";

export function login(email, password, ism) {
  return http.post(url, { email, password, ism });
}
