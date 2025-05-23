// src/pages/About.jsx
import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about container">
      <img src="/images/me.jpg" alt="Onur" className="photo" />
      <div className="text">
        <h2>Ben Kimim?</h2>
        <p>
          Merhaba! Ben <strong>Onur</strong>, bilgisayar mühendisliği öğrencisiyim.
          Unity ve Blender ile oyun geliştirme üzerine yoğunlaşıyorum. 
          Aynı zamanda ingilizcemi de geliştirerek yaptığım oyun projelerini globale sunmak istiyorum.
          Şu anlık 3D oyun tasarımı, level dizaynı, ve oyun programcısı olarak kendimi geliştiriyorum.
          Bir yandan kendi assetlerimi üretip, projelerime dahil ederek özgün oyunlar geliştirmeye çalışıyorum.
          Daha önce birçok gamejame katılarak birçok başarı ve tecrübe kazandım. 
          Belli oyun takımları ile birçok proje geliştirdim. 
          
        </p>
        <p>
          Amacım; 2D/3D oyun deneyimleri tasarlayıp yaratıcı projeler üreterek özgün ve kaliteli projeler ile oyun dünyasına yeni bir ses getirmek . 
          Takım çalışmasına ve temiz koda önem veriyorum. 
          Öğrendiklerimi paylaşarak büyüyeceğime inanıyorum.
        </p>
      </div>
    </section>
);
}
