import { errorHandler, server } from "./config";

const baseURL = "/Auth";

export async function Register(credentials: { [key: string]: string }) {
  const result = await fetch(`${server}${baseURL}/Register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return errorHandler(result);
}

export async function Login(credentials: { [key: string]: string }) {
  const result = await fetch(`${server}${baseURL}/Login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return errorHandler(result);
}
