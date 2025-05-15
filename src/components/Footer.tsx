import React from 'react';
import { NavLink } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '../../public/images/logo.jpg';
import './nav.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className='logo'><img src={logo}></img></div>
              <h3 className="text-xl font-serif font-bold">Le Centre</h3>
            </div>
            <p className="mb-4 text-beige opacity-80">Un lieu où la convivialité et l'excellence se rencontrent. Vivez une expérience gastronomique unique au cœur de Gemena.</p>
            <p className="text-gold font-serif italic text-lg">"TOUT MENE AU CENTRE"</p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 border-b border-gold pb-2">Heures d'ouverture</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Lundi - Jeudi</p>
                  <p className="text-beige opacity-80">11h00 - 23h00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Vendredi - Samedi</p>
                  <p className="text-beige opacity-80">11h00 - 00h00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Dimanche</p>
                  <p className="text-beige opacity-80">12h00 - 22h00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 border-b border-gold pb-2">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span>Avenue Principale, Gemena, Sud-Ubangi, RDC</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span>+243 81 234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span>info@lecentre-restaurant.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-white hover:text-gold transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gold transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 border-b border-gold pb-2">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className="footer-link">Accueil</NavLink></li>
              <li><NavLink to="/menu" className="footer-link">Menu</NavLink></li>
              <li><NavLink to="/bar-cocktails" className="footer-link">Bar & Cocktails</NavLink></li>
              <li><NavLink to="/gallery" className="footer-link">Galerie</NavLink></li>
              <li><NavLink to="/testimonials" className="footer-link">Avis</NavLink></li>
              <li><NavLink to="/about" className="footer-link">À Propos</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
              <li><NavLink to="/reservations" className="footer-link">Réservations</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-light mt-12 pt-8 text-center text-beige opacity-80">
          <p>&copy; {new Date().getFullYear()} Le Centre Restaurant. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;