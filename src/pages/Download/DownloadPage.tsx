import React from 'react';
import { Link } from 'react-router-dom';
import { FiDownload, FiMapPin, FiNavigation, FiLayers, FiSmartphone } from 'react-icons/fi';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import './DownloadPage.css';

const DownloadPage = () => {
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=1e-yjsOd5lrb5UAb27bXU4H4Sqrb_B1FI';
  link.download = 'Mapicoo.apk'; // İndirilen dosya adı
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="download-page">
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Mapico'yu Hemen Deneyin</h2>
          <p>Dünyayı keşfetme şeklinizi değiştirmeye hazır mısınız?</p>
          <div className="cta-buttons">
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button primary"
            >
              <FaGooglePlay /> Play Store <span className="badge">Yakında</span>
            </a>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button primary"
            >
              <FaApple /> App Store <span className="badge">Yakında</span>
            </a>
            <button onClick={handleDownload} className="cta-button secondary">
              <FiDownload /> APK İndir
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Mapico Mobil Özellikleri</h2>   
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FiNavigation />
              </div>
              <h3>Gerçek Zamanlı Navigasyon</h3>
              <p>Anlık yol tarifi ve trafik bilgisi ile en hızlı rotayı bulun</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiLayers />
              </div>
              <h3>Katmanlı Haritalar</h3>
              <p>Farklı harita katmanları arasında geçiş yaparak detayları keşfedin</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiSmartphone />
              </div>
              <h3>Offline Kullanım</h3>
              <p>İnternet bağlantısı olmadan haritaları kullanmaya devam edin</p>
            </div>
          </div>
        </div>
      </section>

      {/* How To Install */}
      <section className="install-section">
        <div className="container">
          <h2 className="section-title">APK Kurulum Rehberi</h2>          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>APK Dosyasını İndirin</h3>
                <p>Yukarıdaki "APK Olarak İndir" butonuna tıklayarak dosyayı indirin</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Bilinmeyen Kaynaklara İzin Verin</h3>
                <p>Ayarlar &gt; Güvenlik &gt; Bilinmeyen Kaynaklar seçeneğini etkinleştirin</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>APK'yı Kurun</h3>
                <p>İndirilenler klasöründen APK dosyasına dokunun ve kurulumu tamamlayın</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Uygulamayı Açın</h3>
                <p>Kurulum tamamlandıktan sonra Mapico'yu başlatın ve keşfe çıkın</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;