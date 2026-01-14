import { Plus, Table, Search, Filter } from 'lucide-react';
import './Database.css';

export default function Database() {
  const tables = [
    { name: 'users', rows: 1250, size: '2.4 MB', updated: '2 hours ago' },
    { name: 'products', rows: 3420, size: '8.1 MB', updated: '5 hours ago' },
    { name: 'orders', rows: 8920, size: '12.3 MB', updated: '1 day ago' },
    { name: 'payments', rows: 5670, size: '6.8 MB', updated: '2 days ago' },
  ];

  return (
    <div className="database-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Database</h1>
          <p className="page-subtitle">Manage your database tables and queries</p>
        </div>
        <div className="header-actions">
          <button className="secondary-btn">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="primary-btn">
            <Plus size={18} />
            <span>New Table</span>
          </button>
        </div>
      </div>

      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search tables..."
          className="search-input"
        />
      </div>

      <div className="tables-section">
        <div className="section-header">
          <h2>Tables</h2>
          <span className="section-count">{tables.length} tables</span>
        </div>
        <div className="tables-grid">
          {tables.map((table) => (
            <div key={table.name} className="table-card">
              <div className="table-header">
                <div className="table-icon">
                  <Table size={20} />
                </div>
                <h3 className="table-name">{table.name}</h3>
              </div>
              <div className="table-stats">
                <div className="table-stat">
                  <span className="stat-label">Rows</span>
                  <span className="stat-value">{table.rows.toLocaleString()}</span>
                </div>
                <div className="table-stat">
                  <span className="stat-label">Size</span>
                  <span className="stat-value">{table.size}</span>
                </div>
              </div>
              <div className="table-footer">
                <span className="table-updated">Updated {table.updated}</span>
                <button className="text-link">View Schema</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
