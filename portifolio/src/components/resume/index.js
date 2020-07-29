import React from "react";

function Resume() {
    return (
        <section id="resume" className="resume section-bg">
            <div className="container">

                <div className="section-title">
                <h2>Resumo do Currículo</h2>
                <p>Resumo da minha vida profissional seguindo uma linha temporal de atuação e evolução de aprendizagem.</p>
                </div>

                <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                    <h3 className="resume-title">Sumário</h3>
                    <div className="resume-item pb-0">
                    <h4>Wilk Caetano</h4>
                    <p><em>
                        Profissional da área de T.I. a mais de 5
                        anos, trabalhando entre professor de
                        informática básica, montagem e
                        manutenção de microcomputadores, ha mais de 4
                        anos como programador web...</em></p>
                    <ul>
                        <li>Rua: Manoel Pacheco 13, Brejo da Guabiraba Recife - PE.</li>
                        <li>(81) 993949-202</li>
                        <li>wilk.caetano@gmail.com</li>
                    </ul>
                    </div>

                    <h3 className="resume-title">Formação</h3>
                    <div className="resume-item">
                    <h4>Curso Tecnólogo de Sistemas Para Internet</h4>
                    <h5>2016 - 2018</h5>
                    <p><em>Centro Universitário de João Pessoa UNIPÊ</em></p>
                    <p>Terceiro Grau Completo</p>
                    </div>
                    <div className="resume-item">
                    <h4>Segundo Grau Completo</h4>
                    <h5>2005</h5>
                    <p><em>Escola Emiliano Pereira Borges - Ferreiros - PE</em></p>
                    <p>Segundo Grau Completo</p>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="resume-title">Experiência Profissional</h3>
                    <div className="resume-item">
                    <h4>Analista Junior</h4>
                    <h5>2019 - Atualmente</h5>
                    <p><em>Recife - PE </em></p>
                    <ul>
                        <li>
                        Analista Junior, inicialmente trabalhando com backend JavaScript, mais com experiência em participação 
                        nas frentes de front e mobile com a mesma linguagem.
                        </li>
                    </ul>
                    </div>
                    <div className="resume-item">
                    <h4>Prodatta</h4>
                    <h5>2016 - 2019</h5>
                    <p><em>Ferreiros - PE</em></p>
                    <ul>
                        <li>Responsável pela criação de sites para Câmaras de Vereadores,
                        Prefeituras e sistemas voltados para os mesmos orgãos.
                        Trabalhando com PHP, Bootstrap, HTML5, CSS3, Javascript,
                        Jquery, Wordpress, Laravel.</li>
                    </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Download do Currículo Completo</h4>
                        <a href="./assets/curriculo/curriculo.pdf"><h5>Aqui</h5></a>
                    </div>
                    <div className="resume-item">
                        <h4>Link do Repositório</h4>
                        <a href="https://github.com/WilkRhu"><h5>GitHub</h5></a><br />
                        <a href="https://bitbucket.org/wilkcaetano/"><h5>Bitbucket</h5></a>
                    </div>
                </div>
                
                </div>

            </div>
        </section>
    );
};

export default Resume;