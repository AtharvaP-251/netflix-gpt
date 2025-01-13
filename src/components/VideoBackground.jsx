import React from "react";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  return (
    <div>
      <iframe
        className="-my-24 aspect-video w-screen"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="autoplay"
      ></iframe>
    </div >)
};

export default VideoBackground;
