import React, {useEffect, useState} from "react";
import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import api from "../../service/api";

AOS.init();

export default function Corpo(){
    const [post, setPost] = useState([]);

    useEffect(()=>{
        function Post(){
            setInterval(async () => {
                const response = await api.get("/food?_embed");
                setPost(response.data);
            }, 5000);
            
        }
        Post();
    },[]);
    function Message() {
       var d = new Date();
        var hour = d.getHours();
        if(hour < 5)
        {
            return "Boa Noite";
        }
        else
        if(hour < 8)
        {
            return "Bom Dia";
        }
        else
        if(hour < 12)
        {
            return "Bom Dia!";
        }
        else
        if(hour < 18)
        {
            return "Boa tarde";
        }
        else
        {
            return "Boa noite";
        }
        
    }
   
    return( 
        <div className="container" id="corpo"> 
            <div className="col-12" id="title-corpo">
                Delícias do Dia
            </div>
            <div className="row">
                {post.map((item, indice)=>(
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="col-12"  id="container-pedido" data-aos="fade-right" data-aos-duration="100" data-aos-delay="100">
                            <div className="col-5" id="colordiv">
                                <div className="col-12" id="img-pedido">
                                    <div className="col-12" id="image" style={{ 
                                        backgroundImage: `url(${item._embedded["wp:featuredmedia"] ? item._embedded["wp:featuredmedia"][0].source_url : ""})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        opacity: "0.5" 
                                        }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7" style={{position: "relative", float: "left"}}>
                                <div className="col-12" id="tituloinfo">
                                    {item.title.rendered}
                                </div>
                                <div className="col-12" id="contInfo">
                                <span>Acompanhamento: </span> {item.acompanhamento}<br/>
                                    <span>500g:</span> {item["500g"]}<br/>
                                    <span>700:</span> {item["700g"]}<br />
                                    <div id="pedido">
                                    <i class="fa fa-whatsapp" aria-hidden="true"></i> <a href={`http://api.whatsapp.com/send?1=pt_BR&phone=+558193949202&text=Olá ${Message()} gostaria de um(a) ${item.title.rendered}`}>Fazer Pedido</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}