import { API_KEY } from "../../key"

const filterAlert = async (id) => {

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${API_KEY}`
    )
    const data = await response.json()
  
    const result = await data.results.map(e => e.release_dates.filter(i => i.certification != ''))
      .flat()
      .map(e => e.certification)
      .map(e => e == 'R' || e == 'NC-17' || e == 'R18+' || e == 'X18+' || e == '18' || e == 'R18' || e == 'K-18' || e == 'X' || e == 'R-18' || e == 'M/18' || e == 'P')
      .includes(true)
      return result

}

export { filterAlert }