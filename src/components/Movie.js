import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, img_url, title, summary, genres }) {
  return (
    <div>
      <div>
        <img src={img_url} alt={title} />
        <h2>
          <Link to={`movie/${id}`} state={{ id: id }}>
            {title}
          </Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g, index) => (
            <li key={index}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  img_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
