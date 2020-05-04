/**
 * Used to read query parameters from the browser url.
 * @returns an Array containing a map of the parameters and the raw query string itself.
 */
export const getParams = (): [URLSearchParams, string] => {
  const queryString = window.location.search;
  return [new URLSearchParams(queryString), queryString];
};

export default getParams;
