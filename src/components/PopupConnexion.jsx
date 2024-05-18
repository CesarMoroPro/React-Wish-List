// = ATTENTION : ce fichier n'est pas enfant de HomeBody mais directement de Home !

import React, { useContext } from "react";
import { SignInOrSignUpContext } from "../contexts/SignInOrSignUpContext";

/**
 * Dans ce fichier (ou un fichier qui sera importé), POUR SE CONNECTER, il faut avoir accès aux données utilisateurs pour :
 *      - vérifier l'existence du nom de l'utilisateur entré
 *      - vérifier si le mot de passe correspond bien à l'utilisateur
 *      - sotcker les données (localStorage ou Token) si elles sont correctes
 *      - ajouter une route pour être renvoyé sur l'accueil de l'espace utilisateur
 *  */

/**
 * Dans ce fichier (ou un fichier sera importé), POUR S'INSCRIRE, il faut avoir accès aux données utilisateurs pour :
 *      - vérifier que le nom d'utilisateur n'est pas déjà utilisé
 *      - vérifier que les deux mots de passe sont identiques (empêcher le c/c, et imposer des contraintes)
 *      - stocker toutes les données entrées
 *      - ajouter une route pour être renvoyé sur la popup de connexion automatiquement
 */

export const PopupConnexion = ({propsHandleClosePopupConnexion}) => {

    // Récupération uniquement de isAlreadySignUp du contexte SignInOrSignUpContext
    const { isAlreadySignUp } = useContext(SignInOrSignUpContext);

    // Traitement des données entrées par l'utilisateur
    const handleValidation = (e) => {
        console.log("données utilisateur reçues. Envoi en BDD en cours...");
        e.preventDefault();

    // Redirection vers la page de succès d'inscription
    }


    // Le composant PopupConnexion retourne :
    return (
        <div>
            {isAlreadySignUp && (
                <div>
                    <form action="">
                        <input type="text" placeholder="Nom d'utilisateur"/>
                        <input type="text" placeholder="Mot de passe"/>
                        <button>Connexion</button>
                    </form>
                </div>
            )}

            {!isAlreadySignUp && (
                <div>
                    <form action="">
                        <input type="text" placeholder="Nom"/>
                        <input type="text" placeholder="Nom Prénom"/>
                        <input type="text" placeholder="Nom d'utilisateur"/>
                        <input type="text" placeholder="Mot de passe"/>
                        <input type="text" placeholder="Confirmez le mot de passe"/>

                        <button onClick={handleValidation}>Valider l'inscription</button>
                    </form>
                </div>
            )}

            <p onClick={propsHandleClosePopupConnexion}>CLOSE the fuckin'popup !</p>
        </div>
    )
}

export default PopupConnexion;