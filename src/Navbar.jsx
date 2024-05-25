import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/logoimg1.jpg";

const Navbar = () => {
  return (
    <>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav className='navbar navbar-expand-lg navbar-dark' style={{ backgroundColor: '#1F618D' }}>
              <NavLink className='navbar-brand' to='/'>
                <img src={web} alt='Logo' />
              </NavLink>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>

              <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav nav justify-content-end'>
                  <li className='nav-item'>
                    <NavLink className='nav-link font-weight-bold' to='/home' style={{ color: 'black' }}>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link font-weight-bold' to='/service' style={{ color: 'black' }}>
                      Templates
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link font-weight-bold' to='/about' style={{ color: 'black' }}>
                      About
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link font-weight-bold' to='/contact' style={{ color: 'black' }}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
