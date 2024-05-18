import React from "react";
import { useState } from "react";

import { SignInOrSignUpProvider } from "../contexts/SignInOrSignUpContext";
import HeaderHome from "../components/HeaderHome";
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";
import PopupConnexion from "../components/PopupConnexion";

const Home = () => {

    // Définition de l'état d'affichage de la popup de connexion/inscription
    const [showPopupConnexion, setShowPopupConnexion] = useState(false);
    // Définition de la fonction qui ouvre la popup de connexion/inscription
    const handlePopupConnexion = () => {
        setShowPopupConnexion(true);
    }
    // Définition de la fonction qui ferme la popup de connexion/inscription
    const handleClosePopupConnexion = () => {
        setShowPopupConnexion(false);
    }

    // Le composant Home retourne :
    return (
        <div>
            <HeaderHome/>

            <SignInOrSignUpProvider>
                <div>
                    {!showPopupConnexion && (
                        <div className="home-body">
                            <HomeBody 
                                propsShowPopupConnexion={showPopupConnexion}
                                propsHandlePopupConnexion={handlePopupConnexion}>
                            </HomeBody>
                        </div>
                    )}

                    {showPopupConnexion && (
                        <div className={showPopupConnexion ? "popupConnexion" : ""}>
                            <PopupConnexion
                                propsHandleClosePopupConnexion={handleClosePopupConnexion}>
                            </PopupConnexion>
                        </div>
                    )}

                </div>
            </SignInOrSignUpProvider>
            

            <Footer></Footer>
        </div>
    )
};

export default Home;