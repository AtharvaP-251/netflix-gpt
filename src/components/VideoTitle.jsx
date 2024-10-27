import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-32 mx-10">
            <h1 className="text-xl">{title}</h1>
            <p className=" text-xs w-1/3 ">{overview}</p>
            <div className="p-2">
                <button className="bg-gray-300 px-5 py-1 rounded-sm m-1">
                    Play
                </button>
                <button className="bg-gray-400 px-5 py-1 rounded-sm opacity-40">
                    More info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
