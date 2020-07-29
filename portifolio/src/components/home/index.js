import React from "react";
import Typed from "react-typed";

function Home() {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center" style={{padding: "0", background: "#040b14"}}>
            <div className="hero-container" data-aos="fade-in">
                <h1>Wilk Caetano de França</h1>
                <p>Eu Sou:&nbsp;&nbsp;
                    <Typed 
                        strings={[' Analista Desenvolvedor', 'Programador Web', 'Programador Backend', 'Programador Fullstack']}
                        typeSpeed={100}
                        backSpeed={50}
                        loop
                    /> 
                </p>
            </div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="./assets/background/demo/index.html" style={{ height: "100%" }} allowfullscreen></iframe>
                </div>
        </section>
    );
};

export default Home;