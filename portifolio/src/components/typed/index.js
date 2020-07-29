import Typed from "typed.js";

function Type(){
    var options = {
        strings: ['Analista Desenvolvedor, Programador Web, Backend, Fullstack'],
        typeSpeed: 40
    };
    var typed = new Typed('.element', options);
    return typed;
};

export default Type;
