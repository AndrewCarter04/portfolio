import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BaseLayout from './components/baseLayout';
import PageTransition from './components/pageTransition';
import { projects } from './components/projectData';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Awards from './pages/awards';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        {projects.map(({ slug, component: Component }) => (
          <Route key={slug} path={`/projects/${slug}`} element={<PageTransition><Component /></PageTransition>} />
        ))}
        <Route path="/awards" element={<PageTransition><Awards /></PageTransition>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <BaseLayout>
        <AnimatedRoutes />
      </BaseLayout>
    </Router>
  );
}

export default App;