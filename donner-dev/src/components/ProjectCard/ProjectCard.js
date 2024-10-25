import React, { useState } from 'react';
import './ProjectCard.module.css'; 

const ProjectCard = ({ title, subtitle, description, features, tools, images }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function for expanding/collapsing the card
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-header" onClick={toggleExpand}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <button className="expand-btn">
          {isExpanded ? 'Collapse' : 'See More'}
        </button>
      </div>

      {isExpanded && (
        <div className="card-content">
          <div className="images-container">
            {images.map((imgSrc, index) => (  
              <img key={index} src={imgSrc} alt={`Screenshot ${index + 1}`} />
            ))}
          </div>

          <p className="description">{description}</p>

          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="tools-section">
            <h5>Tools Used:</h5>
            <ul className="tools-list">
              {tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
