import React from 'react';
import './header.scss';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
function Header() {
  return (
    <div className='gpt3__header ' id='home'>
      <div className='gpt3__header-content'>
        <h2 className='gradient-text'>
          Let’s Build Something amazing with GPT-3 OpenAI
        </h2>
        <p className='gpt3__header-content-text'>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className='gpt3__header-content-input'>
          <input
            type='email'
            placeholder='
          Your Email Address'
          />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content-people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='' />
      </div>
    </div>
  );
}

export default Header;
