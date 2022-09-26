// import route from 'vendor/tightenco/ziggy/src/js';
import NavLink from './NavLink';
import ResponsiveNavLink from './ResponsiveNavLink';

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
            <NavLink href={route('register')} className='focused'>
              <li>sign up</li>
            </NavLink>
            <NavLink href={route('login')} className='focused'>
              <li>login</li>
            </NavLink>
            <ResponsiveNavLink href={route('logout')} method="post" className='focused'>
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