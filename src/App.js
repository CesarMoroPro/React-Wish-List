// IMPORT DES STYLES
import './App.css';

// Import de React et ses librairies
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import de composants "utilitaires" (routes, services, utils, etc.)
import Root from './routes/Root';

// Import des composants tels que les pages
import Error404 from "./pages/Error404";
import RegistrationSucced from './pages/RegistrationSucced';
import Dashboard from "./pages/Dashboard";


// Setup du Routeur
const router = createBrowserRouter([
    /**
     ** Tableau des différentes routes
     * Une route est un objet qui contient plusieurs propriétés :
     *      - "path" pour le chemin,
     *      - "element", qui est le jsx qui doit être rendu.
     *      - "children" dans le cas des routes imbriquées, qui contiendra les routes enfants d'une route en particulier,
     *      - "errorElement" dans le cas de l'utilisation du composant natif <Outlet/>
     */

    // Route de la page d'accueil
    {
        path: "/",
        element: <Root/>, // Contient le composant natif <Outlet/>
        errorElement: <Error404/>,
        children: [
            // Route de validation de l'inscription
            {
                path: "registration-succed",
                element: <RegistrationSucced/>
            },
            // Route vers l'accueil de l'espace utilisateur
            {
                path: "dashboard",
                element: <Dashboard/>
            }
        ]
    },
]);

const App = () => {

    // Ci-dessous, format de rendu avec utilisation de routeur
    /**
     * Il ne faut mettre que le routeur Provider dans ce composant App appelé par Index.js.
     * Tout autre composant qui y serait appelé (tel que <Home/> par exemple)
     * s'afficherait sur toutes les pages, pas seulement sur la route concernée.
     */
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );

    // OLD : Ci-dessous, format basique de rendu d'un composant sans utilisateur de routeur
    /* 
    return (
        <Home></Home>
    );
    */
};

export default App;
