import React from 'react';
import './DocumentCard.css';

interface File {
  name: string;
  type: string;
  description?: string;
}

interface DocumentCardProps {
  title: string;
  link:string;
  icon: string;
  files?: File[];
}

const DocumentCard: React.FC<DocumentCardProps> = ({ 
  title, 
  link,
  icon, 
  files = [] 
}) => {
  return (
    <div className="world-explorer-document-card">
      <div className="world-explorer-document-icon">{icon}</div>
      <h3 className="world-explorer-document-title">{title}</h3>
      
      {files.length > 0 && (
        <div className="world-explorer-document-files">
          <div className="world-explorer-files-count">
            {files.length} {files.length === 1 ? 'dosya' : 'dosya'} içerir
          </div>
          <ul className="world-explorer-files-list">
            {files.map((file, index) => (
              <li key={index} className="world-explorer-file-item">
                <a 
                  href={`/documents/${file.name}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="world-explorer-file-link"
                >
                  <span className="world-explorer-file-icon">
                    {getFileIcon(file.type)}
                  </span>
                  <span className="world-explorer-file-info">
                    <span className="world-explorer-file-name">
                      {file.description || file.name}
                    </span>
                    <span className="world-explorer-file-type">
                      {file.type.toUpperCase()}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Dosya türüne göre ikon belirleme
function getFileIcon(type: string) {
  switch(type) {
    case 'pdf':
      return '📄';
    case 'docx':
      return '📝';
    case 'png':
    case 'jpg':
    case 'jpeg':
      return '🖼️';
    default:
      return '📁';
  }
}

export default DocumentCard;