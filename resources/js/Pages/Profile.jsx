
function Profile({ user }) {
  return (
    <div className="prof-flex">
      <div className="prof-nav">
        <p>KristianWorkSpace</p>
        <svg>
          {/* <use xlink:href="#profile-pic" id=" /> */}
        </svg>
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Job feed</li>
          <li>Save Jobs</li>
          <li>Account Settings</li>
        </ul>
      </div>
      <div className="prof-info">
        <div className="top-row">
          <div className="search">
            <input type="search" name="search" id="search" />
            <button>search</button>
          </div>
          <div className="top-right">
            <img src="./img/Cristian.jpg" alt="photo" />
            <p>User</p>
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
          <form action="">
            <p>Account Settings</p>
            <div className="info-row">
              <label htmlFor="name">
                First name
              </label>
              <input type="text" name="name" id="name" />
              <label htmlFor="last_name">
                Last name
              </label>
              <input type="text" name="last_name" id="last_name" />
            </div>
            <label htmlFor="username">Username</label>
            <div className="info-row">
              <input type="text" name="username" id="username" />
            </div>
            <div className="user-photo">
              <div className="photo">
                <label htmlFor="photo">Photo</label>
                <img src="./img/Cristian.jpg" alt="photo" />
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
            <p>Personal Information</p>
            <p className="fade-text">This information will be displayed publicly so be careful what you share.</p>
            <div className="info-row">
              <label htmlFor="email">
                Email
              </label>
              <input type="email" name="email" id="email" />
              <label htmlFor="phone">
                Phone
              </label>
              <input type="tel" name="phone" id="phone" />
            </div>
            <div className="info-row">
              <label htmlFor="company">
                Company
              </label>
              <input type="text" name="company" id="company" />
              <label htmlFor="location">
                Location
              </label>
              <input type="text" name="location" id="location" />
            </div>
            <div className="btns">
              <button>Update</button>
              <button>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile;