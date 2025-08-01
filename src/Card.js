import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import './Card.css';

export default function Card({ name, img, bio, cnt, skill, exp, loc, template }) {
  const cardRef = useRef();

  const handleDownload = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.download = `${name}_card.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <div className={`card template-${template}`} ref={cardRef}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h2>{bio}</h2>
      <h2>📞 {cnt}</h2>
      <h2>🛠️ {skill}</h2>
      <h2>💼 {exp}</h2>
      <h2>📍 {loc}</h2>
      <button className="download-btn" onClick={handleDownload}>
        Download as Image
      </button>
    </div>
  );
}
