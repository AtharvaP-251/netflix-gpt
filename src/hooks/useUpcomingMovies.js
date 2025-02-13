import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);

    const getUpcomingMoviesLists = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
            API_OPTIONS
        );

        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
        !upcomingMovies && getUpcomingMoviesLists();
    }, []);
};

export default useUpcomingMovies;
