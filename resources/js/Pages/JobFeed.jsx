import UserNav from "@/components/UserNav";
import UserTop from "@/components/UserTop";

function JobFeed() {
  return (
    <div className="prof-flex">
      <UserNav />
      <div className="prof-info list">
        <UserTop />
        <div className="top-heading">
          <p>Job Feed</p>
        </div>

      </div>
    </div >
  )
}

export default JobFeed;