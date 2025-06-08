// Header.jsx
import React from 'react';
import { BsJustify } from 'react-icons/bs';


function Header({ OpenSidebar, className }) {
  return (
    <header className={`dashboard-header ${className}`}>
      <div className="header-content">
        {/* ✅ Fixed Menu Toggle Button */}
        <span className="menu-toggle" onClick={OpenSidebar} title="Toggle Sidebar">
          <BsJustify />
        </span>
      </div>
    </header>
  );
}

export default Header;
