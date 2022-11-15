import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState([]);

  //const { id } = useParams();
  const location = useLocation();
  const movie_id = location.state?.id;

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`
      )
    ).json();
    console.log(json);
    setMovie(json.data.movie);
  }, [movie_id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div
      style={{
        backgroundImage: `url(${movie.background_image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <div style={{ padding: "50px" }}>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.description_full}</p>
      </div>
    </div>
  );
}

export default Detail;
