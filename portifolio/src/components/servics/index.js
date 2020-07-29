import React from "react";

function Service() {
    return (
        <section id="services" className="services">
        <div className="container">
  
          <div className="section-title">
            <h2>Serviços</h2>
            <p>Conheça alguns serviços que desenvolvo. </p>
          </div>
  
          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon"><i className="icofont-computer"></i></div>
              <h4 className="title"><a >Criação de Sites</a></h4>
              <p className="description">Criamos sites que possam direcionar seus cliente até você atingindo melhor seu público.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
              <h4 className="title"><a href="">Criação de Sistemas</a></h4>
              <p className="description">Criamos sistemas para facilitar a demanda e o fluxos da sua empresa</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="icofont-earth"></i></div>
              <h4 className="title"><a href="">Conectando você ou sua empresa com o mundo</a></h4>
              <p className="description">Com sites você/empresa terá uma maior visibilidade,  conseguindo "romper" barreiras de comércios, garantindo sua competitividade no mercado.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="icofont-smart-phone"></i></div>
              <h4 className="title"><a href="">React Native</a></h4>
              <p className="description">Criamos aplicativos Android com o intuito de conectar você com seus clientes.</p>
            </div>
          
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="icofont-file-javascript"></i></div>
              <h4 className="title"><a >Node JS</a></h4>
              <p className="description">Crianção de API com Node Js, linguagem Javascript</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
              <div className="icon"><i className="icofont-file-php"></i></div>
              <h4 className="title"><a >PHP</a></h4>
              <p className="description">Sistemas com PHP, framework Laravel.</p>
            </div>

            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
              <div className="icon"><i className="icofont-file-html5"></i></div>
              <h4 className="title"><a >ReactJs</a></h4>
              <p className="description">Criando sites/sistemas com framework frontend Javascript.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
              <div className="icon"><i className="icofont-brand-wordpress"></i></div>
              <h4 className="title"><a >Wordpress</a></h4>
              <p className="description">Criação de Layouts com essa ferramenta de gerenciamento de contúdos</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
              <div className="icon"><i className="icofont-file-sql"></i></div>
              <h4 className="title"><a >Banco de Dados</a></h4>
              <p className="description">Trabalhamos com bancos de dados como Postegres, Mysql, Sqlite, MongoDB...</p>
            </div>
            
  
          </div>
  
        </div>
      </section>
    );
};

export default Service;