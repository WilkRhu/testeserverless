import React from "react";


function Sidebar() {
    return (
        <header id="header">
        <div className="d-flex flex-column">
                <div className="profile">
                    <img src="assets/img/wilk.jpg" alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Wilk Caetano</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="https://twitter.com/rhucaetano" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.facebook.com/wilk.caetano" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="https://www.instagram.com/wilkcaetano/?hl=pt-br" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="https://github.com/WilkRhu" className="google-plus"><i className="bx bxl-github"></i></a>
                            <a href="https://www.linkedin.com/in/wilk-caetano-031638a9/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                </div>
                <nav className="nav-menu">
                    <ul>
                    <li className="active"><a href="/#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="/#about"><i className="bx bx-user"></i> <span>Sobre</span></a></li>
                    <li><a href="/#resume"><i className="bx bx-file-blank"></i> <span>Currículo</span></a></li>
                    {/*<li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfólio</a></li>*/}
                    <li><a href="/#services"><i className="bx bx-server"></i> Serviços</a></li>
                    <li><a href="/#testimonials"><i className="bx bx-envelope"></i> Contato</a></li>
                    </ul>
                </nav>
                <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
            </div>
        </header>
    );
};


export default Sidebar;