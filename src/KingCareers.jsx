import { useState } from "react";
import "./KingCareers.css";

// ── DATA ──────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "About Us", href: "#", hasDropdown: false },
  { label: "Working at King", href: "#", hasDropdown: true },
  { label: "Jobs", href: "#", hasDropdown: false },
  { label: "Early Careers", href: "#", hasDropdown: false },
  { label: "Kingdom News", href: "#", hasDropdown: false },
];

const stats = [
  {
    id: 1,
    prefijo: "",
    numero: "12",
    sufijo: "",
    label: "Live Games",
    color: "#3bbf8a",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACMKDSUS/images/Highlights-04-1707150567185.png",
  },
  {
    id: 2,
    prefijo: "Over",
    numero: "200M",
    sufijo: "",
    label: "Monthly Players",
    color: "#e91e8c",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACMKDSUS/images/Highlights-05-1707150568785.png",
  },
  {
    id: 3,
    prefijo: "Almost",
    numero: "2000",
    sufijo: "Kingsters",
    label: "Worldwide",
    color: "#ff6b00",
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACMKDSUS/images/Highlights-06-1707150538116.png",
  },
];

const topicosFiltro = [
  "All Topics",
  "Impact",
  "Kingster Career Story",
  "Life at King",
  "Tech",
];

const noticias = [
  {
    id: 1,
    topico: "Impact",
    titulo: "'Gaming for Good': Our Hackathon Initiative with Junior Achievement",
    descripcion:
      "King and Junior Achievement unite to empower students for STEAM careers through sustainability-driven hackathons.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=380&fit=crop",
  },
  {
    id: 2,
    topico: "Impact",
    titulo: "Improving Representation with the King & Swedish Games Industry Scholarship Program",
    descripcion:
      "Find out more about the joint Scholarship Program between King and the Swedish Games Industry.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=380&fit=crop",
  },
  {
    id: 3,
    topico: "Kingster Career Story",
    titulo: "Challenging, Motivating and Fun: A Career at King Through Laia's Eyes",
    descripcion:
      "Laia Navarro, Engineering Manager at King, shares her insights on motivation, diversity, and future challenges in gaming.",
    img: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&h=380&fit=crop",
  },
  {
    id: 4,
    topico: "Life at King",
    titulo: "What It's Really Like Working at Our Stockholm Studio",
    descripcion:
      "A deep dive into the creative culture, team dynamics and daily life at King's vibrant Stockholm office.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=380&fit=crop",
  },
  {
    id: 5,
    topico: "Tech",
    titulo: "How King's Data Team Uses Machine Learning to Delight Players",
    descripcion:
      "Our data scientists share how they harness billions of gameplay events to create personalized experiences.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop",
  },
  {
    id: 6,
    topico: "Impact",
    titulo: "King's Commitment to Carbon Neutrality by 2030",
    descripcion:
      "Learn about the steps we're taking to reduce our environmental footprint and build a sustainable future.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=380&fit=crop",
  },
];

// ── NAVBAR ────────────────────────────────────────────────────────────────────

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <img
            src="https://cdn.phenompeople.com/CareerConnectResources/ACMKDSUS/images/Kinglogo-1679923120876-1686718393202.png"
            alt="King"
          />
        </a>

        <ul className={`navbar-links ${menuAbierto ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>
                {link.label}
                {link.hasDropdown && <span className="chevron">▾</span>}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a href="#" className="btn-signup">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Sign up
          </a>
          <a href="#" className="btn-saved">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Saved jobs (0)
          </a>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────

function Hero() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <section className="hero">
      {/* Panel izquierdo naranja con corte diagonal */}
      <div className="hero-orange">
        <div className="hero-orange-content">
          <h1>
            At King, we bring moments of <em>magic</em> to hundreds of
            millions of people, every single day.
          </h1>
          <p className="hero-desc">
            We're continuously experimenting, learning and adapting to shape
            the industry in ways yet to be imagined. And we're not afraid to
            have fun along the way. Together, we'll create new experiences that
            raise the bar, delight millions of people and redefine the world of
            games.
          </p>
          <p className="hero-sub">
            Are you ready to join us in Making the World Playful?
          </p>

          <button className="hero-video-btn">
            <span className="play-circle">▶</span>
            Working at King
          </button>

          <div className="hero-search-bar">
            <input
              type="text"
              placeholder="Search roles or location"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button className="hero-search-submit" aria-label="Buscar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Imagen decorativa derecha */}
      <div className="hero-img-wrap">
        <img
          src="https://images.unsplash.com/photo-1543622748-5ee7237e8565?w=900&h=620&fit=crop"
          alt="King office"
        />
      </div>
    </section>
  );
}

// ── STATS ─────────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-circle-wrap" style={{ "--c": stat.color }}>
              <img src={stat.img} alt={stat.label} className="stat-img" />
              <div className="stat-overlay">
                {stat.prefijo && <span className="stat-pre">{stat.prefijo}</span>}
                <span className="stat-num">{stat.numero}</span>
                {stat.sufijo && <span className="stat-suf">{stat.sufijo}</span>}
              </div>
            </div>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── KINGDOM NEWS ──────────────────────────────────────────────────────────────

function KingdomNews() {
  const [topicoActivo, setTopicoActivo] = useState("All Topics");
  const [visibles, setVisibles] = useState(3);

  const filtradas =
    topicoActivo === "All Topics"
      ? noticias
      : noticias.filter((n) => n.topico === topicoActivo);

  return (
    <section className="news-section">
      <div className="news-inner">
        {/* Cabecera */}
        <div className="news-header">
          <h2>Kingdom News</h2>
          <div className="news-select-wrap">
            <select
              value={topicoActivo}
              onChange={(e) => {
                setTopicoActivo(e.target.value);
                setVisibles(3);
              }}
            >
              {topicosFiltro.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="news-grid">
          {filtradas.slice(0, visibles).map((n) => (
            <article key={n.id} className="news-card">
              <div className="news-card-img">
                <img src={n.img} alt={n.titulo} />
              </div>
              <div className="news-card-body">
                <span className="news-tag">{n.topico}</span>
                <h3>{n.titulo}</h3>
                <p>{n.descripcion}</p>
              </div>
            </article>
          ))}
        </div>

        {/* View more */}
        {visibles < filtradas.length && (
          <div className="news-footer">
            <button
              className="btn-view-more"
              onClick={() => setVisibles((v) => v + 3)}
            >
              View more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────────────────

export default function KingCareers() {
  return (
    <div className="king-page">
      <Navbar />
      <Hero />
      <Stats />
      <KingdomNews />
    </div>
  );
}
