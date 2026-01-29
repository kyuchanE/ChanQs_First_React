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

// BFF 전용: Next.js 내부 API(`/api`)를 호출하기 위한 URL을 만든다.
export const resolveApiUrl = async (path: string): Promise<string> => {
  const baseUrl = await resolveApiBaseUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (baseUrl.startsWith("http")) {
    return new URL(
      normalizedPath,
      baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`,
    ).toString();
  }

  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto") ?? "http";
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host");

  if (!host) {
    return `${baseUrl}${normalizedPath}`;
  }

  const origin = `${protocol}://${host}`;
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  return new URL(`${normalizedBase}${normalizedPath}`, origin).toString();
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

  return new URL(normalizedPath, absoluteBase.endsWith("/") ? absoluteBase : `${absoluteBase}/`).toString();
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
