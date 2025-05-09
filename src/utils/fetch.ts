export const objectToURLSearchParams = (object: object = {}): URLSearchParams =>
  Object.entries(object).reduce((params, [key, value]) => {
    if (value != null) params.append(key, value.toString());
    return params;
  }, new URLSearchParams());

export async function fetchWithHandling<T>(
  url: string | URL | globalThis.Request,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data: T = await response.json();

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network Error", error.message);
    } else {
      console.error(error);
    }
    throw error;
  }
}
