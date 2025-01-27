import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const GptMovieSuggestion = () => {

    const movieNames = useSelector((store) => store.gpt.movieNames);
    const movieResults = useSelector((store) => store.gpt.movieResults);

    if (!movieNames) return null;
    if (!movieResults) return null;

    return (
        <div className="-my-80 px-4 m-4 bg-black text-white bg-opacity-80 rounded-xl">
            <div>
                <div className="">
                    {movieNames.map((movie, index) => <MovieList title={movie} movies={movieResults[index]} />)}
                </div>
            </div>
        </div>
    )
}

export default GptMovieSuggestion;