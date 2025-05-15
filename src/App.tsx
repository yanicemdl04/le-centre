import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Reservations from './pages/Reservations';
import Testimonials from './pages/Testimonials';
import BarCocktails from './pages/BarCocktails';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="bar-cocktails" element={<BarCocktails />} />
      </Route>
    </Routes>
  );
};

export default App;