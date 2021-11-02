import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const getPosition = () => {
      setScrollPosition(document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", getPosition);
  }, [scrollPosition]);

  return (
    <header className={` ${scrollPosition > 50 ? "bg-white" : ""}`}>
      <nav>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='Ticket Express' />
          </Link>
        </div>
        <div className='search'>
          <input
            type='text'
            className='fa-search search'
            name='search'
            id='search'
            placeholder='Search'
          />
        </div>
        <div className='nav'>
          <ul className='lg-nav'>
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
          <div className='nav-opener'>
            <i className='fa fa-bars'></i>
          </div>
        </div>
      </nav>
      <div className='nav__target'>
        <div className='nav__container'>
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
          <div className='search'>
            <input
              type='text'
              className='fa-search search'
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
