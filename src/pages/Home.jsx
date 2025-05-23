import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content container">
        <h1>Merhaba, ben Onur!</h1>
        <p>Bilgisayar mühendisliği öğrencisi ve tutkulu bir geliştiriciyim.</p>
        <a href="/portfolio" className="btn">
          Projelerime Göz At
        </a>
      </div>
    </section>
  );
}
