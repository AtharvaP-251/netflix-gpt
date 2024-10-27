import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";

const Browse = () => {
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainComponent />
        </div>
    );
};

export default Browse;
