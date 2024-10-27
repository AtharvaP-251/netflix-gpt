import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
});

export default appStore;
