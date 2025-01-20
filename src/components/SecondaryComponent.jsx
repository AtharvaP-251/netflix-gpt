import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useNowPopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryComponent = () => {
    const movies = useSelector((store) => store?.movie);
    useNowPopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return ({ movies } && (
        <div className="-my-56 z-10 bg-black">
            <div>
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
                <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
            </div>
        </div>)
    )
}

export default SecondaryComponent;