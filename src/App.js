import React from 'react';

import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import AnimatedRoutes from './AnimatedRoutes';
import Footer from './components/Footer';

import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <AnimatedRoutes />
      <Footer />
    </>
  );
}
