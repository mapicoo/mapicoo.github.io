import React from "react";
import PageHero from "../../components/PageHero";
import Features from "./Features";
import TechnologyStack from "./TechnologyStack";
import "./AboutPage.css";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <div className="team-page">
      <PageHero
        title="Proje Hakkında"
        subtitle="Kültürleri AR ile Keşfetme Deneyimi"
        background="team"
      />

      {/* Project Overview Section */}
      <section className="project-overview">
        <div className="container">
          <div className="overview-content">
            <h2 className="section-title">Mapico</h2>
            <p className="overview-text">
              Mapico, artırılmış gerçeklik teknolojisiyle kullanıcılarına yerel
              kültürleri ve gelenekleri etkileşimli bir şekilde keşfetme fırsatı
              sunan yenilikçi bir mobil uygulamadır. Gerçek dünya ortamlarında
              AR destekli oyunlarla kültürel öğeleri dijital ortamda keşfedin.
            </p>
            <div className="highlight-cards">
              <div className="highlight-card">
                <div className="highlight-icon">🌐</div>
                <h3>Kültürel Keşif</h3>
                <p>Dünya kültürlerini interaktif şekilde deneyimleyin</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">👁️</div>
                <h3>AR Teknolojisi</h3>
                <p>Gerçek dünyaya dijital deneyimler entegre edin</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🎓</div>
                <h3>Eğitici İçerik</h3>
                <p>Oyunlarla kalıcı kültürel bilgiler edinin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Showcase */}
      <section className="games-showcase">
        <div className="container">
          <h2 className="section-title">Oyun Deneyimlerimiz</h2>
          <p className="section-subtitle">
            Kültürleri keşfederken eğlenmenizi sağlayan benzersiz AR oyunları
          </p>

          <div className="game-card">
            <div className="game-visual balloon-game"></div>
            <div className="game-info">
              <h3>Balon Patlatma Oyunu</h3>
              <p>
                AR ile balonları patlatırken yerel festivallerin sembollerini ve
                müziklerini keşfedin. Her patlatılan balon yöresel görseller ve
                melodiler sunar.
              </p>
              <div className="game-highlights">
                <span>🎈 Eğlenceli balon patlatma</span>
                <span>🎵 Yöresel müzikler</span>
                <span>🏮 Kültürel semboller</span>
              </div>
            </div>
          </div>

          <div className="game-card reverse">
            <div className="game-visual kitchen-game"></div>
            <div className="game-info">
              <h3>AR Sanal Mutfak</h3>
              <p>
                Gerçek masa üzerinde sanal mutfak deneyimi. Yöresel yemekleri AR
                ile hazırlayın, malzemeleri sürükleyip bırakın ve sanal şefin
                yönlendirmeleriyle öğrenin.
              </p>
              <div className="game-highlights">
                <span>👨‍🍳 Adım adım rehber</span>
                <span>🥗 Yöresel malzemeler</span>
                <span>📚 Kültürel bilgiler</span>
              </div>
            </div>
          </div>

          <div className="game-card">
            <div className="game-visual plane-game"></div>
            <div className="game-info">
              <h3>Uçakta Keşif</h3>
              <p>
                Uçakta karakterinizi yönlendirirken yerel yiyecekleri ve
                sembolleri toplayın. Her nesne yöresel bir yemek veya kültürel
                sembol olarak karşınıza çıkar.
              </p>
              <div className="game-highlights">
                <span>✈️ Eğlenceli gezinti</span>
                <span>🌍 Ülke özgü nesneler</span>
                <span>🏆 Puan toplama</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <TechnologyStack />

      <section className="documentation-cta">
        <div className="container">
          <h2 className="section-title">Daha Fazlasını Keşfedin</h2>
          <p className="section-subtitle">
            Mapico'nun teknik detaylarını ve kullanım kılavuzlarını
            dokümantasyonumuzda inceleyin
          </p>
          <Link to="/documentation" className="cta-button">
            Dokümantasyona Göz At
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
