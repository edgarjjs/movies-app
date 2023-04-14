import { Carrousel } from "../Carrousel/Carrousel";
import { Slider } from "../Slider/Slider";
import './home.css'

export const Home = ({ setProvider }) => {
  const watchProviderQuery =
    "&watch_region=MX&with_genres=10751|10759|35&with_watch_providers=";

  return (
    <>
      <Carrousel
        type="movie"
        title="Peliculas en trending hoy"
        path="/trending/movie/day"
      />
      <Carrousel
        type="tv"
        title="Series trending de la semana"
        path="/trending/tv/week"
      />

      <section className="main-sliders-container">
        <Slider
          type="tv"
          watchProvider="netflix"
          path="/discover/tv"
          query={`${watchProviderQuery}8`}
          setProvider={setProvider}
        />
        <Slider
          type="tv"
          watchProvider="disney"
          path="/discover/tv"
          query={`${watchProviderQuery}337`}
          setProvider={setProvider}
        />
        <Slider
          type="tv"
          watchProvider="hbo"
          path="/discover/tv"
          query={`${watchProviderQuery}384`}
          setProvider={setProvider}
        />
        <Slider
          type="tv"
          watchProvider="star"
          path="/discover/tv"
          query={`${watchProviderQuery}619`}
          setProvider={setProvider}
        />

        <Slider
          type="tv"
          watchProvider="paramount"
          path="/discover/tv"
          query={`${watchProviderQuery}531`}
          setProvider={setProvider}
        />
      </section>

      {/* <Fetch /> */}
    </>
  );
};
