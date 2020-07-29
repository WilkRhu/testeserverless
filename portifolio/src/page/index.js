import React from "react";
import Home from "../components/home";
import Sobre from "../components/sobre";
import Resume from "../components/resume";
import Service from "../components/servics";
import Contact from "../components/contact";

function Index(){
    return (
        <>
            <Home />
            <Sobre />
            <Resume />
            <Service />
            <Contact />
        </>
    );
};

export default Index;