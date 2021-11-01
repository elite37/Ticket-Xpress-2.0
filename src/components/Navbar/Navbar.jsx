import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <header>
      <nav>
        <div class='logo'>
          <Link to='/'>
            <img src={Logo} alt='Ticket Express' />
          </Link>
        </div>
        <div class='search'>
          <input
            type='text'
            class='fa-search search'
            name='search'
            id='search'
            placeholder='Search'
          />
        </div>
        <div class='nav'>
          <ul class='lg-nav'>
            <li>
              <Link to=''>Bus</Link>
            </li>
            <li>
              <Link to=''>Train</Link>
            </li>
            <li>
              <Link to=''>Flight</Link>
            </li>
            <li>
              <Link to=''>Bookings</Link>
            </li>
            <li>
              <Link to=''>Contact Us</Link>
            </li>
            <li>
              <Link to=''>
                <button>Login</button>
              </Link>
            </li>
            <li>
              <Link to=''>EN</Link>
            </li>
          </ul>
          <div class='nav-opener'>
            <i class='fa fa-bars'></i>
          </div>
        </div>
      </nav>
      <div class='nav__target'>
        <div class='nav__container'>
          <ul>
            <li>
              <Link to=''>Bus</Link>
            </li>
            <li>
              <Link to=''>Train</Link>
            </li>
            <li>
              <Link to=''>Flight</Link>
            </li>
            <li>
              <Link to=''>Bookings</Link>
            </li>
            <li>
              <Link to=''>Contact Us</Link>
            </li>
            <li>
              <Link to=''>
                <button>Login</button>
              </Link>
            </li>
            <li>
              <Link to=''>EN</Link>
            </li>
          </ul>
          <div class='search'>
            <input
              type='text'
              class='fa-search search'
              name='search'
              id='search'
              placeholder='Search'
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
