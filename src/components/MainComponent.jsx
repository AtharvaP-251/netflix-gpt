import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainComponent = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovies);

    if (!movies) return;
    const mainMovie = movies[0];

    const { title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainComponent;
