import React, { useState, useRef } from "react";
import Header from "./Header";
import { BG_IMAGE } from "../utils/constants";
import { validateData } from "../utils/Validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMsg, seterrMsg] = useState();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        const message = validateData(
            email.current.value,
            password.current.value
        );

        seterrMsg(message);

        if (message) return;

        if (!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                    })
                        .then(() => {
                            const { uid, email, displayName } =
                                auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                })
                            );
                        })
                        .catch((error) => {
                            seterrMsg(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errMsg = error.message;
                    seterrMsg(errorCode + "-" + errMsg);
                });
        } else {
            // Sign In Logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    //const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errMsg = error.message;
                    seterrMsg(errorCode + "-" + errMsg);
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={BG_IMAGE} alt="img" />
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full md:w-3/12 absolute p-4 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
            >
                <h3 className=" text-2xl py-1">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h3>

                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-2 my-4 w-full bg-gray-700"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-2 my-3 w-full bg-gray-700 rounded-sm"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-2 my-3 w-full bg-gray-700 rounded-sm"
                />
                <p className="text-red-500 text-sm py-2">{errMsg}</p>
                <button
                    className="p-2 my-4 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p
                    className="py-2 text-xs cursor-pointer"
                    onClick={toggleSignInForm}
                >
                    {isSignInForm
                        ? "New to Netflix? Sign Up Now"
                        : "Already registered? Sign In Now."}
                </p>
            </form>
        </div>
    );
};

export default Login;
