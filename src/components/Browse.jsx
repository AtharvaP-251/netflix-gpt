import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import useNowPopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
    useNowPlayingMovies();
    useNowPopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <div>
            <Header />
            <MainComponent />
            <SecondaryComponent />
        </div>
    );
};

export default Browse;
