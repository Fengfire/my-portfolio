import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import PageWrapper from './PageWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              {({ onComplete }) => <Home onAnimationComplete={onComplete} />}
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              {({ onComplete }) => <About onAnimationComplete={onComplete} />}
            </PageWrapper>
          }
        />
        <Route
          path="/skills"
          element={
            <PageWrapper>
              {({ onComplete }) => <Skills onAnimationComplete={onComplete} />}
            </PageWrapper>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageWrapper>
              {({ onComplete }) => <Portfolio onAnimationComplete={onComplete} />}
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              {({ onComplete }) => <Contact onAnimationComplete={onComplete} />}
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
