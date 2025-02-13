import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPopularMovies = async () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movie.popularMovies)

    const getPopularMoviesLists = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            API_OPTIONS
        );

        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        !popularMovies && getPopularMoviesLists();
    }, []);
};

export default useNowPopularMovies;
