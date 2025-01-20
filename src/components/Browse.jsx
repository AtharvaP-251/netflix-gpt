import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch)
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            {showGptSearch ? (<GptSearch />) : (<><MainComponent /> <SecondaryComponent /></>)}
        </div>
    );
};

export default Browse;
