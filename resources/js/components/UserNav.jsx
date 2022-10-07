import SvgBilling from './SvgBilling'
import SvgDashboard from "./SvgDashboard";
import SvgMark from "./SvgMark";
import SvgPortfolio from "./SvgPortfolio";
import SvgProfile from "./SvgProfile";
import SvgSettings from "./SvgSettings";
import SvgKey from "./SvgKey";
import SvgUser from "./SvgUser";
import SvgLogout from "./SvgLogout";
import { Link } from '@inertiajs/inertia-react';

function UserNav() {
  return (
    <div className="prof-nav">
      <p>KristinaWorkSpace</p>
      <div className="svg">
        <SvgUser className='user' />
      </div>
      <ul>
        <li><span>
          <SvgDashboard className='menu' />
        </span> Dashboard</li>
        <Link
          href={route('user-profile')}
          className='plain'>
          <li><span>
            <SvgProfile className='menu' />
          </span> Profile</li>
        </Link>
        <Link
          href={route('user-jobfeed')}
          className='plain'>
          <li><span>
            <SvgPortfolio className='menu' />
          </span> Job feed</li>
        </Link>
        <li><span>
          <SvgMark className='menu' />
        </span> Save Jobs</li>
        <Link
          href={route('user-settings')}
          className='plain'>
          <li><span>
            <SvgSettings className='menu' />
          </span> Account Settings</li>
        </Link>
        <li><span>
          <SvgKey className='menu' />
        </span> Password</li>
        <li className="billing"><span>
          <SvgBilling className='menu' />
        </span>Billing</li>
        <Link
          href={route('logout')} method='post' className='plain'>
          <li className="logout">
            <span><SvgLogout className='menu' />
            </span>Logout</li>
        </Link>
      </ul>
    </div>
  )
}

export default UserNav;