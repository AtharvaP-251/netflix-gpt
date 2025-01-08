import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";

const Browse = () => {
    useNowPlayingMovies();

    return (
        <div className=" bg-black">
            <Header />
            <MainComponent />
        </div>
    );
};

export default Browse;
