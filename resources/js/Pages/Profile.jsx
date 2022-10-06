
import SvgArrowDown from "@/components/SvgArrowDown";
import SvgBilling from "@/components/SvgBilling";
import SvgDashboard from "@/components/SvgDashboard";
import SvgMark from "@/components/SvgMark";
import SvgNotifications from "@/components/SvgNotifications";
import SvgPortfolio from "@/components/SvgPortfolio";
import SvgProfile from "@/components/SvgProfile";
import SvgSearch from "@/components/SvgSearcj";
import SvgSettings from "@/components/SvgSettings";
import SvgKey from "@/components/SvgKey";
import SvgUser from "@/components/SvgUser";
import { Link } from '@inertiajs/inertia-react';
import SvgLogout from "@/components/SvgLogout";

function Profile({ user }) {

  return (
    <div className="prof-flex">
      <div className="prof-nav">
        <p>{user.name}WorkSpace</p>
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
          <li><span>
            <SvgPortfolio className='menu' />
          </span> Job feed</li>
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
      <div className="prof-info list">
        <div className="top-row">
          <div className="search">
            <input type="search" name="search" id="search" placeholder="Search" />
            <button>
              <SvgSearch className='menu' />
            </button>
          </div>
          <div className="top-right">
            <div className="notific">
              <span className="active"></span>
              <SvgNotifications className='menu' />
            </div>
            <img src="./img/eye.png" alt="photo" />
            <p>User</p>
            <div className="arrow-down">
              <SvgArrowDown className='menu' />
            </div>
          </div>
        </div>
        <div className="top-heading">
          <p>Profile</p>
        </div>
        <p>Profile information</p>
        <p className="fade-text">
          To change your profile information go to Account settings.
        </p>
        <div className="info-row">
          <p>First name:</p>
          <p>{user.name ? user.name : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Last name:</p>
          <p>{user.last_name ? user.last_name : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Username:</p>
          <p>{user.username ? user.username : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Slogan:</p>
          <p>{user.slogan ? user.slogan : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row photo">
          <p>Photo:</p>
          <div className="photo">
            <img src="./img/eye.png" alt="photo" />
          </div>
        </div>
        <div className="info-row">
          <p>Your Article:</p>
          <p>{user.article ? user.article : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>References(URL):</p>
          <p>{user.url ? user.url : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Job Id:</p>
          <p>{user.job_id ? user.job_id : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Your Degree:</p>
          <p>{user.degree ? user.degree : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Work experience:</p>
          <p>{user.experience ? user.experience : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="line"></div>
        <p>Personal Information</p>
        <p className="fade-text">To change your personal information go to Account settings.</p>
        <div className="info-row">
          <p>Email:</p>
          <p>{user.email ? user.email : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Phone nr:</p>
          <p>{user.phone_n ? user.phone_n : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Address:</p>
          <p>{user.address ? user.address : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Languages:</p>
          <p>{user.languages ? user.languages : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Previous (current) Company:</p>
          <p>{user.company ? user.company : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Favourite Company (you'd like to work for):</p>
          <p>{user.fav_company ? user.fav_company : <div className="no-info">no information specified</div>}</p>
        </div>
        <p className="fade-text">This account was created on <i>September 29, 2022, 8:35:40 PM</i> {user.first_ip}.</p>
      </div>
    </div >
  )
}

export default Profile;