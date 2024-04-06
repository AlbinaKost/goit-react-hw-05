import MovieCastItem from "../MovieCastItem/MovieCastItem";
import css from './MovieCast.module.css';

const MovieCast = () => {
  return (
    <div>
      <ul className={css.castList}>
        <MovieCastItem />
      </ul>
    </div>
  )
}
const { movieId } = useParams();
useEffect(() => {
if (!movieId) return;
}, [movieId]);

export default MovieCast