import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const getMovieList = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovieList(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovieList();
  }, []);

  console.log(movieList);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${movieList.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movieList.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              img_url={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
