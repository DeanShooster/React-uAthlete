import { errorHandler, errorObjectCreation, server } from "./config";
import { STATUS_CODES } from "./statusCodes";

const baseURL = "/Notifications";

export async function UpdateNotificationRead(token: string | null) {
  if (token) {
    const result = await fetch(`${server}${baseURL}/Read`, {
      method: "PATCH",
      headers: { token },
    });
    return errorHandler(result);
  } else return errorObjectCreation(STATUS_CODES.noAuth);
}
