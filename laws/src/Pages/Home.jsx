import "./Home.css";
import DrAmbedkar from "../assets/dr-ambedkar.png";
import JusticeImage from "../assets/justice-image.jpg";
import ViralCasesPreview from '../Components/ViralCasesPreview'

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-left">
              <h1>Know Your Law</h1>
              <p><strong>Empowering small businesses with legal knowledge</strong></p>
              <div className="hero-buttons">
                <button className="btn-primary">Know Your Laws</button>
                <button 
                className="btn-outline"
                onClick={() => window.location.href = "/describe"}
                >
                Descirbe Business
                </button>
                <button 
                className="btn-outline"
                onClick={() => window.location.href = "/tips"}
                >
                Legal Tips
                </button>
              </div>
            </div>
            <div className="hero-right">
              <img src={DrAmbedkar} alt="Dr. B.R. Ambedkar" />
            </div>
          </div>
        </div>
      </section>
    <ViralCasesPreview/>
      <section className="mid-section">
        <h2>"Know Your Law" Made Simple</h2>
        <div className="mid-cards">
          <div className="card"><p>Most indians are unaware of their basic legal rights. We're here to change that.</p></div>
          <div className="card"><p>To educate normal people who don't know much about laws.</p></div>
          <div className="card"><p>Learn about your rights in plain language.</p></div>
          <div className="card"><p>Know what licenses or permits your business needs.</p></div>
          <div className="card"><p>Help for small vendors, shopkeepers, and new entrepreneurs.</p></div>
          <div className="card"><p>Get guided help without needing a lawyer.</p></div> 
        </div>
      </section>
    
      <section class="why-legal-awareness">
  <h2>Why Legal Awareness Matters</h2>
  <p>
    Legal awareness empowers individuals and businesses to understand their rights and responsibilities.
    It helps avoid legal troubles, ensures compliance, and promotes fairness in society.
    <span class="highlight">Knowledge of the law protects you from exploitation and fosters informed decision-making.</span>
  </p>
</section>


      <section className="awareness-points-section">
        <ul className="awareness-points">
          <li><strong>Legal assistance in India is a right, not a privilege.</strong></li>
          <li><strong>Justice is for all — not just for those who can afford it.</strong></li>
          <li><strong>Awareness can prevent exploitation and protect your dignity.</strong></li>
        </ul>
      </section>

      <section className="law-awareness-section">
        <div className="law-card left-law-card">
          <h3>“Ignorance of the law is no excuse.”</h3>
          <p>Knowing your rights helps protect your business and dignity.</p>
        </div>

        <div className="justice-image">
          <img src={JusticeImage} alt="Justice for All" />
          <div className="image-overlay">Justice for All</div>
        </div>

        <div className="law-card right-law-card">
          <h3>“An aware citizen is an empowered citizen.”</h3>
          <p>Legal awareness prevents exploitation and builds confidence.</p>
        </div>
      </section>
    </>
  );
}

export default Home;
