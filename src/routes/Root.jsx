import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";

export const Root = () => {
    return (
        <>
            <Home/>
            <Outlet/>
        </>
    );
};

export default Root;