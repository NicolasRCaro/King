import { useState } from "react";
import "./King.css";
import Game from './Game'
import PostsSection from "./PostsSection";
import Team from "./footer/Team.jsx"
function King(){
    const [vistaActual, setVistaActual] = useState("king");
    const [Header,setHeader]=useState(["Inicio","Juegos","Trabajos"]);
    const [Headerderecha,setHeaderderecha]=useState(["Canjear Tarjeta regalo","Comunidad"]);
    const [Integrantes,setIntegrantes]=useState(["Inicio","Juegos","Trabajos","Canjear Tarjeta regalo","Comunidad","Team","Corporate","Posts"]);
    const ObjImagenes = [
        {id:0,imagen: "https://www.king.com/media/aplg20fk/logo.svg?width=110&height=74&v=133770142968670000",},
        {id:1,imagen: "https://www.king.com/media/y0sdyzq4/hero-image.webp?width=1920&height=1080&v=133809811771700000&format=webp&quality=85"},
        {id:2,imagen: "https://www.king.com/media/ccddscdy/king_yeti_tiffi__mrtoffee_party_desktop.webp?width=950&height=647&v=133809814197370000&format=webp&quality=85"},
        {id:3,imagen: "https://www.king.com/media/w4yg44hu/candy-crush-saga.webp?width=260&height=190&v=133770850056330000&format=webp&quality=85"},
        {id:4,imagen: "https://www.king.com/media/fmmhfmbh/king_characters_playful_small.webp?width=600&height=288&v=133809814188200000&format=webp&quality=85"},
        {id:5,imagen: "https://www.king.com/media/nsklkhbs/video-thumbnail.webp?width=1540&height=850&v=133809814216970000&format=webp&quality=85"},
        {id:6,imagen: "https://cdn-icons-png.flaticon.com/512/0/375.png"},
        {id:7,imagen: "https://www.king.com/media/qntjvheo/video-content.webp?width=430&height=430&v=133771003620370000&format=webp&quality=85"},
        {id:8,imagen: "https://www.king.com/media/gycllehu/featured-graphic.webp?width=567&height=790&v=133809814226500000&format=webp&quality=85"},
        {id:9,imagen: "https://www.king.com/media/1h0p3eiy/49dc984afae67b4b5a71cc8c6f2f6953.jpg?width=350&height=350&v=133836615943770000&format=webp&quality=85"},
        {id:10,imagen: "https://www.king.com/media/yxfbnuyx/candy-crush.jpg?width=350&height=350&v=133770055909630000&format=webp&quality=85"},
        {id:11,imagen: "https://www.king.com/media/azme5gjf/farm-heroes.jpg?width=350&height=350&v=133770056038330000&format=webp&quality=85"},
        {id:12,imagen: "https://www.king.com/assets/images/bubble-mint.webp"},
        {id:13,imagen: "https://www.king.com/media/zkyjxa2s/bird-svg.webp?width=340&height=425&v=133770056730330000&format=webp&quality=85"},
        {id:14,imagen: "https://www.king.com/media/4uplnlku/bg_jobs.webp?width=750&height=645&v=133809814207200000&format=webp&quality=85"}
    ]
    const [Juegos,setJuegos]=useState(["Candy Crush Solitarie","Candy Crush Soda Saga","Farm Heroes Saga"]);
    const [Numero, setNumero]= useState(47); 
    if (vistaActual === "game") {
        return <Game />;
    }
    if (vistaActual === "trabajos")  return <Trabajos />;   
    if (vistaActual === "tarjeta")   return <Tarjeta />;
    if (vistaActual === "comunidad") return <Comunidad />;
    if (vistaActual === "team")      return <Team />;
    if (vistaActual === "corporate") return <Corporate />;
    if (vistaActual === "PostsSection")     return <PostsSection />;
    return(
        <div>
            <header>
                <ul>
                {Header.map((item,index)=>(
                    <li key={index}>{item}</li>

                ))}
            </ul>
            <a href="/King.jsx">
            <img className="HeaderLogo" src={ObjImagenes[0].imagen} alt="" /></a>
            <ul>
                {Headerderecha.map((item,index)=>(
                    <li key={index}>{item}</li>

                ))}
            </ul>
            <ul className="Integrantes">
                <li><a href="#">{Integrantes[0]}</a></li>
                <li><a onClick={() => setVistaActual("game")} style={{cursor:"pointer"}}>{Integrantes[1]}</a></li>
                <li><a href="#">{Integrantes[2]}</a></li>
                <li><a href="#">{Integrantes[3]}</a></li>
                <li><a href="#">{Integrantes[4]}</a></li>
                <li><a onClick={() => setVistaActual("team")} style={{cursor:"pointer"}}>{Integrantes[5]}</a></li>
                <li><a href="#">{Integrantes[6]}</a></li>
                <li><a onClick={() => setVistaActual("PostsSection")} style={{cursor:"pointer"}}>{Integrantes[7]}</a></li>
            </ul>
            </header>
            <main>
                <section className="Imagen_Principal">
                    <img src={ObjImagenes[1].imagen} alt="Imagen Principal" />
                    <p>Juega Ahora</p>
                </section>
                <section className="Doble_Div">
                    <div className="DivDerecha">
                        <img src={ObjImagenes[2].imagen} alt="Imagen derecha" />
                        <img src={ObjImagenes[3].imagen} alt="Logo derecha" />
                        <p>Juega Ahora</p>
                    </div>
                    <div className="DivIzquierda">
                        <img src={ObjImagenes[4].imagen} alt="Imagen izquierda" />
                        <h2>¡Juega a nuestros divertidos y populares juegos!</h2>
                        <p>En el reino encontrarás los mejores juegos para navegador y las aplicaciones para dispositivos móviles. Juega en tu ordenador, móvil o tableta y sincroniza fácilmente tu progreso. Los juegos de King son fáciles de manejar, ¡pero difíciles de dominar! Así que entra en nuestro reino ¡y prepárate para divertirte como nunca!</p>
                        <p>Todos los juegos</p>
                    </div>
                </section>
                <section className="Imagen_video">
                    <img src={ObjImagenes[5].imagen} alt="Imagen video" />
                    <img src={ObjImagenes[6].imagen} alt="Imagen reproductor" />
                    <img src={ObjImagenes[7].imagen} alt="Imagen blanca" />
                    <p>Ver Trabajos</p>
                </section>
                <section className="Juegos_destacados">
                    <div className="Imagen_derecha">
                        <img src={ObjImagenes[8].imagen} alt="Imagen niña" />
                    </div>
                    <div className="Carrusel">
                        <h2>Juegos Destacados</h2>
                    </div>
                    <div className="Primero">
                        <img src={ObjImagenes[9].imagen} alt="Imagen juego1" />
                        <h3>{Juegos[0]}</h3>
                        <p>¡Adéntrate en un mundo nuevo en el que el legendario juego de cartas se fusiona con Candy Crush!</p>
                    </div>
                    <div className="Segundo">
                        <img src={ObjImagenes[10].imagen} alt="Imagen juego2" />
                        <h3>{Juegos[1]}</h3>
                        <p>Intercambia y combina caramelos a través de esta sodaliciosa aventura para ayudar a Kimmy a encontrar a su hermana Tiffi.</p>
                    </div>
                    <div className="Tercero">
                        <img src={ObjImagenes[11].imagen} alt="Imagen juego3" />
                        <h3>{Juegos[2]}</h3>
                        <p>Escápate al campo y recarga las pilas con divertidos rompecabezas</p>
                    </div>
                </section>
                <section className="carrers">
                    <div className="contenedor">
                        <img src={ObjImagenes[12].imagen} alt="Cuadro_verde" />
                        <span>{Numero}</span>
                        <a onClick={()=>setNumero(Numero+1)}> Ofertas</a><a onClick={()=>setNumero(Numero-1)}> de trabajo</a>
                        <h2>Trabaja en King</h2>
                        <p>¿Quieres ayudarnos a crear los juegos que a la gente le encantan? Sabemos que una gran saga necesita todo tipo de héroes; así que adelante, echa un vistazo a nuestras ofertas de trabajo.</p>
                        <p className="Boton">Ver trabajos</p>
                        <img src={ObjImagenes[13].imagen} alt="Pollito" />
                    </div>
                    <img src={ObjImagenes[14].imagen} alt="Oficina" />
                </section>
            </main>
        </div>
    )
}
export default King;