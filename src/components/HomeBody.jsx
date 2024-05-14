import React, { useContext} from "react";
import { SignInOrSignUpContext } from "../contexts/SignInOrSignUpContext";

export const HomeBody = ({
    // Récupération des props qui permettent d'afficher ou masquer la popup connexion/inscription
    propsShowPopupConnexion,
    propsHandlePopupConnexion}) => {

    // Récupération des données du context SignInOrSignUpContext
    const { isAlreadySignUp, handleSignInSignUp } = useContext(SignInOrSignUpContext);
    // Vérification de la fonction handleSignInSignUp
    // console.log("handleSignInSignUp : ", handleSignInSignUp);

    // Le composant HomeBody retourne :
    return (
        <div>
            <button 
                onClick={propsHandlePopupConnexion}
                disabled={propsShowPopupConnexion}>
                    {isAlreadySignUp ? "Se connecter" : "S'inscrire"}
            </button>
            <p 
                style={{textDecoration: "underline", color: "red", cursor: "pointer"}}
                onClick={() => handleSignInSignUp()}>
                        {isAlreadySignUp ? "Je n'ai pas encore de compte" : "J'ai déjà un compte"}
            </p>
            <input placeholder="Rechercher une wish list"></input>
        </div>
    );
};

export default HomeBody;