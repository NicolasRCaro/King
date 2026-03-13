import { useState } from 'react'
import "./Game.css";
function Game(){
const [tema, setTema] = useState("light");

  const cambiarTema = () => {
    setTema(tema === "light" ? "dark" : "light");
  };
const Presentacion={
    titulo:"¡Juega nuestro divertidos y populares juegos!",
    info: "En el reino encontrarás los mejores juegos para navegador y las aplicaciones para dispositivos móviles. Juega en tu ordenador, móvil o tableta y sincroniza fácilmente tu progreso. Los juegos de King son fáciles de manejar, ¡pero difíciles de dominar! Así que entra en nuestro reino ¡y prepárate para divertirte como nunca!"
};
const menu=["inicio","juegos","trabajos"]
const pie=["king.com","King es una empresa líder en el sector del entretenimiento interactivo para dispositivos móviles. Jugadores de todo el mundo disfrutan de uno o más de nuestros juegos. Hemos desarrollado más de 200 divertidos títulos, que están disponibles en todo el mundo.","Términos y condiciones","Política de privacidad","Código de conducta","Cookies","No vendáis ni compartáis mi información personal","California Privacy Notice"]
const info=["Inicio","Juegos","Trabajos","Empresa y prensa","Atención al Cliente", "Comunidad"]
const redes=["Facebook","Twitter","Youtube","Linkedin","Instagram"]

return(
    <div className={tema}>
    <div class="Menu">
    </div>
    
    <div class="Contenido1">
    <div class="Img1">
        <img class="img1" src="https://www.king.com/media/iiqfc4of/games-left-image.webp?width=540&v=133776268924170000&format=webp&quality=85"></img>
    </div>
        <h2 class="titulin">{Presentacion.titulo}</h2>
        <p class="contenidin">{Presentacion.info}</p>
        <div class="Contenido2">
        <div class="ficha grande">
            <img src="https://www.king.com/media/101hzoxu/bacgkround.webp?width=640&height=369&v=133776269695670000&format=webp&quality=85"></img>
            
            <p>Candy Crush Saga</p>
            <p class="descripcion">
                Candy Crush Saga<br></br>
            ¿Te atreves con una deliciosa y dulce aventura? Únete a la aventura épica de Tiffi y el señor Toffee e intercambia y combina caramelos para abrirte paso a través de cientos de niveles en este delicioso juego en línea. Juega en solitario o con tus amigos para ver quién consigue la puntuación más alta. ¿A que es el juego más dulce de la historia?
            </p>
            
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/nh1anevm/background.webp?width=640&height=369&v=133776277031400000&format=webp&quality=85"></img>
            <p>Candy Crush Soda Saga</p>
            <p class="descripcion">
                Candy Crush  Soda Saga<br></br>
            Traemos grandes noticias para los fans de los caramelos: ¡Candy Crush Soda ya está aquí! Se trata de un nuevo juego de rompecabezas que te hará la boca agua, con innovadores niveles en los que podrás demostrar tus dulces habilidades. Intercambia y combina caramelos para abrirte paso a través de nuevas dimensiones mágicas y acompaña a Kimmy y a Tiffi en su sodaliciosa aventura.
            </p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/cidplqrm/background.webp?width=640&height=369&v=133776277555270000&format=webp&quality=85"></img>
            <p>Farm Heroes Saga</p>
             <p class="descripcion">
            Farm Heores Saga<br></br>
            ¡La granja del mundo feliz necesita ayuda! Detén al Mapache Maquiavélico y ¡conviértete en el héroe de la granja! En este popular juego en línea, puedes jugar a más de 430 niveles de rompecabezas repletos de diversión afrutada, cambiando y combinando las adorables cosechas.
            </p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/cbtlghuj/hero_lg.webp?width=640&height=369&v=133827997351970000&format=webp&quality=85"></img>
            <p>Candy Crush Solitaire</p>
            <p class="descripcion">
            Candy Crush Solitaire<br></br>
           ¡Solitaire se ha endulzado aún más! ¡Adéntrate en un mundo nuevo en el que el legendario juego de cartas se fusiona con Candy Crush! Pon tu ingenio a prueba en niveles emocionantes y repletos de engorrosos bloqueadores, regalos deliciosos y magia al más puro estilo Candy. Prepárate para una nueva aventura: ¡juega bien tus cartas y únete a la fiesta!
            </p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/tcejahpd/background.webp?width=640&height=369&v=133776278231830000&format=webp&quality=85"></img>
            <p>Pet Rescue Saga</p>
             <p class="descripcion">
            Pet Recuse Saga<br></br>
          Rescata a todas las mascotas en este adorable y monísimo juego rompecabezas. Detén a los malvados secuestradores combinando bloques para salvar a las mascotas de un destino terrible. Con montones de niveles llenos de desafíos que explorar, ¡este juego pondrá a prueba tus habilidades de resolución de rompecabezas!
          </p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/xbblmlge/background.webp?width=640&height=369&v=133776278802670000&format=webp&quality=85"></img>
            <p>Candy Crush Jelly Saga</p>
             <p class="descripcion">
            Candy Crush Jelly Saga<br></br>
         ¡Plaf! Llega Candy Crush Jelly Saga, ¡el juego más gelatinoso! Atrévete a combinar nuevos y dulces caramelos y disfruta de las características más divertidas. ¿Serás capaz de derrotar a Jelly Queen? ¿Podrás atrapar a los traviesos Pufflers? ¡Juega ya y ayuda a Jenny a rescatar al Yeti!
          </p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/gl2nn03t/background.webp?width=640&height=369&v=133776279160700000&format=webp&quality=85"></img>
            <p>Bubble Witch 3 Saga</p>
             <p class="descripcion">
            Bubble Witch 3 Saga<br></br>
          ¡Usa tu magia para ayudar a Stella a derrotar al malvado Wilbur! Haz explotar burbujas para abrirte paso a través de encantadores niveles. ¡Descubre nuevos hechizos y vuela con la escoba en este hechizante juego de combinación de burbujas!
          </p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/v1pd2k3a/background.webp?width=640&height=369&v=133776279579030000&format=webp&quality=85"></img>
            <p>Candy Crush Friends Saga</p>
             <p class="descripcion">
            Candy Crush Friends Saga<br></br>
         Preparaos, fans de Candy Crush, porque llega una nueva y dulce aventura: ¡ya podéis jugar al nuevo Candy Crush Friends Saga! Abríos paso aplastando y combinando caramelos a través de este delicioso juego de puzles con un poco de ayuda de vuestros amigos favoritos.
          </p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/j45nbgdf/background.webp?width=640&height=369&v=133776280074330000&format=webp&quality=85"></img>
            <p>Farm Heroes Super Saga</p>
             <p class="descripcion">
            Farm Heroes Super Saga<br></br>
        ¡Ábrete paso combinando entre nuevos obstáculos! Recoge supercosechas mientras ayudas a la ardilla Fidget a conseguir bellotas. Entra en acción con la cabra Darwin, intenta controlar la dirección del viento y domina el curso del río.
          </p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/ljihsxgj/background.webp?width=640&height=369&v=133776280473000000&format=webp&quality=85"></img>
            <p>Diamond Diaries Saga</p>
            <p class="descripcion">
            Diamond Diaries Saga<br></br>
         ¡Un antiguo diario, unas joyas perdidas hace mucho y una atrevida misión son los ingredientes de este deslumbrante juego nuevo! Juega un nivel desafiante tras otro y ayuda a nuestra valiente heroína Lucy mientras recorre el mundo en busca de pistas y gemas preciosas.
         </p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/zfucdaqj/background.webp?width=640&height=369&v=133776280879130000&format=webp&quality=85"></img>
            <p>Pyramid Solitaire Saga</p>
             <p class="descripcion">
            Pyramid Solitaire Saga<br></br>
          Únete a Helena y a su jerbo Kingsley en Pyramid Solitaire Saga, donde una aventura trepidante espera a los jugadores más audaces y atrevidos. Descubre los tesoros escondidos del Mundo Antiguo y desvela misterios en un viaje que te llevará a mágicas tierras lejanas.
          </p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/thgdtl30/background.webp?width=640&height=369&v=133776281234300000&format=webp&quality=85"></img>
            <p>Bubble Witch 2 Saga</p>
             <p class="descripcion">
            Bubble Witch 2 Saga<br></br>
          Las fuerzas oscuras están amenazando con invadir el País de las Brujas mientras Morgana y sus malvados esbirros siembran el caos. ¡Pero hay una nueva bruja en la ciudad con nuevos trucos en la manga! Únete a Stella y a sus gatos para derrotar a Morgana y ayúdala a devolver la paz al País de las Brujas.
          </p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/wqcb1viy/background.webp?width=640&height=369&v=133776281592500000&format=webp&quality=85"></img>
            <p>Blossom Blast Saga</p>
             <p class="descripcion">
            Blossom Blast Saga<br></br>
         Zzzzzz... ¡Blossom llega en busca de aventuras! Acompáñala haciendo uniones en jardines repletos de hermosos brotes; haz que los brotes florezcan y despeja los parterres. ¡Siente ya el poder de las flores!
          </p>
        </div>    
        </div>
    <div class="Img2">
        <img class="img2" src="https://www.king.com/media/apcgaqk0/games-right-image.webp?width=400&v=133776268935330000&format=webp&quality=85"></img>
    </div>
    </div>
    <div class="Piepagina">
    <div class="Pie">

       <ul class="pies">
       {pie.map((seccion,index)=> (
        <li key={index}>{seccion}</li>
       ))}
    </ul>
    </div>
    <div class="Pie">

       <ul class="piess">
       {info.map((seccion,index)=> (
        <li key={index}>{seccion}</li>
       ))}
    </ul>
    </div>
    <div class="Pie">

       <ul class="redes">
       {redes.map((seccion,index)=> (
        <li key={index}>{seccion}</li>
       ))}
    </ul>
    </div>
    <div class="Pie">
        <div class="fichas">
      <div class="fichita">
        <img class="loguito" src="https://www.king.com/media/lrhleyvv/game-icon.webp?width=100&height=100&v=133770265291830000&format=webp&quality=85"></img>
        </div> 
        <div class="fichita">
        <img class="loguito" src="https://www.king.com/media/yujfrlea/appicon.webp?width=100&height=100&v=133879865289370000&format=webp&quality=85"></img>
        </div> 
        <div class="fichita">
        <img class="loguito" src="https://www.king.com/media/5m1nywwf/farm-heroes-logo.webp?width=100&height=100&v=133770267043800000&format=webp&quality=85"></img>
        </div>
        <div class="fichita">
        <img class="loguito" src="https://www.king.com/media/qfhj5puo/appicon.webp?width=100&height=100&v=133854778681800000&format=webp&quality=85"></img>
        </div>
        <div class="fichita">
        <img class="loguito" src="https://www.king.com/media/ebvgla0q/pet-rescue-icon.webp?width=100&height=100&v=133879865296700000&format=webp&quality=85"></img>
        </div>
        <div class="fichita">
        <img class="loguito" src="https://www.king.com/media/ptgakj3z/candy-crush-jelly-icon.webp?width=100&height=100&v=133770267060530000&format=webp&quality=85"></img>
        </div>
        <div class="fichita">
        <img class="loguito" src="https://www.king.com/media/hxdobwpu/bubble-witch-3-icon.webp?width=100&height=100&v=133770267065830000&format=webp&quality=85"></img>
        </div>
        <div class="fichita">
        <img class="loguito" src="https://www.king.com/media/2cumygyb/candy-crush-friends.webp?width=100&height=100&v=133770267055130000&format=webp&quality=85"></img>
        </div>
        </div>
        <div class="img4"> 
            <img  class="imgg4" src="https://www.king.com/media/aq0ln2lm/king_characters_stacked_making_the_world_playful.webp?width=300&height=456&v=133770241855030000&format=webp&quality=85"></img>
        </div>

      <p>Cambiar tema</p>

      <button onClick={cambiarTema}>
        Cambiar modo
      </button>

    
    </div>
    </div>
    </div>

);
}
export default Game;