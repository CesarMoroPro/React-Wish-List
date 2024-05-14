import React, { useState, createContext } from "react";

export const SignInOrSignUpContext = createContext(null);

export const SignInOrSignUpProvider = ({children}) => {
    const [isAlreadySignUp, setIsAlreadySignUp] = useState(true);

    const handleSignInSignUp = () => {
        setIsAlreadySignUp(prevState => !prevState);
    }

    return (
        <SignInOrSignUpContext.Provider value={{ isAlreadySignUp, setIsAlreadySignUp, handleSignInSignUp }}>
            {children}
        </SignInOrSignUpContext.Provider>
    );
};