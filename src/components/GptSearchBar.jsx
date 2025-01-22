import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, BG_IMAGE } from "../utils/constants";
import lang from "../utils/constants"
import { OPENAI_KEY } from "../utils/constants";
import { useRef } from "react";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {

    const langKey = useSelector((store) => store?.config?.lang);
    const openai = OPENAI_KEY;
    const searchInput = useRef(null);
    const dispatch = useDispatch();

    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        return json.results;
    };

    const handleGptSearchResult = async () => {

        // const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
        //     searchInput.current.value +
        //     ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        // const gptSearchResult = await openai.chat.completions.create({
        //     model: "gpt-3.5-turbo",
        //     messages: [
        //         { role: "system", content: gptQuery },
        //     ],
        // });

        // console.log(gptSearchResult.choices[0].message);

        const result = ["Gadar", "Sholay", "Don", "Golmaal", "Koi Mil Gaya"];
        const promiseArray = result.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);

        console.log(tmdbResults);
        dispatch(addGptMovies({ movieNames: result, movieResults: tmdbResults }));
    }

    return (
        <div className="relative h-screen w-full">
            <img
                src={BG_IMAGE}
                alt="background img"
                className="absolute inset-0 w-full h-full object-cover -z-10 bg-gradient-to-t from-black"
            />
            <div className="relative flex justify-center" style={{ paddingTop: '13%' }}>
                <div className="grid grid-cols-12 gap-4 bg-gray-800 bg-opacity-75 p-6 rounded-lg">
                    <input
                        className="col-span-10 py-2 px-4 rounded-md text-white bg-gray-900 w-full"
                        type="text"
                        ref={searchInput}
                        placeholder={lang[langKey].gptSearchPlaceholder}
                    />
                    <button
                        className="col-span-2 py-2 px-4 rounded-md bg-red-700 text-white hover:bg-red-800"
                        onClick={handleGptSearchResult}
                    >
                        {lang[langKey].search}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GptSearchBar