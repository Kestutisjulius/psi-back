import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="nav">
      <ul className='nav-links'>
        <img src={require('../img/PSI_Logo.png')} className="logo" alt="logo" />
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
            <NavLink to='/register' className='none' style={({ isActive }) => (isActive ? { color: '#ff6e6e' } : null)} >
              <li>sign up</li>
            </NavLink>
            <li>login</li>
            <Link
              to='/logout' className='none'>
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