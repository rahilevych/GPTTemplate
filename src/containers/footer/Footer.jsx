import React from 'react';
import './footer.scss';
const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer__heading'>
        <h2 className='gradient__text'>
          Do you want to step in to the future before others
        </h2>
        <div className='footer__button'>
          <button type='button'>Request Early Access</button>
        </div>
      </div>
      <div className='footer__content'>
        <div className='footer__logo'>
          <h2>GPT3</h2>
          <p>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className='footer__info'>
          <div className='footer__links'>
            <li>
              <ul>Links</ul>
              <ul>Overons</ul>
              <ul>Social Media</ul>
              <ul>Counters</ul>
              <ul>Contact</ul>
            </li>
          </div>
          <div className='footer__links'>
            <li>
              <ul>Company</ul>
              <ul>Company</ul>
              <ul>Privacy Policy</ul>
              <ul>Contact</ul>
            </li>
          </div>
          <div className='footer__links'>
            <li>
              <ul>Get in touch</ul>
              <ul>
                Crechterwoord K12
                <br /> 182 DK Alknjkcb
              </ul>
              <ul>085-132567</ul>
              <ul>info@payme.net</ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
