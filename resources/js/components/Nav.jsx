// import route from 'vendor/tightenco/ziggy/src/js';
import NavLink from './NavLink';
import ResponsiveNavLink from './ResponsiveNavLink';

// import { Link, NavLink } from 'react-router-dom';
function Nav() {
  return (
    <header className="nav">
      <ul className='nav-links'>
        {/* <img src={require('../img/PSI_Logo.png')} className="logo" alt="logo" /> */}
        <NavLink
          to='/'
          className='none'
          style={({ isActive }) => (isActive ? { color: '#ff6e6e' } : null)}
        >
          <li>home</li>
        </NavLink>
        <li>auction</li>
        <li>shop</li>
        <li>ads/advertisings</li>
        <li>snake</li>
        <li>jobs</li>
        <li className='dropdown'>account
          <ul className='dropdown-content'>
            <NavLink href={route('register')} className='none' style={({ isActive }) => (isActive ? { color: '#ff6e6e' } : null)} >
              <li>sign up</li>
            </NavLink>
            <NavLink href={route('login')} className='none'>
            <li>login</li>
            </NavLink>
            <ResponsiveNavLink href={route('logout')} method="post"className='none'>
              <li>Logout</li>
              </ResponsiveNavLink>
          </ul>
        </li>
        <li>en</li>
      </ul>
    </header >
  )
}

export default Nav;