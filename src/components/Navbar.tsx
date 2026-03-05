import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  open: boolean;
  onNavigate: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ open, onNavigate }) => {
  return (
    <nav id="mobile-nav" className={`nav ${open ? "open" : ""}`}>
      <ul>
        <li><Link to="/" onClick={onNavigate}>Home</Link></li>
        <li><Link to="/about" onClick={onNavigate}>About</Link></li>
        <li><Link to="/projects" onClick={onNavigate}>Projects</Link></li>
        <li><Link to="/contact" onClick={onNavigate}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
