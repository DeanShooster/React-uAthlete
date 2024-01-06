import { errorHandler, server } from "./config";

const baseURL = "/News";

export async function GetNewsFeed() {
  const result = await fetch(`${server}${baseURL}`, {
    method: "GET",
  });
  return errorHandler(result);
}
