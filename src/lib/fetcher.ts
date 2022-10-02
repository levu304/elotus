class FetcherError extends Error {
  status: number | undefined;
  info: any | undefined;
}

const fetcher = async (
  url: string,
  requestInit = { method: "GET" }
): Promise<any> => {
  const res = await fetch(url, {
    ...requestInit,
  });

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new FetcherError("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default fetcher;
