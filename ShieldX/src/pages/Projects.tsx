import { Plus, MoreVertical, Database, Users, Globe } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Production API for e-commerce platform',
      status: 'active',
      region: 'us-east-1',
      databases: 3,
      users: 1250,
      updated: '2 hours ago',
    },
    {
      id: 2,
      name: 'Analytics Dashboard',
      description: 'Analytics service with real-time dashboards',
      status: 'active',
      region: 'eu-west-1',
      databases: 2,
      users: 432,
      updated: '1 day ago',
    },
    {
      id: 3,
      name: 'Mobile API',
      description: 'Mobile backend API service',
      status: 'paused',
      region: 'us-west-2',
      databases: 1,
      users: 89,
      updated: '3 days ago',
    },
  ];

  return (
    <div className="projects-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">Manage your projects and resources</p>
        </div>
        <button className="primary-btn">
          <Plus size={18} />
          <span>New Project</span>
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <button className="icon-btn">
                <MoreVertical size={18} />
              </button>
            </div>
            <div className="project-stats">
              <div className="project-stat">
                <Database size={16} />
                <span>{project.databases} Databases</span>
              </div>
              <div className="project-stat">
                <Users size={16} />
                <span>{project.users.toLocaleString()} Users</span>
              </div>
              <div className="project-stat">
                <Globe size={16} />
                <span>{project.region}</span>
              </div>
            </div>
            <div className="project-footer">
              <span className={`status-badge ${project.status}`}>
                {project.status}
              </span>
              <span className="project-updated">Updated {project.updated}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
