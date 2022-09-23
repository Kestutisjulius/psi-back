import { Link } from '@inertiajs/inertia-react';
// import route from 'vendor/tightenco/ziggy/src/js';
import NavLink from './NavLink';

function Nav() {
  return (
    <header className="nav">
      <ul className='nav-links'>
        <img src='./img/PSI_Logo.png' className="logo" alt="logo" />
        <NavLink
          to='/'>
          <li>home</li>
        </NavLink>
        <li>auction</li>
        <li>shop</li>
        <li>ads/advertisings</li>
        <li>snake</li>
        <li>jobs</li>
        <li className='dropdown'>account
          <ul className='dropdown-content'>
            <NavLink href={route('register')}>
              <li>sign up</li>
            </NavLink>
            <li>login</li>
            <Link href={route('logout')} className='focused'>
              <li>Logout</li>
            </Link>
          </ul>
        </li>
        <li>en</li>
      </ul>
    </header >
  )
}

export default Nav;