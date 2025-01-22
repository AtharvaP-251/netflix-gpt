import GptMovieSuggestion from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
};

export default GptSearch;