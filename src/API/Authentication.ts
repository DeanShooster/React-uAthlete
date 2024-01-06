import { errorHandler, server, errorObjectCreation } from "./config";
import { STATUS_CODES } from "./statusCodes";

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

export async function IsAuth(token: string | null) {
  if (token) {
    const result = await fetch(`${server}${baseURL}/Validation`, {
      method: "GET",
      headers: { token },
    });
    return errorHandler(result);
  } else return errorObjectCreation(STATUS_CODES.noAuth);
}
