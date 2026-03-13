import { useState } from "react";
import "./PostsSection.css";

const posts = [
  { id: 1, date: "Ene 29, 2026", title: "Maui el mejor de Candy Crush rompe récord con 10,000 niveles completados sin perder una vida", category: "PRESS RELEASES" },
  { id: 2, date: "Dic 10, 2025", title: "King anuncia nuevo modo: 'Modo Abuela' para jugadores que piden ayuda en Facebook...", category: "NEWS" },
  { id: 3, date: "Nov 6, 2025", title: "Estudio revela que el 90% de los jugadores de Candy Crush dicen 'un nivel más' desde hace 3 años", category: "ARTICLES" },
  { id: 4, date: "Oct 27, 2025", title: "Maui desafía a la IA de King y gana: 'Los robots no tienen el don que yo tengo'", category: "NEWS" },
  { id: 5, date: "Oct 23, 2025", title: "King lanza nueva función: modo siesta, pausa automática cuando detecta ronquidos en el micrófono", category: "PRESS RELEASES" },
  { id: 6, date: "Oct 7, 2025", title: "Candy Crush Saga supera a dormir como actividad favorita de los colombianos según encuesta...", category: "ARTICLES" },
  { id: 7, date: "May 21, 2025", title: "King anuncia nuevo presidente: Maui, tras demostrar habilidades de liderazgo en el nivel 9999", category: "PRESS RELEASES" },
  { id: 8, date: "Nov 4, 2024", title: "Nuevo parche elimina el nivel 147, el más odiado de la historia de Candy Crush", category: "NEWS" },
  { id: 9, date: "Sep 19, 2024", title: "Maui rechaza oferta millonaria de Clash of Clans: 'Mi corazón es naranja y lleno de dulces'", category: "PRESS RELEASES" },
  { id: 10, date: "Jun 20, 2024", title: "Científicos confirman: el sonido de Candy Crush activa el mismo centro de placer que el chocolate", category: "ARTICLES" },
  { id: 11, date: "Mar 15, 2024", title: "King lanza programa de apoyo emocional para quienes perdieron sus 5 vidas al mismo tiempo", category: "NEWS" },
  { id: 12, date: "Feb 2, 2024", title: "Maui comparte sus secretos: 'La clave es nunca pagar las vidas extra, solo esperar con dignidad'", category: "PRESS RELEASES" },
];

const filters = ["ALL", "PRESS RELEASES", "NEWS", "ARTICLES"];

const navLinks = [
  { label: "🏠 Home", href: "#" },
  { label: "Posts", href: "#", active: true },
  { label: "Team", href: "#" },
  { label: "Press Kit", href: "#" },
  { label: "Compliance", href: "#" },
];

const POSTS_PER_PAGE = 6;

export default function PostsSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts =
    activeFilter === "ALL"
      ? posts
      : posts.filter((post) => post.category === activeFilter);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(POSTS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  };

  return (
    <div className="posts-wrapper">

      {/* Banner naranja */}
      <div className="posts-banner">
        <img
          className="banner-bg"
          src="https://www.king.com/media/pesfr4p3/corporate-background-image.png"
          alt="background"
        />
        <h1 className="banner-title">Corporate and Media</h1>
      </div>

      {/* Nav de sección */}
      <div className="posts-subnav-wrapper">
        <nav className="posts-subnav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`subnav-link ${link.active ? "subnav-link--active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Sección principal */}
      <section className="posts-section">
        <h2 className="posts-title">Filter publications</h2>

        {/* Filtros */}
        <div className="posts-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn filter-btn--${filter.toLowerCase().replace(/ /g, "-")} ${activeFilter === filter ? "active" : ""}`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Lista de posts */}
        <div className="posts-list">
          {visiblePosts.map((post) => (
            <a key={post.id} href="#" className="post-row">
              <span className="post-row__date">{post.date}</span>
              <span className="post-row__title">{post.title}</span>
              <span className={`post-row__badge badge--${post.category.toLowerCase().replace(/ /g, "-")}`}>
                {post.category}
              </span>
              <span className="post-row__arrow">›</span>
            </a>
          ))}
        </div>

        {hasMore && (
          <div className="posts-load-more">
            <button className="load-more-btn" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <p className="posts-empty">No posts found for this category.</p>
        )}
      </section>
    </div>
  );
}
