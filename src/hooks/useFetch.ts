import { useTokenStore } from "@/store/auth-slice";

export const useFetch = () => {
  const token = useTokenStore((state) => state.token);

  const getAuthHeader = (url: string) => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (token && url.includes("blog")) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
  };

  const fetchData = async <T>(
    url: string,
    options?: RequestInit
  ): Promise<T> => {
    const res = await fetch(url, {
      headers: getAuthHeader(url),
      ...options,
    });
    const data = res.status !== 204 ? await res.json() : null;
    if (!res.ok) throw new Error(data?.error || "Request failed");
    return data;
  };

  return { fetchData };
};
