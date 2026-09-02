import React, { useState } from 'react';
import { UploadCloud, AlertCircle } from 'lucide-react';
import styles from './ArticleUpload.module.css';

export const ArticleUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.uploadArea}>
        <UploadCloud size={48} className={styles.icon} />
        <h3 className={styles.title}>Upload an Article</h3>
        <p className={styles.subtitle}>Drag and drop or click to browse</p>
        
        <input 
          type="file" 
          id="file-upload" 
          className={styles.fileInput}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.txt"
        />
        <label htmlFor="file-upload" className={styles.browseBtn}>
          Browse Files
        </label>
        
        {selectedFile && (
          <div className={styles.selectedFile}>
            Selected: {selectedFile.name}
          </div>
        )}
      </div>

      <div className={styles.noticeArea}>
        <AlertCircle size={20} className={styles.noticeIcon} />
        <p className={styles.noticeText}>
          Backend file processing is currently pending integration. File uploads will not be parsed by the AI at this time.
        </p>
      </div>
    </div>
  );
};
