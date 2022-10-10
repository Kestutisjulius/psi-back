import Checkbox from "@/components/Checkbox";
import SvgLocation from "@/components/SvgLocation";
import TextInput from "@/components/TextInput";
import UserNav from "@/components/UserNav";
import UserTop from "@/components/UserTop";
import { useForm } from '@inertiajs/inertia-react';

function JobFeed() {
  const {
    // data,
    // setData,
    // errors,
    // post,
    // processing
  } = useForm({
  });

  const onHandleChange = (e) => {
    // setData(e.target.name, e.target.value);
  };

  const submit = (e) => {
    // e.preventDefault();
    // post(route("", user));
  };

  return (
    <div className="prof-flex">
      <UserNav />
      <div className="prof-info">
        <UserTop />
        <div className="top-heading">
          <p>Job Feed</p>
        </div>
        <div className="filter">
          <p>Remote Preferences</p>
          <div className="remote-pref">
            <div className="radio all">
              <input type="radio" name="remote-pref" id="all" value='all' />
              <label htmlFor="all">
                All</label>
            </div>
            <div className="radio">
              <input type="radio" name="remote-pref" id="on-site" value='on-site' />
              <label htmlFor="on-site">
                On-Site</label>
            </div>
            <div className="radio">
              <input type="radio" name="remote-pref" id="hybrid" value='hybrid' />
              <label htmlFor="hybrid">
                Hybrid</label>
            </div>
            <div className="radio remote">
              <input type="radio" name="remote-pref" id="remote" remotevalue='remote' />
              <label htmlFor="remote">
                Remote</label>
            </div>
          </div>
          <p>Location</p>
          <div className="location">
            <SvgLocation className='menu inline ' />
            <TextInput
              type="text"
              name='location'
              // value={} 
              placeholder='Everywhere'
              handleChange={onHandleChange} />
          </div>
          <p>Job Function</p>
          <div className="ch-box">
            <Checkbox
              name='all'
              // value={}
              className="box"
              handleChange={onHandleChange}
            />
            <label htmlFor="all">All</label>
          </div>
          <div className="ch-box">
            <Checkbox
              name='acc&finance'
              // value={}
              className="box"
              handleChange={onHandleChange}
            />
            <label htmlFor="acc&finance">Accounting & Finance</label>
          </div>
          <div className="ch-box">
            <Checkbox
              name='administrative'
              // value={}
              className="box"
              handleChange={onHandleChange}
            />
            <label htmlFor="administrative">Administrative</label>
          </div>
          <div className="ch-box">
            <Checkbox
              name='arts&phot'
              // value={}
              className="box"
              handleChange={onHandleChange}
            />
            <label htmlFor="arts&phot">Arts & Photography</label>
          </div>
          <div className="ch-box">
            <Checkbox
              name='business'
              // value={}
              className="box"
              handleChange={onHandleChange}
            />
            <label htmlFor="business">Business Development</label>
          </div>
          <div className="ch-box">
            <Checkbox
              name='communications'
              // value={}
              className="box"
              handleChange={onHandleChange}
            />
            <label htmlFor="communications">Communications</label>
          </div>
          <div className="ch-box">
            <Checkbox
              name='graph_design'
              // value={}
              className="box"
              handleChange={onHandleChange}
            />
            <label htmlFor="graph_design">Graphic Design</label>
          </div>
          <div className="ch-box">
            <Checkbox
              name='human_resources'
              // value={}
              className="box"
              handleChange={onHandleChange}
            />
            <label htmlFor="human_resources">Human Resources</label>
          </div>
          <div className="ch-box">
            <Checkbox
              name='soc_media'
              // value={}
              className="box"
              handleChange={onHandleChange}
            />
            <label htmlFor="soc_media">Social Media</label>
          </div>
          <div className="ch-box">
            <Checkbox
              name='tech'
              // value={}
              className="box"
              handleChange={onHandleChange}
            />
            <label htmlFor="tech">Technology / IT</label>
          </div>
        </div>
      </div>
    </div >
  )
}

export default JobFeed;