import { TMDB_IMG_URL } from "../utils/constants"

const MovieCard = ({ posterPath }) => {

    if (!posterPath)
        return null;

    return (
        <div className="w-32 py-2 pb-14 mx-1">
            <img src={TMDB_IMG_URL + posterPath} alt="movie poster" />
        </div>
    )
}

export default MovieCard;