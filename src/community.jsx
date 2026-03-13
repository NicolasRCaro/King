import { useState } from 'react'
import './community.css'

const NAV_LINKS = ['Discussions', 'Groups', 'Categories']

const GAMES_DROPDOWN = [
  { name: 'Blossom Blast Saga',       img: 'https://us.v-cdn.net/6030983/uploads/d63f6458866e84411a496d63519ae8c7.png' },
  { name: 'Bubble Witch 2 Saga',      img: 'https://us.v-cdn.net/6030983/uploads/d979444933cefa70ceb1d837899c7575.png' },
  { name: 'Bubble Witch 3 Saga',      img: 'https://us.v-cdn.net/6030983/uploads/7d17104d590af4c867af83eef85c1975.png' },
  { name: 'Candy Crush Friends Saga', img: 'https://us.v-cdn.net/6030983/uploads/f07b8a123653f85d92352413134a1c63.png' },
  { name: 'Candy Crush Jelly Saga',   img: 'https://us.v-cdn.net/6030983/uploads/369ba186f8bf53e3e56b605bd084b702.png' },
  { name: 'Candy Crush Saga',         img: 'https://us.v-cdn.net/6030983/uploads/fa3afcebdf16f880e5933e38445c7ebf.png' },
  { name: 'Candy Crush Soda Saga',    img: 'https://us.v-cdn.net/6030983/uploads/0d5fecb360baa2fd18dbd3c30b812fe8.png' },
  { name: 'Candy Crush Solitaire',    img: 'https://us.v-cdn.net/6030983/uploads/YUZWPGHLZPVT/579914-cs-sl-community-game-tile-control-sta-300x300.jpg' },
  { name: 'Community Lounge',         img: 'https://us.v-cdn.net/6030983/uploads/HQH9FHS8DCVF/bannerpicture.jpg' },
  { name: 'Diamond Diaries Saga',     img: 'https://us.v-cdn.net/6030983/uploads/41bdf9a85773a616ad169d136f94095d.png' },
  { name: 'Farm Heroes Saga',         img: 'https://us.v-cdn.net/6030983/uploads/defb3bb3ea9b037534ac932510f215ee.png' },
  { name: 'Farm Heroes Super Saga',   img: 'https://us.v-cdn.net/6030983/uploads/f444e2378379da143b3fe8f8327d5a67.png' },
  { name: 'Pet Rescue Saga',          img: 'https://us.v-cdn.net/6030983/uploads/49052fa3c41464ae6ca0d9511b1702e6.png' },
  { name: 'Pyramid Solitaire Saga',   img: 'https://us.v-cdn.net/6030983/uploads/6a5c27a710c5e4b129bc601e26e40e33.png' },
]

const CAROUSEL_GAMES = [
  { name: 'Candy Crush Saga',         img: 'https://us.v-cdn.net/6030983/uploads/fa3afcebdf16f880e5933e38445c7ebf.png' },
  { name: 'Candy Crush Soda Saga',    img: 'https://us.v-cdn.net/6030983/uploads/0d5fecb360baa2fd18dbd3c30b812fe8.png' },
  { name: 'Candy Crush Solitaire',    img: 'https://us.v-cdn.net/6030983/uploads/YUZWPGHLZPVT/579914-cs-sl-community-game-tile-control-sta-300x300.jpg' },
  { name: 'Farm Heroes Saga',         img: 'https://us.v-cdn.net/6030983/uploads/defb3bb3ea9b037534ac932510f215ee.png' },
  { name: 'Pet Rescue Saga',          img: 'https://us.v-cdn.net/6030983/uploads/49052fa3c41464ae6ca0d9511b1702e6.png' },
  { name: 'Bubble Witch Saga 3',      img: 'https://us.v-cdn.net/6030983/uploads/7d17104d590af4c867af83eef85c1975.png' },
  { name: 'Candy Crush Friends Saga', img: 'https://us.v-cdn.net/6030983/uploads/f07b8a123653f85d92352413134a1c63.png' },
  { name: 'Candy Crush Jelly Saga',   img: 'https://us.v-cdn.net/6030983/uploads/369ba186f8bf53e3e56b605bd084b702.png' },
  { name: 'Diamond Diaries Saga',     img: 'https://us.v-cdn.net/6030983/uploads/41bdf9a85773a616ad169d136f94095d.png' },
  { name: 'Blossom Blast Saga',       img: 'https://us.v-cdn.net/6030983/uploads/d63f6458866e84411a496d63519ae8c7.png' },
  { name: 'Farm Heroes Super Saga',   img: 'https://us.v-cdn.net/6030983/uploads/f444e2378379da143b3fe8f8327d5a67.png' },
  { name: 'Bubble Witch Saga 2',      img: 'https://us.v-cdn.net/6030983/uploads/d979444933cefa70ceb1d837899c7575.png' },
  { name: 'Pyramid Solitaire Saga',   img: 'https://us.v-cdn.net/6030983/uploads/6a5c27a710c5e4b129bc601e26e40e33.png' },
  { name: 'Community Lounge',         img: 'https://us.v-cdn.net/6030983/uploads/HQH9FHS8DCVF/bannerpicture.jpg' },
]

const SITE_TOTALS = [
  { value: '2,814,123', label: 'Members' },
  { value: '3,586,562', label: 'Posts' },
  { value: '19,928',    label: 'Questions Answered' },
]

const ANNOUNCEMENTS = [
  {
    title: '🥳 Wishing all Candy Crushers Born in March a very Happy Birthday! 🎂',
    excerpt: 'Spring is here and so are the birthdays of our fellow Candy Crushers born in March. Please wish them all a very Happy Birthday! 🥳🎂🎉',
  },
  {
    title: '🥤 Pop Up Soda LIVE: Hot Tracks Part 🔥 – Level 18,881 ~ 18,925 Feedback Time ⏱️',
    excerpt: 'Hello Soda Sparklers! 😊 This is Hot Tracks Part for Soda Sparklers 🔥, feedback thread for New Released Levels of this week!',
  },
  {
    title: "♀️ Celebrate International Women's Day for a chance to win gold bars or badge",
    excerpt: "International Women's Day (IWD) has been around for over a hundred years, focusing on celebrating the achievements of women globally.",
  },
  {
    title: '🔍 Under Investigation: Daily login streak lost on Facebook',
    excerpt: "I didn't miss my daily gift yesterday, level 500 and something signing in everyday… But, it's at level 0 today!!! What happen???",
  },
  {
    title: '🐝🌼 Queen Bee Season Is Buzzing Into Farm Heroes Saga! 🌼🐝',
    excerpt: 'The Farm is getting busy… and a little bit buzzy! The Queen Bee has arrived, bringing sweet rewards, friendly competition, and plenty of chances.',
  },
]

const ACTIVE_MEMBERS = [
  { name: 'Diamond_Lim',   posts: 1259, avatar: 'https://us.v-cdn.net/6030983/uploads/userpics/3COUH12GKTBX/n2P1ZEOYWBUTZ.jpg' },
  { name: 'nekocat',       posts: 648,  avatar: 'https://us.v-cdn.net/6030983/uploads/avatarstock/n4YBY1W09H58U.png' },
  { name: 'maf34100',      posts: 311,  avatar: 'https://us.v-cdn.net/6030983/uploads/avatarstock/nYU1G80HFPTBN.png' },
  { name: 'Deal_One',      posts: 291,  avatar: 'https://us.v-cdn.net/6030983/uploads/avatarstock/nFWFD7IU59MK3.png' },
  { name: 'cookiemae',     posts: 275,  avatar: 'https://us.v-cdn.net/6030983/uploads/userpics/TIQFF1MD9F5R/nVV1522I2TZT8.jpg' },
  { name: 'trishbanda',    posts: 170,  avatar: 'https://us.v-cdn.net/6030983/uploads/avatarstock/nR4VKS19UIZ6S.png' },
  { name: 'LeFlarcane',    posts: 154,  avatar: 'https://us.v-cdn.net/6030983/uploads/userpics/UOOXYIV4AELT/nDLZGQKWRE64K.png' },
  { name: 'christinewupp', posts: 138,  avatar: 'https://us.v-cdn.net/6030983/uploads/userpics/3BGSGJ9E812H/n2HJDE3HK4CT9.png' },
  { name: 'Racoon7',       posts: 122,  avatar: 'https://us.v-cdn.net/6030983/uploads/userpics/YEKDUHF7LMUZ/n2HF724G1KWPQ.png' },
  { name: 'Alienscar',     posts: 110,  avatar: 'https://us.v-cdn.net/6030983/uploads/avatarstock/nPS9MRENWE2FQ.png' },
]

const FOOTER_LINKS = [
  'Report Abuse', 'Appeal Moderation', 'King.com', 'Contact Us',
  'Terms & Conditions', 'Privacy Policy', 'Cookies',
  'Do Not Sell or Share My Personal Information',
]

const ITEMS_PER_PAGE = 5

// ── COMPONENT ─────────────────────────────────────────────────────────────────

function Community() {
  const [gamesOpen,     setGamesOpen]     = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const visibleGames = CAROUSEL_GAMES.slice(carouselIndex, carouselIndex + ITEMS_PER_PAGE)

  const prevCarousel = () =>
    setCarouselIndex(i => Math.max(0, i - ITEMS_PER_PAGE))

  const nextCarousel = () =>
    setCarouselIndex(i =>
      i + ITEMS_PER_PAGE < CAROUSEL_GAMES.length ? i + ITEMS_PER_PAGE : i
    )

  return (
    <>
      <header className="header">

        {/* Nav izquierda */}
        <nav className="header-left">
          <a href="#" className="nav-link nav-active">Games</a>

          {NAV_LINKS.map(link => (
            <a key={link} href="#" className="nav-link">{link}</a>
          ))}

          <div
            className="nav-dropdown"
            onMouseEnter={() => setGamesOpen(true)}
            onMouseLeave={() => setGamesOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              Games ▾
            </button>
            {gamesOpen && (
              <div className="dropdown-menu">
                {GAMES_DROPDOWN.map(game => (
                  <a key={game.name} href="#" className="dropdown-item">
                    <img src={game.img} alt={game.name} />
                    <span>{game.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <a href="#" className="header-logo">
          <img
            src="https://us.v-cdn.net/6030983/uploads/0153892fef19f8b71fe560d089f1b461.png"
            alt="King"
          />
        </a>

        <div className="header-right">
          <span className="icon-globe">🌐 ▾</span>
          <span className="icon-search">🔍</span>
          <a href="#" className="btn-signin">Sign In</a>
          <a href="#" className="btn-register">Register</a>
        </div>

      </header>

      <div className="hero-banner">
        <div className="hero-content">
          <img
            className="hero-logo"
            src="https://us.v-cdn.net/6030983/uploads/0153892fef19f8b71fe560d089f1b461.png"
            alt="King"
          />
        </div>
      </div>

      {/* barra busqueda */}
      <div className="search-section">
        <div className="search-inner">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input className="search-input" type="text" placeholder="Search" />
          </div>
          <button className="search-btn">Search</button>
        </div>
      </div>

      {/* ── CARRUSEL ── */}
      <div className="carousel-section">
        <div className="carousel-inner">
          <button
            className="carousel-btn"
            onClick={prevCarousel}
            disabled={carouselIndex === 0}
          >❮</button>

          <div className="carousel-track">
            {visibleGames.map(game => (
              <a key={game.name} href="#" className="carousel-item">
                <img src={game.img} alt={game.name} />
              </a>
            ))}
          </div>

          <button
            className="carousel-btn"
            onClick={nextCarousel}
            disabled={carouselIndex + ITEMS_PER_PAGE >= CAROUSEL_GAMES.length}
          >❯</button>
        </div>
      </div>

      <main className="main-layout">

        <div className="col-main">

          <div className="join-section">
            <h2 className="join-title">New here? Join the Community</h2>
            <p className="join-text">Create an account to get help, chat with other players and share feedback.</p>
            <div className="join-btns">
              <a href="#" className="btn-green">Sign In</a>
              <a href="#" className="btn-pink">Register</a>
            </div>
          </div>

          <div className="stats-row">
            {SITE_TOTALS.map(stat => (
              <div key={stat.label} className="stat-inline">
                <span className="stat-inline-value">{stat.value}</span>
                <span className="stat-inline-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* anuncios */}
          <div className="announcements-section">
            <h3 className="announce-title">LATEST ANNOUNCEMENTS</h3>
            <ul className="announcement-list">
              {ANNOUNCEMENTS.map(a => (
                <li key={a.title} className="announcement-item">
                  <div className="announce-thumb"></div>
                  <div className="announce-body">
                    <a href="#" className="announcement-link">{a.title}</a>
                    <p className="announcement-excerpt">{a.excerpt}</p>
                    <div className="announce-meta">
                      <span className="announce-tag">Announcement</span>
                      <span className="announce-info">Started by <b>bearwithme</b> · Off-Topic · Mar 10, 2026</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <aside className="col-side">

          {/* Active Members — sin card */}
          <div className="members-section">
            <p className="members-subtitle">Members with the most posts and comments this month.</p>
            <ul className="members-list">
              {ACTIVE_MEMBERS.map(member => (
                <li key={member.name} className="member-item">
                  <img src={member.avatar} alt={member.name} className="member-avatar" />
                  <span className="member-name">{member.name}</span>
                  <span className="member-posts">{member.posts}</span>
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </main>

      {/* footer */}
      <footer className="footer">
        <div className="footer-inner">
          <img
            src="https://us.v-cdn.net/6030983/uploads/0153892fef19f8b71fe560d089f1b461.png"
            alt="King"
            className="footer-logo"
          />
          <nav className="footer-links">
            {FOOTER_LINKS.map(link => (
              <a key={link} href="#" className="footer-link">{link}</a>
            ))}
          </nav>
          <p className="footer-copy">
            © 2025 King.com Ltd. King, the King crown logo, the game names and related marks are
            trademarks of King.com Ltd. or related entities. All rights reserved.
          </p>
          <p className="footer-powered">Powered By Vanilla</p>
        </div>
      </footer>
    </>
  )
}

export default Community
