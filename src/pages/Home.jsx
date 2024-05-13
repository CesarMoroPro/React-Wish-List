import React, { useState } from "react";

import HeaderHome from "../components/HeaderHome";
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";
import PopupConnexion from "../components/PopupConnexion";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

export const Home = () => {

    const [isAlreadySignUp, setisAlreadySignUp] = useState(true);
    const [showPopupConnexion, setShowPopupConnexion] = useState(false);

    const handleSignInSignUp = () => {
        setisAlreadySignUp(!isAlreadySignUp);
    }

    const handlePopupConnexion = () => {
        setShowPopupConnexion(true);
        
    }

    return (
        <div>
            <HeaderHome></HeaderHome>

            <div>
                {!showPopupConnexion && (
                    <div className="home-body">
                        <HomeBody 
                            propsIsAlreadySignUp={isAlreadySignUp}
                            propsShowPopupConnexion={showPopupConnexion}
                            propsHandleSignInSignUp={handleSignInSignUp}
                            propsHandlePopupConnexion={handlePopupConnexion}>
                        </HomeBody>
                    </div>
                )}

                {showPopupConnexion && (
                    <div className={showPopupConnexion ? "popupConnexion" : ""}>
                        <PopupConnexion propsIsAlreadySignUp={isAlreadySignUp}></PopupConnexion>
                    </div>
                )}

            </div>

            <Footer></Footer>
        </div>
    )
}

export default Home;