import React from 'react';
// import pages
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

// import routes route & useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
