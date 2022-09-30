
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
import TextInput from "@/components/TextInput";
import PrimaryButton from "@/components/PrimaryButton";
import { useForm } from '@inertiajs/inertia-react';

function Profile({ user }) {

  const {
    setData,
    post,
    processing,
    errors,
  } = useForm({
    name: '',
    last_name: '',
    username: '',
    email: '',
    phone_n: '',
  });

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("register"));
  };

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
          <li><span>
            <SvgProfile className='menu' />
          </span> Profile</li>
          <li><span>
            <SvgPortfolio className='menu' />
          </span> Job feed</li>
          <li><span>
            <SvgMark className='menu' />
          </span> Save Jobs</li>
          <li><span>
            <SvgSettings className='menu' />
          </span> Account Settings</li>
          <li><span>
            <SvgKey className='menu' />
          </span> Password</li>
          <li className="billing"><span>
            <SvgBilling className='menu' />
          </span>Billing</li>
        </ul>
      </div>
      <div className="prof-info">
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
          <p>Account Settings</p>
        </div>
        <p>Profile</p>
        <p className="fade-text">
          This information will be displayed publicly so be careful what you share.
        </p>
        <div className="prof-form">
          <form
            onSubmit={submit}
          >
            <p>Account Settings</p>
            <div className="info-row">
              <label htmlFor="name">
                First name
              </label>
              <TextInput
                type="text"
                name="name"
                value={user.name}
                handleChange={onHandleChange}
              />
              <label htmlFor="last_name">
                Last name
              </label>
              <TextInput
                type="text"
                name="last_name"
                value={user.last_name}
                handleChange={onHandleChange}
              />
            </div>
            <div className="info-row">
              <label htmlFor="username">Username</label>
              <TextInput
                type="text"
                name="username"
                value={user.username}
                handleChange={onHandleChange}
              />
              <label htmlFor="username">Slogan</label>
              <TextInput
                type="text"
                name="slogan"
                value={user.slogan}
                handleChange={onHandleChange}
              />
            </div>
            <div className="user-photo">
              <div className="photo">
                <label htmlFor="photo">Photo</label>
                <img src="./img/eye.png" alt="photo" />
              </div>
              <input type="file" name="photo" id="photo" />
              <button>Remove</button>
            </div>
            <div className="bio-row">
              <label htmlFor="bio">About</label>
              <textarea name="bio" id="bio"></textarea>
              <p className="fade-text">
                Brief description for your profile.URLs are hyperlinked.
              </p>
            </div>
            <div className="info-row url">
              <label htmlFor="url">URL</label>
              <input type="url" name="url" id="url" />
            </div>
            <div className="info-row">
              <label htmlFor="job_id">
                Job Id
              </label>
              <TextInput
                type="text"
                name="jpb_id"
                value={user.job_id}
                handleChange={onHandleChange}
              />
              <label htmlFor="degree">
                Degree
              </label>
              <TextInput
                type="text"
                name="degree"
                value={user.degree}
                handleChange={onHandleChange}
              />
            </div>
            <div className="bio-row">
              <label htmlFor="work_experience">Work Experience</label>
              <textarea name="work_experience"></textarea>
              <p className="fade-text">
                Brief description of your work experience.
              </p>
            </div>
            <div className="line"></div>
            <p>Personal Information</p>
            <p className="fade-text">This information will be displayed publicly so be careful what you share.</p>
            <div className="info-row">
              <label htmlFor="email">
                Email
              </label>
              <TextInput
                type="email"
                name="email"
                value={user.email}
                handleChange={onHandleChange}
              />
              <label htmlFor="phone">
                Phone
              </label>
              <TextInput
                type="tel"
                name="phone"
                value={user.phone_n}
                handleChange={onHandleChange}
              />
            </div>
            <div className="info-row">
              <label htmlFor="company">
                Company
              </label>
              <TextInput
                type="text"
                name="company"
                value={user.company}
                handleChange={onHandleChange}
              />
              <label htmlFor="location">
                Location
              </label>
              <TextInput
                type="text"
                name="location"
                value={user.location}
                handleChange={onHandleChange}
              />
            </div>
            <p className="fade-text">This account was created on {user.first_ip}.</p>
            <div className="line"></div>
            <div className="btns">
              <PrimaryButton
                processing={processing}
              >Update</PrimaryButton>
              <button>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile;