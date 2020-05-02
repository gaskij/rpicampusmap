export const getParams = (): Map<string, string> | null => {
  const params = new Map<string, string>();
  const url = window.location.toString();

  if (url.split('?').length === 1) return null;

  const queryString = url.split('?')[1];

  const queries = queryString.split('&');
  queries.forEach((query) => {
    const [key, value] = query.split('=');
    params.set(key, value);
  });

  return params;
};

export default getParams;
