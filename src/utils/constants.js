import OpenAI from "openai";

export const LOGO =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_IMAGE =
    "https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
};

export const OPENAI_KEY = new OpenAI({
    apiKey: process.env.REACT_APP_OPEN_AI_KEY,
    dangerouslyAllowBrowser: true,
});

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
];

export const lang = {
    en: {
        search: "Search",
        gptSearchPlaceholder: "What would you like to watch today?",
    },
    hindi: {
        search: "खोज",
        gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
    },
    spanish: {
        search: "buscar",
        gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
    },
};

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500"
