import { Upload, Folder, File, HardDrive } from 'lucide-react';
import './Storage.css';

export default function Storage() {
  const buckets = [
    { name: 'images', files: 1240, size: '12.4 GB', updated: '1 hour ago' },
    { name: 'documents', files: 342, size: '2.1 GB', updated: '3 hours ago' },
    { name: 'videos', files: 89, size: '45.8 GB', updated: '1 day ago' },
    { name: 'backups', files: 12, size: '8.3 GB', updated: '2 days ago' },
  ];

  return (
    <div className="storage-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Storage</h1>
          <p className="page-subtitle">Manage your file storage buckets</p>
        </div>
        <button className="primary-btn">
          <Upload size={18} />
          <span>Upload Files</span>
        </button>
      </div>

      <div className="storage-overview">
        <div className="storage-card">
          <HardDrive size={24} />
          <div>
            <h3>68.6 GB</h3>
            <p>Total Storage Used</p>
            <div className="storage-bar">
              <div className="storage-progress" style={{ width: '68%' }}></div>
            </div>
            <span className="storage-limit">of 100 GB limit</span>
          </div>
        </div>
      </div>

      <div className="buckets-section">
        <div className="section-header">
          <h2>Buckets</h2>
          <button className="secondary-btn">
            <Folder size={18} />
            <span>New Bucket</span>
          </button>
        </div>
        <div className="buckets-grid">
          {buckets.map((bucket) => (
            <div key={bucket.name} className="bucket-card">
              <div className="bucket-header">
                <div className="bucket-icon">
                  <Folder size={24} />
                </div>
                <h3 className="bucket-name">{bucket.name}</h3>
              </div>
              <div className="bucket-stats">
                <div className="bucket-stat">
                  <File size={16} />
                  <span>{bucket.files.toLocaleString()} files</span>
                </div>
                <div className="bucket-stat">
                  <HardDrive size={16} />
                  <span>{bucket.size}</span>
                </div>
              </div>
              <div className="bucket-footer">
                <span className="bucket-updated">Updated {bucket.updated}</span>
                <button className="text-link">View Files</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
