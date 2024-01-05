import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import './navbar.scss';
import logo from '../../assets/logo.svg';

function LinksList() {
  return (
    <>
      <ul className='gpt3__navbar-links-list'>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>What's is GPT</a>
        </li>
        <li>
          <a href=''>Open AI</a>
        </li>
        <li>
          <a href=''>Case Studies</a>
        </li>
        <li>
          <a href=''>Library</a>
        </li>
      </ul>
    </>
  );
}
function SignBlock() {
  return (
    <>
      <p className='gpt3__navbar-signin'>Sign in</p>
      <button className='gpt3__navbar-signup'>Sign up</button>
    </>
  );
}
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='gpt3__navbar-links'>
        <LinksList />
      </div>
      <div className='gpt3__navbar-sign'>
        <SignBlock />
      </div>

      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu-container scale-up-center '>
            <div className='gpt3__navbar-links-burger'>
              <LinksList />
            </div>
            <div className='gpt3__navbar-sign-mob'>
              <SignBlock />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
