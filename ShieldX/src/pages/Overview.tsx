import { Activity, Database, Users, Zap, TrendingUp, Server } from 'lucide-react';
import './Overview.css';

export default function Overview() {
  const stats = [
    { label: 'Total Projects', value: '12', icon: Server, change: '+2 this month', color: '#f97316' },
    { label: 'API Requests', value: '1.2M', icon: Activity, change: '+12% from last month', color: '#ff8c42' },
    { label: 'Database Size', value: '45.2 GB', icon: Database, change: '+5.1 GB', color: '#ea580c' },
    { label: 'Active Users', value: '8,432', icon: Users, change: '+234 this week', color: '#f97316' },
  ];

  return (
    <div className="overview-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Overview</h1>
          <p className="page-subtitle">Monitor your projects and resources</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="stat-card">
              <div className="stat-header">
                <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                  <Icon size={20} />
                </div>
                <span className="stat-change">{stat.change}</span>
              </div>
              <div className="stat-content">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="content-grid">
        <div className="content-card">
          <div className="card-header">
            <h2>Recent Activity</h2>
            <button className="text-link">View all</button>
          </div>
          <div className="activity-list">
            {[
              { action: 'New project created', project: 'ecommerce-api', time: '2h ago' },
              { action: 'Database migration completed', project: 'analytics-db', time: '5h ago' },
              { action: 'Function deployed', project: 'payment-service', time: '1d ago' },
              { action: 'Storage bucket updated', project: 'media-files', time: '2d ago' },
            ].map((activity, idx) => (
              <div key={idx} className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-content">
                  <span className="activity-action">{activity.action}</span>
                  <span className="activity-project">{activity.project}</span>
                </div>
                <span className="activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="quick-actions">
            <button className="action-btn">
              <Zap size={18} />
              <span>Create Project</span>
            </button>
            <button className="action-btn">
              <Database size={18} />
              <span>New Database</span>
            </button>
            <button className="action-btn">
              <TrendingUp size={18} />
              <span>View Analytics</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
