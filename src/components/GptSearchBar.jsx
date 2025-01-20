import { useSelector } from "react-redux";
import { BG_IMAGE } from "../utils/constants";
import lang from "../utils/constants"

const GptSearchBar = () => {

    const langKey = useSelector((store) => store?.config?.lang);
    return (
        <div className="relative h-screen w-full">
            <img src={BG_IMAGE} alt="background img" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative flex justify-center items-center h-full">
                <div className="grid grid-cols-12 gap-4 bg-gray-800 bg-opacity-75 p-6 rounded-lg">
                    <input
                        className="col-span-10 py-2 px-4 rounded-md text-white bg-gray-900 w-full"
                        type="text"
                        placeholder={lang[langKey].gptSearchPlaceholder}
                    />
                    <button className="col-span-2 py-2 px-4 rounded-md bg-red-700 text-white hover:bg-red-800">
                        {lang[langKey].search}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GptSearchBar