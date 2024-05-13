import React from "react";

export const PopupConnexion = ({propsIsAlreadySignUp}) => {
    return (
        <div>
            {propsIsAlreadySignUp && (
                <div>
                    <form>
                        <input type="text" placeholder="Nom d'utilisateur"/>
                        <input type="text" placeholder="Mot de passe"/>
                        <button>Connexion</button>
                    </form>
                </div>
            )}

            {!propsIsAlreadySignUp && (
                <div>
                    <form>
                        <input type="text" placeholder="Nom"/>
                        <input type="text" placeholder="Nom Prénom"/>
                        <input type="text" placeholder="Nom d'utilisateur"/>
                        <input type="text" placeholder="Mot de passe"/>
                        <input type="text" placeholder="Confirmez le mot de passe"/>

                        <button>Valider l'inscription</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default PopupConnexion;