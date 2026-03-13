// CorporateMedia.jsx
import { useState } from "react";
import "./CorporateMedia.css";

// ── Datos ─────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Inicio", href: "https://www.king.com/es/" },
  { label: "Juegos", href: "https://www.king.com/es/game/" },
  { label: "Trabajos", href: "https://careers.king.com/us/en" },
  { label: "Canjear Tarjetas", href: "https://redeem.king.com/" },
  { label: "Comunidad", href: "https://community.king.com/en/" },
  { label: "Corporate", href: "#", active: true },
];

const subNavLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Posts", href: "https://www.king.com/es/corporate-and-media/posts/" },
  { label: "Team", href: "https://www.king.com/es/corporate-and-media/team/" },
  { label: "Press Kit", href: "https://www.king.com/es/corporate-and-media/press-kit/" },
  { label: "Compliance", href: "https://www.king.com/es/corporate-and-media/compliance/" },
];

const aboutParagraphs = [
  `With a mission of Making the World Playful, King is a leading interactive entertainment company with more than 20 years of history delivering some of the world's most iconic games in the mobile gaming industry, including the world-famous Candy Crush franchise, as well as other mobile game hits such as Farm Heroes Saga.`,
  `Candy Crush has been the top-grossing franchise in U.S. app stores and King's games are being played by more than 200 million monthly active users. King, a part of Activision Blizzard which was acquired by Microsoft in 2023 (NASDAQ: MSFT), has game studios in Stockholm, Malmö, London, Barcelona and Berlin and offices in San Francisco, New York, Los Angeles, Dublin and Malta.`,
  `At King, we design games with a broad appeal, which allow people to play for a moment, then move on with their day and pick up their game later. Our games are also synchronised across platforms, allowing players to switch seamlessly between devices and platforms — so they can play anywhere, any time and on any device.`,
];

const stats = [
  { number: "200M+", label: "Usuarios activos mensuales" },
  { number: "20+", label: "Años de historia" },
  { number: "200+", label: "Juegos desarrollados" },
];

const offices = [
  { city: "Stockholm", type: "Game Studio", emoji: "🇸🇪" },
  { city: "Malmö", type: "Game Studio", emoji: "🇸🇪" },
  { city: "London", type: "Game Studio", emoji: "🇬🇧" },
  { city: "Barcelona", type: "Game Studio", emoji: "🇪🇸" },
  { city: "Berlin", type: "Game Studio", emoji: "🇩🇪" },
  { city: "San Francisco", type: "Oficina", emoji: "🇺🇸" },
  { city: "New York", type: "Oficina", emoji: "🇺🇸" },
  { city: "Dublin", type: "Oficina", emoji: "🇮🇪" },
];

const games = [
  {
    name: "Candy Crush Saga",
    href: "https://www.king.com/es/game/candycrush/",
    icon: "https://www.king.com/media/lrhleyvv/game-icon.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Candy Crush Soda Saga",
    href: "https://www.king.com/es/game/candycrushsoda/",
    icon: "https://www.king.com/media/yujfrlea/appicon.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Farm Heroes Saga",
    href: "https://www.king.com/es/game/farmheroes/",
    icon: "https://www.king.com/media/5m1nywwf/farm-heroes-logo.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Candy Crush Solitaire",
    href: "https://www.king.com/es/game/candysolitaire/",
    icon: "https://www.king.com/media/qfhj5puo/appicon.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Pet Rescue Saga",
    href: "https://www.king.com/es/game/petrescue/",
    icon: "https://www.king.com/media/ebvgla0q/pet-rescue-icon.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Candy Crush Jelly Saga",
    href: "https://www.king.com/es/game/candycrushjelly/",
    icon: "https://www.king.com/media/ptgakj3z/candy-crush-jelly-icon.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Bubble Witch 3 Saga",
    href: "https://www.king.com/es/game/bubblewitch3/",
    icon: "https://www.king.com/media/hxdobwpu/bubble-witch-3-icon.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Candy Crush Friends Saga",
    href: "https://www.king.com/es/game/candycrushfriends/",
    icon: "https://www.king.com/media/2cumygyb/candy-crush-friends.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Farm Heroes Super Saga",
    href: "https://www.king.com/es/game/farmheroessupersaga/",
    icon: "https://www.king.com/media/dftlqskt/farm-hero-super-saga-logo.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Diamond Diaries Saga",
    href: "https://www.king.com/es/game/diamonddiaries/",
    icon: "https://www.king.com/media/se2gtx3x/diamon-diaries-logo.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Pyramid Solitaire Saga",
    href: "https://www.king.com/es/game/pyramid/",
    icon: "https://www.king.com/media/xrpfxxl0/pyramid-logo.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Bubble Witch 2 Saga",
    href: "https://www.king.com/es/game/bubblewitch2/",
    icon: "https://www.king.com/media/dazlwoqt/bubble-witch-2-icon.webp?width=100&height=100&format=webp&quality=85",
  },
  {
    name: "Blossom Blast Saga",
    href: "https://www.king.com/es/game/blossomblast/",
    icon: "https://www.king.com/media/tt2g3umh/blossom-blast-icon.webp?width=100&height=100&format=webp&quality=85",
  },
];

const footerLinks = {
  legal: [
    { label: "Términos y condiciones", href: "https://www.king.com/es/termsandconditions/" },
    { label: "Política de privacidad", href: "https://www.king.com/es/privacypolicy/" },
    { label: "Código de conducta", href: "https://www.king.com/es/codeofconduct/" },
    { label: "Cookies", href: "https://www.king.com/es/cookies/" },
  ],
  navigation: [
    { label: "Inicio", href: "https://www.king.com/es/" },
    { label: "Juegos", href: "https://www.king.com/es/game/" },
    { label: "Trabajos", href: "https://careers.king.com/us/en" },
    { label: "Empresas y prensa", href: "https://www.king.com/es/corporate-and-media/" },
    { label: "Atención al cliente", href: "https://kingcare.zendesk.com/" },
    { label: "Comunidad", href: "https://community.king.com/en/" },
  ],
};

const socialLinks = [
  { label: "FB", href: "https://www.facebook.com/King" },
  { label: "X", href: "https://x.com/King_Games" },
  { label: "YT", href: "https://www.youtube.com/user/KingOnlineGames" },
  { label: "in", href: "https://www.linkedin.com/company/king/" },
  { label: "IG", href: "https://www.instagram.com/lifeatking/" },
];

// ── Componente principal ───────────────────────────────────────────────────────

export default function CorporateMedia() {
  const [activeSubNav, setActiveSubNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <a className="navbar__logo" href="https://www.king.com/es/">
          <img
            src="https://www.king.com/media/aplg20fk/logo.svg?width=110&height=74"
            alt="King logo"
          />
        </a>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={link.active ? "active-link" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── HERO BANNER ── */}
      <section className="hero">
        <img
          className="hero__bg"
          src="https://www.king.com/media/ahnlqk3k/media-banner-desktop.webp?format=webp&quality=85"
          alt="Corporate and Media banner"
        />
        <div className="hero__overlay">
          <h1 className="hero__title">Corporate And Media</h1>
        </div>
      </section>

      {/* ── SUB-NAV ── */}
      <nav className="subnav">
        <ul className="subnav__list">
          {subNavLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={activeSubNav === link.label ? "active-sub" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSubNav(link.label);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <main className="corporate-main">

        {/* About Us */}
        <section className="about-section">
          <h2>About us</h2>
          {aboutParagraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </section>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-card__number">{stat.number}</div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-section__info">
            <h2>Contact us</h2>
            <p>
              Drop us a line, we'll be happy to hear from you!
            </p>
            <a className="contact-link" href="mailto:press@king.com">
              ✉ Email at press@king.com
            </a>
            <p style={{ marginTop: "18px", fontSize: "13px", color: "#888" }}>
              Please note this email address is only for our press team, and cannot
              assist you with customer services. If you need help, visit our{" "}
              <a href="https://soporto.king.com/contact" style={{ color: "#e91e8c" }}>
                support page
              </a>.
            </p>
          </div>
          <div className="contact-section__image">
            <img
              src="https://www.king.com/media/dl5ggwzs/contact-decoration-tiffi.webp?width=750&height=421&format=webp&quality=85"
              alt="Tiffi character"
            />
          </div>
        </section>

        {/* Offices */}
        <section className="offices-section">
          <h2>Nuestras oficinas</h2>
          <div className="offices-grid">
            {offices.map((office) => (
              <div className="office-card" key={office.city}>
                <div className="office-card__emoji">{office.emoji}</div>
                <div className="office-card__city">{office.city}</div>
                <div className="office-card__type">{office.type}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Games */}
        <section className="games-section">
          <h2>Nuestros juegos</h2>
          <div className="games-grid">
            {games.map((game) => (
              <a
                className="game-icon"
                key={game.name}
                href={game.href}
                title={game.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={game.icon} alt={game.name} />
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__brand">
            <img
              className="footer__logo"
              src="https://www.king.com/media/aplg20fk/logo.svg?width=110&height=74"
              alt="King logo"
            />
            <p>
              King es una empresa líder en el sector del entretenimiento interactivo
              para dispositivos móviles. Hemos desarrollado más de 200 divertidos
              títulos, disponibles en todo el mundo.
            </p>
            <div className="footer__social">
              {socialLinks.map((social) => (
                <a
                  className="social-icon"
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Legal</h4>
            <ul>
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Navegación</h4>
            <ul>
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © 2026 King.com Ltd. King, el logotipo de la corona de King, los nombres
            de los juegos y las marcas relacionadas son marcas comerciales de King.com
            Ltd o entidades relacionadas. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
