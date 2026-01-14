import { Search, Bell, User, ChevronDown } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search projects, databases..."
            className="search-input"
          />
        </div>
      </div>
      <div className="header-right">
        <button className="header-icon-btn">
          <Bell size={18} />
        </button>
        <div className="user-menu">
          <div className="user-avatar">
            <User size={16} />
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}
