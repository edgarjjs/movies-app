import { API_KEY } from "../key";

const getData = async (path, query) => {

  const url_base = 'https://api.themoviedb.org/3';

    const res = await fetch(
      `${url_base}${path}?api_key=${API_KEY}&language=es-MX${query && query}`
    );
    const data = await res.json();

    return data;
 };

export { getData };