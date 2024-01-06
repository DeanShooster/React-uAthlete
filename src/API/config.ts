import { ERROR_MSGS } from "../enum/errors";
import { STATUS_CODES } from "./statusCodes";

export const server = "http://localhost:8080";

/**
 * Generic error handler. Defined by server error configuration of { Message , status } for errors.
 * @param {Response} responseObject
 * @returns Error object {error , status} or the data object.
 */
export async function errorHandler(responseObject: Response) {
  const result = await responseObject.json();
  if (result.Message) return { error: result.error, status: result.status };
  return result;
}

export function errorObjectCreation(status: number) {
  switch (status) {
    case STATUS_CODES.noAuth:
      return { message: ERROR_MSGS.noAuth, status };
    default:
      return { message: ERROR_MSGS.GeneralError, status };
  }
}
