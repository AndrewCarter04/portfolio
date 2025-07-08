import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import BaseLayout from './components/baseLayout';
import { projects } from './components/projectData';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Awards from './pages/awards';


function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
            {projects.map(({ slug, component: Component }) => (
              <Route key={slug} path={`/projects/${slug}`} element={<Component />} />
            ))}
          <Route path="/awards" element={<Awards />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;