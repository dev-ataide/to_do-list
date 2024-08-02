// src/components/Card.js
import React from 'react';
import '../styles/Card.css';

const Card = ({ title, content, footer, priorityText, priorityBackgroundColor }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{content}</p>
      </div>
      <div className="card-bottom">
        <div className="card-footer">
          <p>{footer}</p>
        </div>
        <div
          className="card-priority"
          style={{ backgroundColor: priorityBackgroundColor }} // Aplica a cor de fundo
        >
          <p>{priorityText}</p> {/* Exibe o texto da prioridade */}
        </div>
      </div>
    </div>
  );
};

export default Card;
