import UserNav from "@/components/UserNav";
import UserTop from "@/components/UserTop";

function Profile({ user }) {
  return (
    <div className="prof-flex">
      <UserNav />
      <div className="prof-info list">
        <UserTop />
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
            <img src="../img/eye.png" alt="photo" />
          </div>
        </div>
        <div className="info-row">
          <p>Article:</p>
          <p>{user.article ? user.article : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>References(URL):</p>
          <p className="ref">{user.url ? user.url : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Job Id:</p>
          <p>{user.job_id ? user.job_id : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Degree:</p>
          <p>{user.degree ? user.degree : <div className="no-info">no information specified</div>}</p>
        </div>
        <div className="info-row">
          <p>Work experience:</p>
          <p>{user.work_experience ? user.work_experience : <div className="no-info">no information specified</div>}</p>
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
        <p className="fade-text first-ip">This account was created on <i>September 29, 2022, 8:35:40 PM</i> {user.first_ip}.</p>
      </div>
    </div >
  )
}

export default Profile;