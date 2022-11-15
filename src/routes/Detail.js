import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
  }, [id]);

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
