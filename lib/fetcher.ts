type ApiFetcher = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: HeadersInit;
};

export const apiFetcher = async <T>({
  url,
  method,
  body,
  headers = {},
}: ApiFetcher): Promise<T> => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error("Fetcher error:", error);
    throw error;
  }
};
