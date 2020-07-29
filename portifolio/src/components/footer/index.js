import React from "react";

function Footer(){
    return(
    <div class="container">
        <div class="copyright">
        &copy; Copyright {new Date().getFullYear()} <strong><span>Wilk Caetano</span></strong>
        </div>
        <div class="credits">
       {/*  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
        </div>
    </div>
    );
};

export default Footer;