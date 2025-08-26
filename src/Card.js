import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

// Import icons
import locIcon from './loc.jpg';
import phoneIcon from './phone.webp';
import skillIcon from './skill.webp';
import expIcon from './profile.webp'; // Using profile icon for experience
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
      {/* Profile Image */}
      <img src={img} alt={name} className="profile-pic" />
      
      {/* Name */}
      <h2>{name}</h2>
      
      {/* Bio */}
      <fieldset>
        <legend>Bio</legend>
        <p>{bio}</p>
      </fieldset>

      {/* Info Rows */}
      <div className="card-info">
        <h4><img src={phoneIcon} alt="Phone" /> {cnt}</h4>
        <h4><img src={skillIcon} alt="Skill" /> {skill}</h4>
        <h4><img src={expIcon} alt="Experience" /> {exp}</h4>
        <h4><img src={locIcon} alt="Location" /> {loc}</h4>
      </div>

      {/* Download Button */}
      <button className="download-btn" onClick={handleDownload}>
        Download as Image
      </button>
    </div>
  );
}
