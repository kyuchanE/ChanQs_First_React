import axios, { AxiosInstance } from "axios";

const normalizeUrl = (url: string): string => {
  if (url === "/") {
    return "";
  }
  return url.endsWith("/")
    ? url.slice(0, -1)
    : url;
};

export const resolveExternalApiUrl = (path: string): string => {
  const baseUrl = process.env.EXTERNAL_API_BASE_URL ?? "";

  if (!baseUrl) {
    throw new Error("EXTERNAL_API_BASE_URL is not defined.");
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const normalizedBase = normalizeUrl(baseUrl);
  const absoluteBase = normalizedBase.startsWith("http")
    ? normalizedBase
    : normalizedBase.startsWith("/")
      ? normalizedBase
      : `https://${normalizedBase}`;

  return new URL(
    normalizedPath,
    absoluteBase.endsWith("/") ? absoluteBase : `${absoluteBase}/`,
  ).toString();
};

export const createAxiosClient = async (): Promise<AxiosInstance> => {
  const baseURL = resolveExternalApiUrl("/");
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10_000,
  });
};
