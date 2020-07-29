import React, { useState } from "react";
import api from "../../services/api";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    const [form, setForm] = useState({});
    const [errors, setErros] = useState({});
    const [email, setEmail] = useState("");
    const [loading, setLoaging] = useState(false);


    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        });
    };

    function validate(camp) {
        let errors = {};
        if (!form.name) {
            errors.name = `*Preencha o campo`
        }
        return errors;
    }

    const recaptchaRef = React.createRef();

   async function handleSubmit(event){
        event.preventDefault();
        const recaptchaValue = recaptchaRef.current.getValue();
            if (recaptchaValue) {
                setErros(validate(form));
                setLoaging(true);
                const enviMail = await api.post("/email", form);
                setLoaging(false)
                setEmail(enviMail.status)
                setTimeout(() => {
                    setEmail(0);
                }, 5000);
            }
    }

    return (
        <section id="testimonials" className="testimonials section-bg">
            <div className="container">

                <div className="section-title">
                <h2>Contatos</h2>
                {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                </div>

                <div className="row" data-aos="fade-in">

                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                    <div className="address">
                        <i className="icofont-google-map"></i>
                        <h4>Endereço:</h4>
                        <p>Monoel Pacheco - Brejo de Guabiraba - Recife - PE</p>
                    </div>

                    <div className="email">
                        <i className="icofont-envelope"></i>
                        <h4>Email:</h4>
                        <p>contato@wilkcaetano.com.br</p>
                    </div>

                    <div className="phone">
                        <i className="icofont-phone"></i>
                        <h4>WhatsApp:</h4>
                        <p>(81) 99394 - 9202</p>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.074051007441!2d-34.93091328522057!3d-7.991289794244797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1767640d7f3f%3A0x3f3349201814d9ee!2sR.%20Manoel%20Pach%C3%AAco%20-%20Brejo%20de%20Beberibe%2C%20Recife%20-%20PE%2C%2052191-540!5e0!3m2!1spt-BR!2sbr!4v1595879808964!5m2!1spt-BR!2sbr" frameborder="0" style={{border:"0", width: "100%", height: "290px"}} allowfullscreen></iframe>
                    </div>

                </div>
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form onSubmit={event => handleSubmit(event)} method="post" role="form" class="php-email-form">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="name">Seu Nome</label>
                        <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" onChange={e => handleChange(e)} data-msg="No minimo 4 caracteres" />
                        <div className="validate">
                            {errors ? <i style={{ color: "red", fontSize: '12px'}}>{errors.name}</i> : ""}
                        </div>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="name">Seu Email</label>
                        <input type="email" className="form-control" name="email" id="email" data-rule="email" onChange={e => handleChange(e)} data-msg="Por favor entre com email válido" />
                        <div className="validate">
                            {errors ? <i style={{ color: "red", fontSize: '12px'}}>{errors.name}</i> : ""}
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="name">Assunto</label>
                        <input type="text" className="form-control" name="subject" id="subject" onChange={e => handleChange(e)} data-rule="minlen:4" data-msg="" />
                        <div className="validate">
                            {errors ? <i style={{ color: "red", fontSize: '12px'}}>{errors.name}</i> : ""}
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="name">Mensagem</label>
                        <textarea className="form-control" name="message" rows="10" data-rule="required" onChange={e => handleChange(e)} data-msg="Digite sua mensagem"></textarea>
                        <div className="validate">
                            {errors ? <i style={{ color: "red", fontSize: '12px'}}>{errors.name}</i> : ""}
                        </div>
                    </div>
                    { email === 200 ?
                    <div className="mb-3 alert alert-success">
                        <div className="loading">Agradeço Seu contato!</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Obrigado por entrar em contato conosco, em breve entraremos respondendo seu email!</div>
                    </div>
                        : ""}
                        {loading === true ? 
                        <div className="col-12">
                            <div className="col-6" style={{ margin: "0 auto", marginBottom: "20px"}}>
                                <FontAwesomeIcon icon={faSpinner} rotation={180} flip="vertical" spin size="4x"/>
                            </div>
                        </div>
                        : ""}
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LdD1LUZAAAAANkzN6xk0VPc48wBQSh5lo39cbAa"
                            onChange={e => handleChange(e)}
                        />
                        <br />
                    <div className="text-center"><button className="btn btn-primary" type="submit">Enviar</button></div>
                    </form>
                </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;