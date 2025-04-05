import React from 'react';
import PageHero from '../../components/PageHero';
import DocumentCard from '../../components/DocumentCard';
import { documents } from '../../utils/data';
import './DocumentationPage.css';

const DocumentationPage: React.FC = () => {
  return (
    <div className="documentation-page">
      <PageHero 
        title="Proje Dokümantasyonu" 
        subtitle="Dünya Kaşifi projesinin tüm teknik ve iş gereksinimleri" 
        background="documentation"
      />
      
      <section className="documentation-section">
        <div className="container">
          <div className="documentation-intro">
            <p>
              Aşağıda projemizin tüm dokümantasyon sürecinde oluşturduğumuz belgeleri bulabilirsiniz.
              Bu belgeler projenin tüm aşamalarını kapsamaktadır.
            </p>
          </div>
          
          <div className="documents-grid">
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
      
      <section className="documentation-process">
        <div className="container">
          <h2 className="section-title">Dokümantasyon Süreci</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Gereksinim Analizi</h3>
              <p>İş ve kullanıcı gereksinimlerinin belirlenmesi</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Tasarım</h3>
              <p>Sistem mimarisi ve kullanıcı arayüzü tasarımı</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Geliştirme</h3>
              <p>Teknik dokümantasyonun oluşturulması</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
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