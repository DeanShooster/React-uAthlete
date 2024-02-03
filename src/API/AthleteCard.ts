import { errorHandler, server, errorObjectCreation } from "./config";
import { STATUS_CODES } from "./statusCodes";

const baseURL = "/Athlete";

export async function GetMetaProData(token: string | null) {
  if (token) {
    const result = await fetch(`${server}${baseURL}/MetaProData`, {
      method: "GET",
      headers: { token },
    });
    return errorHandler(result);
  } else return errorObjectCreation(STATUS_CODES.noAuth);
}
