import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    const nowPlayingMoviesLists = useSelector((store) => store.movie.nowPlayingMovies)

    const getNowPlayingMoviesLists = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        !nowPlayingMoviesLists && getNowPlayingMoviesLists();
    }, []);
};

export default useNowPlayingMovies;
