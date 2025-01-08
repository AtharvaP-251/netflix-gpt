import React from "react";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

return <div className="relative w-screen overflow-hidden my-14" style={{ aspectRatio: '21/9' }}>
    <iframe
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[calc(100vw*(9/16))]"
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
      title="YouTube video player"
      allow="autoplay"
    ></iframe>
  </div>
  
};

export default VideoBackground;
