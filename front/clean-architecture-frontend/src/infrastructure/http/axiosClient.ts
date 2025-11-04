import axios, { AxiosInstance } from "axios";
import { headers } from "next/headers";

const DEFAULT_API_PATH = "/api";

const normalizeUrl = (url: string): string => {
  if (url === "/") {
    return "";
  }
  return url.endsWith("/")
    ? url.slice(0, -1)
    : url;
};

const ensureApiPath = (baseUrl: string): string => {
  if (!baseUrl) {
    return DEFAULT_API_PATH;
  }
  const normalized = normalizeUrl(baseUrl);
  if (normalized.endsWith(DEFAULT_API_PATH)) {
    return normalized;
  }
  return `${normalized}${DEFAULT_API_PATH}`;
};

const resolveFromHeaders = async (): Promise<string | null> => {
  try {
    const headersList = await headers();
    const protocol = headersList.get("x-forwarded-proto") ?? "http";
    const host =
      headersList.get("x-forwarded-host") ?? headersList.get("host");

    if (!host) {
      return null;
    }

    return `${protocol}://${host}${DEFAULT_API_PATH}`;
  } catch {
    return null;
  }
};

export const resolveApiBaseUrl = async (): Promise<string> => {
  const envUrl =
    process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

  if (envUrl) {
    const normalized = normalizeUrl(envUrl);
    if (normalized.startsWith("http")) {
      return ensureApiPath(normalized);
    }

    if (normalized.startsWith("/")) {
      return ensureApiPath(normalized);
    }

    // Assume relative path without leading slash should be treated as absolute host.
    return ensureApiPath(`https://${normalized}`);
  }

  if (typeof window !== "undefined") {
    return DEFAULT_API_PATH;
  }

  const headerUrl = await resolveFromHeaders();
  return headerUrl ?? DEFAULT_API_PATH;
};

export const createAxiosClient = async (): Promise<AxiosInstance> => {
  const baseURL = await resolveApiBaseUrl();
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10_000,
  });
};
