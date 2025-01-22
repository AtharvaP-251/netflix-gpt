import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const GptMovieSuggestion = () => {

    const movieNames = useSelector((store) => store.gpt.movieNames);
    const movieResults = useSelector((store) => store.gpt.movieResults);

    if (!movieNames) return null;
    if (!movieResults) return null;

    return (
        <div className="-my-60 z-10 bg-black">
            <div className="pt-3">
                {movieNames.map((movie, index) => <MovieList title={movie} movies={movieResults[index]} />)}
            </div>
        </div>
    )
}

export default GptMovieSuggestion;