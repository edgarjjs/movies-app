import { API_KEY } from "../../key";

const search = async (searchedWords) => {

  const get_id_certification = async (item) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${item.id}/release_dates?api_key=${API_KEY}`
    );
    const data = await res.json();
    const denied = data.results
      .map((e) => e.release_dates.filter((i) => i.certification != ""))
      .flat()
      .map((e) => e.certification)
      .map(
        (e) =>
          e == "R" ||
          e == "NC-17" ||
          e == "R18+" ||
          e == "X18+" ||
          e == "18" ||
          e == "R18" ||
          e == "K-18" ||
          e == "X" ||
          e == "R-18" ||
          e == "M/18" ||
          e == "P"
      )
      .includes(true)

      if(!denied) {
        return item
      }
  };

 if(searchedWords.length >= 1) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchedWords}&language=es`
    );
    const data = await res.json();
    const filter = await data.results.map((e) => get_id_certification(e))


    return Promise.all(filter)
      .then(e => e.filter(item => item))
      .then(result => result)
 }

};

export { search };
