import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movie.topRatedMovies)

    const getTopRatedMoviesLists = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            API_OPTIONS
        );

        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        !topRatedMovies && getTopRatedMoviesLists();
    }, []);
};

export default useTopRatedMovies;
