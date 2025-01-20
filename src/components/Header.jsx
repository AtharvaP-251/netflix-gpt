import React, { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    const handleToggleGptView = () => {
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <div className="flex justify-end">
            <div className="absolute w-full px-4 py-3 bg-gradient-to-b from-black z-10">
                <img className="w-28" src={LOGO} alt="logo" />
            </div>
            {user && (
                <>
                    {showGptSearch && <select className="absolute z-20 bg-red-700 my-6 px-2 py-1 text-xs mx-48 rounded-sm"
                        onClick={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}
                    </select>}
                    <button
                        className="bg-red-700 my-6 mx-28 px-2 py-1 rounded-sm absolute z-10 hover:bg-red-800 text-xs"
                        onClick={handleToggleGptView}>
                        {showGptSearch ? "Home" : "GPT Search"}
                    </button>
                    <button
                        className="bg-red-700 m-6 px-2 py-1 rounded-sm absolute z-10 hover:bg-red-800 text-xs"
                        onClick={handleLogOut}>
                        Log Out
                    </button>
                </>
            )
            }
        </div >
    );
}

export default Header;
