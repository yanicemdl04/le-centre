import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../public/images/logo.jpg';
import './nav.css';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-green-dark shadow-md' : 'bg-transparent'}`}>
      <nav className="container-custom py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <div className='logo'><img src={logo}></img></div>
          <span className="text-2xl font-serif font-bold text-white">Le Centre</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="nav-link">Accueil</NavLink>
          <NavLink to="/menu" className="nav-link">Menu</NavLink>
          <NavLink to="/bar-cocktails" className="nav-link">Bar & Cocktails</NavLink>
          <NavLink to="/gallery" className="nav-link">Galerie</NavLink>
          <NavLink to="/testimonials" className="nav-link">Avis</NavLink>
          <NavLink to="/about" className="nav-link">À Propos</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>

        <NavLink to="/reservations" className="hidden md:block btn btn-primary">
          Réserver
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-dark">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <NavLink to="/" className="nav-link" onClick={closeMenu}>Accueil</NavLink>
            <NavLink to="/menu" className="nav-link" onClick={closeMenu}>Menu</NavLink>
            <NavLink to="/bar-cocktails" className="nav-link" onClick={closeMenu}>Bar & Cocktails</NavLink>
            <NavLink to="/gallery" className="nav-link" onClick={closeMenu}>Galerie</NavLink>
            <NavLink to="/testimonials" className="nav-link" onClick={closeMenu}>Avis</NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>À Propos</NavLink>
            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
            <NavLink to="/reservations" className="btn btn-primary w-full" onClick={closeMenu}>
              Réserver
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;