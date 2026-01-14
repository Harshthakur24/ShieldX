import { Plus, Code, Play, Clock, Zap } from 'lucide-react';
import './Functions.css';

export default function Functions() {
  const functions = [
    {
      name: 'process-payment',
      runtime: 'Node.js 18',
      status: 'active',
      invocations: 12500,
      avgDuration: '120ms',
      updated: '2 hours ago',
    },
    {
      name: 'send-email',
      runtime: 'Python 3.11',
      status: 'active',
      invocations: 3420,
      avgDuration: '85ms',
      updated: '5 hours ago',
    },
    {
      name: 'generate-report',
      runtime: 'Node.js 18',
      status: 'idle',
      invocations: 0,
      avgDuration: '-',
      updated: '1 day ago',
    },
  ];

  return (
    <div className="functions-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Edge Functions</h1>
          <p className="page-subtitle">Deploy and manage serverless functions</p>
        </div>
        <button className="primary-btn">
          <Plus size={18} />
          <span>New Function</span>
        </button>
      </div>

      <div className="functions-stats">
        <div className="function-stat-card">
          <Zap size={24} />
          <div>
            <h3>{functions.length}</h3>
            <p>Total Functions</p>
          </div>
        </div>
        <div className="function-stat-card">
          <Play size={24} />
          <div>
            <h3>15,920</h3>
            <p>Total Invocations</p>
          </div>
        </div>
        <div className="function-stat-card">
          <Clock size={24} />
          <div>
            <h3>102ms</h3>
            <p>Avg Duration</p>
          </div>
        </div>
      </div>

      <div className="functions-list">
        <div className="section-header">
          <h2>Functions</h2>
        </div>
        <div className="functions-table">
          {functions.map((func) => (
            <div key={func.name} className="function-row">
              <div className="function-info">
                <div className="function-icon">
                  <Code size={20} />
                </div>
                <div>
                  <h3 className="function-name">{func.name}</h3>
                  <p className="function-runtime">{func.runtime}</p>
                </div>
              </div>
              <div className="function-metrics">
                <div className="function-metric">
                  <span className="metric-label">Invocations</span>
                  <span className="metric-value">{func.invocations.toLocaleString()}</span>
                </div>
                <div className="function-metric">
                  <span className="metric-label">Avg Duration</span>
                  <span className="metric-value">{func.avgDuration}</span>
                </div>
              </div>
              <div className="function-status">
                <span className={`status-badge ${func.status}`}>{func.status}</span>
                <span className="function-updated">Updated {func.updated}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
