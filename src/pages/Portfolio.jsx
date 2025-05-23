// src/pages/Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

const projects = [
  {
    title: 'Pirate Game',
    desc: `Bu projemde, 2D kuşbakışı ile bir karakteri canlandırıyoruz. 
           Karakterimiz korsan ve bir gemisi var. Denizlerde ilerleyerek 
           farklı adaları ziyaret edip ganimet ve eşya geliştirmeleri ile 
           kendimizi güçlendirip rakiplerimizi alt ettiğimiz aksiyon dolu bir oyun. 
           Hala geliştirme aşamasında; yeni özelliklerle sürekli güncellenecek.`,
    url: 'https://github.com/Fengfire/Pirate_Game'
  }
  // İleride başka projeler ekleyeceksen burada diziye devam edebilirsin.
];

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section className="portfolio container">
      <h2>Portfolyo</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="card"
            whileHover={{ scale: 1.03 }}
            onClick={() => setActive(p)}
          >
            <img src={p.img} alt={p.title} />
            <div className="card-body">
              <h3>{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={e => e.stopPropagation()}
            >
              <h3>{active.title}</h3>
              <p>{active.desc}</p>
              <a href={active.url} target="_blank" rel="noopener noreferrer">
                Projeyi İncele →
              </a>
              <button onClick={() => setActive(null)}>Kapat</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
);
}
