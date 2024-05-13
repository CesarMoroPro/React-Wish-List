import React from "react";

export const HomeBody = ({
    propsIsAlreadySignUp,
    propsShowPopupConnexion,
    propsHandleSignInSignUp,
    propsHandlePopupConnexion}) => {

    return (
        <div>
            <button 
                onClick={propsHandlePopupConnexion}
                disabled={propsShowPopupConnexion}>
                    {propsIsAlreadySignUp ? "Se connecter" : "S'inscrire"}
            </button>
            <a href="#" onClick={propsHandleSignInSignUp}>{propsIsAlreadySignUp ? "Je n'ai pas encore de compte" : "J'ai déjà un compte"}</a>
            <input placeholder="Rechercher une wish list"></input>
        </div>
    )
}

export default HomeBody;