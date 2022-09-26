function Profile({ user }) {
  return (
    <>
      <header>
        <h2>People</h2>
        <ul>
          <li>Dashboard</li>
          <li>Lists</li>
          <li>Workflows</li>
          <li>Forms</li>
          <li>People</li>
        </ul>
        <input type="search" name="" id="" />
        <div className="info">
          <img src="" alt="photo" />
          <div className="main-info">
            <h2>Emma Watson</h2>
            <p>emma.watson@mail.com</p>
            <p>123-456-7890</p>
          </div>
          <div className="select">
            <select name="" id="">
              <option value="">Member</option>
            </select>
            <select name="" id="">
              <option value="">Clear</option>
            </select>
            <select name="" id="">
              <option value="">Options</option>
              <div className="opt-info">
                <p>Married</p>
                <p>Female</p>
                <p>Age 25 years</p>
              </div>
            </select>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="prof-menu">
          <ul>
            <li>Profile</li>
            <li>Activity</li>
            <li>Communication</li>
            <li>Workflows</li>
            <li>Notes</li>
          </ul>
        </div>
        <div className="personal-info">
          <h2>Personal information</h2>
          <div className="info-block">
            <p>Married</p>
            <p>Female</p>
            <p>25 years</p>
          </div>
          <div className="info-block">
            <p>HOME</p>
            <p>WORK</p>
            <p>HOME</p>
            <p>HOME</p>
          </div>
        </div>
      </div>

    </>
  )
}