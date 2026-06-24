import { PrivateHeaders } from "../types";
import { getPublicHeaders } from "./getPublicHeaders";

interface GetPrivateHeadersOptions {
  url: string;
  authToken: string;
  buildNumber: string;
  userAgent?: string;
}

export const getPrivateHeaders = (
  options: GetPrivateHeadersOptions,
): PrivateHeaders => ({
  ...getPublicHeaders(options.url, options.buildNumber, options.userAgent),
  Authorization: options.authToken,
});
