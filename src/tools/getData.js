import { API_KEY } from "../key";

const getData = async (path, query, append) => {
  const url_base = "https://api.themoviedb.org/3";

  const append_to = append ? `&${append}` : ''

  const res = await fetch(
    `${url_base}${path}?api_key=${API_KEY}${append_to}&language=es-MX${
      query && query
    }`
  );
  const data = await res.json();

  return data;
};

export { getData };
