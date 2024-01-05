import React from 'react';
import './feature.scss';
const Feature = ({ title, text }) => {
  return (
    <div className='gpt3__feature-container'>
      <div className='gpt3__feature-container-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3__feature-container-text'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
