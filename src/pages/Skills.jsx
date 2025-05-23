// src/pages/Skills.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCube, faPalette } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const services = [
  {
    icon: faGamepad,
    title: 'Oyun Geliştirme',
    desc: 'Unity (C#) kullanarak 2D ve 3D , platform ve aksiyon oyunları geliştiririm. Fizik, AI ve UI & UX öğelerini entegre ederek oyun projelerinin geliştirilmesine katkı sağlarım.'
  },
  {
    icon: faCube,
    title: '3D Modelleme',
    desc: 'Blender ile karakter, çevre ve objeler modelleyip , rigging ve texturing süreçlerini yönetirim. Oyun içi asset üretimi yaparım ve geliştirilen modeller üzerinde yeni stiller üretebilirim.'
  },
  {
    icon: faPalette,
    title: 'UI/UX Tasarımı',
    desc: 'Figma ve Adobe kullanarak akış şemaları, kaliteli arayüz oluşturur; kullanıcı dostu, erişilebilir şekilde tasarlarım. '
  }
];

const skills = [
  { name: 'C#', level: 75 },
  { name: 'Unity', level: 70 },
  { name: 'Blender', level: 50 },
  { name: 'React', level: 40 },
  { name: 'Python', level: 40 },
  { name: 'Java', level: 35 }
];

export default function Skills() {
  return (
    <section className="skills container">
      <h2>Neler Yapabilirim?</h2>

      {/* 2.1 Hizmet Kartları */}
      <div className="services-grid">
        {services.map(s => (
          <div key={s.title} className="service-card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={s.icon} size="2x" />
            </div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 2.2 Seviye Çubukları */}
      <div className="skill-bars">
        {skills.map(s => (
          <div key={s.name} className="skill-bar">
            <span className="skill-name">{s.name}</span>
            <div className="bar">
              <div
                className="fill"
                style={{ width: `${s.level}%` }}
              />
            </div>
            <span className="skill-percent">{s.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
