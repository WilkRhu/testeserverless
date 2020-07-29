import React from "react";

function Sobre() {
  function Idade() {
    const ano = "1986"
    const data = new Date().getFullYear();
    const idade = data - ano;
    return idade;
  }

    return (
        <>
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                <h2>Sobre</h2>
                <p>
                    Olá meu nome é Wilk Caetano, trabalho a mais de 5 anos na área de informática, começando como instrutor de 
                    informática básica, passando por técnico em montagem e manutenção, depois me especializando na área de programação web, 
                    atuando no início como front end, passando a posteriori a atuar como fullstack no back end com PHP, trabalhando com o 
                    gerenciador de conteudo WordPress, framework Laravel, atualmente trabalhando com a linguagem JavaScript, NodeJs e ReactJs.            
                </p>
                </div>

                <div className="row">
                <div className="col-lg-4" data-aos="fade-right">
                    <img src="assets/img/wilk.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Analista Desenvolvedor</h3>
                    <p className="font-italic">
                    "Trabalhe com o que você ama e nunca mais precisará trabalhar na vida. Confúcio"
                    </p>
                    <div className="row">
                    <div className="col-lg-6">
                        <ul>
                        <li><i className="icofont-rounded-right"></i> <strong>Nascimento:</strong> 8 Fev 1986</li>
                        <li><i className="icofont-rounded-right"></i> <strong>Celular:</strong> (81) 99394-9202 </li>
                        <li><i className="icofont-rounded-right"></i> <strong>Cidade:</strong> Recife - PE </li>
                        <li><i className="icofont-rounded-right"></i> <strong>CEP:</strong> 52191-540 </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                        <li><i className="icofont-rounded-right"></i> <strong>Idade:</strong> {Idade()}</li>
                        <li><i className="icofont-rounded-right"></i> <strong>Grau:</strong> Superior</li>
                        <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> wilk.caetano@gmail.com </li>
                        <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Acessível</li>
                        </ul>
                    </div>
                    </div>
                    <p>
                    Atuei também com criações de logomarcas e desenvolvimento mobile com React Native...
                    </p>
                </div>
                </div>

            </div>
        </section>
        <section id="facts" className="facts">
        <div className="container">
  
          <div className="section-title">
            <h2>Fatos</h2>
            <p></p>
          </div>
  
          <div className="row no-gutters">
  
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
              <div className="count-box">
                <i className="icofont-simple-smile"></i>
                <span data-toggle="counter-up">8</span>
                <p><strong>Clientes</strong> </p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="count-box">
                <i className="icofont-document-folder"></i>
                <span data-toggle="counter-up">8</span>
                <p><strong>Projetos</strong></p>
              </div>
            </div>
  
             <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="count-box">
                <i className="icofont-live-support"></i>
                <span data-toggle="counter-up">6</span>
                <p><strong>Horas de Suporte</strong></p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
              <div className="count-box">
                <i className="icofont-users-alt-5"></i>
                <span data-toggle="counter-up">2</span>
                <p><strong>Equipe</strong></p>
              </div>
            </div>
  
          </div>
  
        </div>
    </section>
      </>
    );
};

export default Sobre;