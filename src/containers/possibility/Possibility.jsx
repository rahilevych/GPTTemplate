import React from 'react';
import './possibility.scss';
import possibilities from '../../assets/possibilities.png';
function Possibility() {
  return (
    <div className='gpt3__possibility section__padding'>
      <div className='gpt3__possibility-img'>
        <img src={possibilities} alt='' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h2 className='gradient-text'>
          The possibilities are beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 className='orange'>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;
