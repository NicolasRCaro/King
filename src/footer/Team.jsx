import "./Team.css";

export default function Team() {
  return (
    <div className="team-page">

      {/* TOP BAR */}
      <header className="topbar">

  <div className="topbar-inner">

    <div className="nav-left">
      <span>Home</span>
      <span>Games</span>
      <span>Jobs ↗</span>
    </div>

    <div className="nav-logo">
      <img src="/assets/king-logo.png" />
    </div>

    <div className="nav-right">
      <span>Redeem Gift Cards ↗</span>
      <span>Community ↗</span>
    </div>

  </div>

</header>

      {/* HERO */}
  
     <section className="hero"></section>

      {/* MEDIA CARD */}
         <div className="media-card">

  <h1 className="page-title">Corporate and Media</h1>
        {/* MENU */}
        <div className="team-menu">
          <button>🏠 Home</button>
          <button>Posts</button>
          <button className="active">Team</button>
          <button>Press Kit</button>
          <button>Compliance</button>
        </div>

        {/* TEAM */}
        <section className="team-section">
          <h2>Our Team</h2>

          <div className="member">
            <img src="/assets/todd.jpg" />
            <div>
              <h3>Todd Green</h3>
              <p>President</p>
            </div>
          </div>

          <div className="member reverse">
            <img src="/assets/eric.jpg" />
            <div>
              <h3>Eric Bowman</h3>
              <p>Chief Technology Officer</p>
            </div>
          </div>

          <div className="member">
            <img src="/assets/suzie.jpg" />
            <div>
              <h3>Suzie Carr</h3>
              <p>Chief People Officer</p>
            </div>
          </div>

          <div className="member reverse">
            <img src="/assets/ulrika.jpg" />
            <div>
              <h3>Ulrika Höjgård</h3>
              <p>Chief Operating Officer (Interim)</p>
            </div>
          </div>

          <div className="member">
            <img src="/assets/anthea.jpg" />
            <div>
              <h3>Anthea Williams</h3>
              <p>Chief Financial Officer</p>
            </div>
          </div>

        </section>

      </div>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-grid">

          <div>
            <h3>King.com</h3>
            <p>
              King is a leading interactive entertainment company for the mobile
              world, with people all around the world playing one or more of our
              games. We have developed more than 200 fun titles, offering games
              that are enjoyed all around the world.
            </p>

            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Code of Conduct</li>
              <li>Cookies</li>
              <li>Do Not Sell or Share My Personal Information</li>
              <li>California Privacy Notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Home</li>
              <li>Games</li>
              <li>Jobs</li>
              <li>Corporate and Media</li>
              <li>Contact support</li>
              <li>Community</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>

          <div>

            <div className="king-games">
              <img src="/assets/candy.png"/>
              <img src="/assets/soda.png"/>
              <img src="/assets/crush.png"/>
              <img src="/assets/cards.png"/>
              <img src="/assets/pet.png"/>
              <img src="/assets/jelly.png"/>
              <img src="/assets/witch.png"/>
              <img src="/assets/friends.png"/>
            </div>

            <img className="playful-img" src="/assets/playful.png"/>

          </div>

        </div>

        <div className="languages">
          English | Svenska | Norsk | Dansk | Suomi | Deutsch | Nederlands |
          Español | Français | Italiano | Português do Brasil | Türkçe | 日本語 |
          繁體中文 | 简体中文 | 한국어 | Hrvatski | Polskie | Čeština | Română |
          Slovenský | Magyar | русский | ภาษาไทย | Bahasa Indonesia | Tiếng Việt |
          اَلْعَرَبِيَّة
        </div>

        <p className="copyright">
          © 2026 King.com Ltd. King, the King crown logo, the game names and
          related marks are trade marks of King.com Ltd or related entities.
          All rights reserved.
        </p>

      </footer>

    </div>
  );
}