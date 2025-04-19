import React from 'react';
import PageHero from '../../components/PageHero';
import DocumentCard from '../../components/DocumentCard';
import { documents } from '../../utils/data';
import './DocumentationPage.css';

const DocumentationPage: React.FC = () => {
  return (
    <div className="world-explorer-docs">
      <PageHero 
        title="Proje Dokümantasyonu" 
        subtitle="Dünya Kaşifi projesinin tüm teknik ve iş gereksinimleri" 
        background="documentation"
      />
      
      <section className="world-explorer-docs-section">
        <div className="world-explorer-container">
          <div className="world-explorer-docs-intro">
            <p>
              Aşağıda projemizin tüm dokümantasyon sürecinde oluşturduğumuz belgeleri bulabilirsiniz.
              Bu belgeler projenin tüm aşamalarını kapsamaktadır.
            </p>
          </div>
          
          <div className="world-explorer-docs-grid">
            {documents.map((doc) => (
              <DocumentCard
                key={doc.id}
                title={doc.title}
                description={doc.description}
                icon={doc.icon}
                link={doc.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="world-explorer-process">
        <div className="world-explorer-container">
          <h2 className="world-explorer-section-title">Dokümantasyon Süreci</h2>
          <div className="world-explorer-process-steps">
            <div className="world-explorer-process-step">
              <div className="world-explorer-step-number">1</div>
              <h3>Gereksinim Analizi</h3>
              <p>İş ve kullanıcı gereksinimlerinin belirlenmesi</p>
            </div>
            <div className="world-explorer-process-step">
              <div className="world-explorer-step-number">2</div>
              <h3>Tasarım</h3>
              <p>Sistem mimarisi ve kullanıcı arayüzü tasarımı</p>
            </div>
            <div className="world-explorer-process-step">
              <div className="world-explorer-step-number">3</div>
              <h3>Geliştirme</h3>
              <p>Teknik dokümantasyonun oluşturulması</p>
            </div>
            <div className="world-explorer-process-step">
              <div className="world-explorer-step-number">4</div>
              <h3>Test</h3>
              <p>Test senaryolarının ve kriterlerinin belirlenmesi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage;