import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 Modern React SPA</p>
      </footer>
    </div>
  );
};

export default Layout;