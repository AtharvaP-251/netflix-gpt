import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice"

export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movie.trailerVideo);

    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            movieId + "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();

        const filterData = json.results.filter(
            (video) => video.type == "Trailer"
        );

        const trailerVideo = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailerVideo));
    };

    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, []);
};
