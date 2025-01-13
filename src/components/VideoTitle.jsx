import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="my-80 mx-10 absolute text-white z-10">
            <h1 className="text-xl">{title}</h1>
            <p className=" text-xs w-1/3 ">{overview}</p>
            <div className="p-2">
                <button className="bg-gray-100 px-4 py-1 rounded-md m-1 text-black hover:bg-gray-300 ">
                    Play
                </button>
                <button className="bg-white mx-2 px-3 py-1 rounded-md opacity-50 text-black hover:bg-slate-400">
                    More info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
