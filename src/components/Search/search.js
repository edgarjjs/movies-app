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

// let prueba = {
//   "id": 615777,
//   "results": [
//       {
//           "iso_3166_1": "ZA",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "HU",
//           "release_dates": [
//               {
//                   "certification": "18",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "TR",
//           "release_dates": [
//               {
//                   "certification": "18+",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "SG",
//           "release_dates": [
//               {
//                   "certification": "R21",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "MX",
//           "release_dates": [
//               {
//                   "certification": "C",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "HK",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-02-02T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "DK",
//           "release_dates": [
//               {
//                   "certification": "15",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "PL",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "UA",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "FI",
//           "release_dates": [
//               {
//                   "certification": "K-16",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "SE",
//           "release_dates": [
//               {
//                   "certification": "15",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-27T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "EC",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "NZ",
//           "release_dates": [
//               {
//                   "certification": "R18",
//                   "descriptors": [],
//                   "iso_639_1": "en",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "CZ",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "KR",
//           "release_dates": [
//               {
//                   "certification": "18",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-02-01T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "TH",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "DE",
//           "release_dates": [
//               {
//                   "certification": "16",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "BR",
//           "release_dates": [
//               {
//                   "certification": "18",
//                   "descriptors": [
//                       "Drugs",
//                       "Violence",
//                       "Sexual Content"
//                   ],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "CH",
//           "release_dates": [
//               {
//                   "certification": "16",
//                   "descriptors": [],
//                   "iso_639_1": "fr",
//                   "note": "",
//                   "release_date": "2023-01-18T00:00:00.000Z",
//                   "type": 3
//               },
//               {
//                   "certification": "16",
//                   "descriptors": [],
//                   "iso_639_1": "de",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "GR",
//           "release_dates": [
//               {
//                   "certification": "K18",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "FR",
//           "release_dates": [
//               {
//                   "certification": "TP",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-18T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "LT",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "PR",
//           "release_dates": [
//               {
//                   "certification": "PG-13",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2022-12-22T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "NL",
//           "release_dates": [
//               {
//                   "certification": "16",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "TW",
//           "release_dates": [
//               {
//                   "certification": "6+",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "US",
//           "release_dates": [
//               {
//                   "certification": "R",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "Los Angeles, California",
//                   "release_date": "2022-12-15T00:00:00.000Z",
//                   "type": 1
//               },
//               {
//                   "certification": "R",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2022-12-23T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "BG",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "AU",
//           "release_dates": [
//               {
//                   "certification": "MA 15+",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "IS",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "BE",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-18T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "AR",
//           "release_dates": [
//               {
//                   "certification": "+16",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "NO",
//           "release_dates": [
//               {
//                   "certification": "15",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "SK",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-05T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "PE",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "LV",
//           "release_dates": [
//               {
//                   "certification": "16+",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "EG",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "PT",
//           "release_dates": [
//               {
//                   "certification": "M/16",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "CA",
//           "release_dates": [
//               {
//                   "certification": "18A",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2022-12-23T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "IT",
//           "release_dates": [
//               {
//                   "certification": "6+",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-19T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "JP",
//           "release_dates": [
//               {
//                   "certification": "",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-02-10T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "ES",
//           "release_dates": [
//               {
//                   "certification": "16",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-27T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "IE",
//           "release_dates": [
//               {
//                   "certification": "18",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       },
//       {
//           "iso_3166_1": "GB",
//           "release_dates": [
//               {
//                   "certification": "18",
//                   "descriptors": [],
//                   "iso_639_1": "",
//                   "note": "",
//                   "release_date": "2023-01-20T00:00:00.000Z",
//                   "type": 3
//               }
//           ]
//       }
//   ]
// }
