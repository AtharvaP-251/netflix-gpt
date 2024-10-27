import { useEffect } from "react";
import React from "react";
import { API_OPTIONS } from "../utils/constants";

export const useMovieTrailer = ({ movieId }) => {
    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
                movieId +
                "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json;

        const filterData = json.results.filter(
            (video) => video.type === "Trailer"
        );

        const trailerVideo = filterData[0];
        console.log(trailerVideo);
    };

    useEffect(() => {
        getMovieVideos();
    }, []);
};
