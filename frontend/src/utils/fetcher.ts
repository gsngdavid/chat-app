import { URL } from "url";

export interface FetcherOptions<T> {
  options?: { method?: Method; body?: T };
}

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export default async function fetcher<T>(
  url: string,
  { options }: FetcherOptions<T>
) {
  const { method = "GET", body } = options ?? {};
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json"},
  });
  console.log("Method: ", method, "body: ", body);

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  if (response.status === 401) {
    localStorage.removeItem("token");
  }

  return data;
}
