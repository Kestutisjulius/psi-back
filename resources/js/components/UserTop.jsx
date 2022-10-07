import SvgArrowDown from "@/components/SvgArrowDown";
import SvgNotifications from "@/components/SvgNotifications";
import SvgSearch from "@/components/SvgSearch";

function UserTop() {
  return (
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
        <img src="../img/eye.png" alt="photo" />
        <p>User</p>
        <div className="arrow-down">
          <SvgArrowDown className='menu' />
        </div>
      </div>
    </div>
  )
}

export default UserTop;