import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Collaboration from './pages/Collaboration';
import Certificates from './pages/Certificates';
import Testimonials from './pages/Testimonials';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/clients">Restaurants &amp; Hotels</Link></li>
            <li><Link to="/collaboration">Collaboration (B2B)</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>

        {/* Main content */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;