import TextInput from "@/components/TextInput";
import TextArea from "@/components/Textarea";
import PrimaryButton from "@/components/PrimaryButton";
import { useForm } from '@inertiajs/inertia-react';
import UserNav from "@/components/UserNav";
import UserTop from "@/components/UserTop";

function Settings({ user }) {

  const {
    data,
    setData,
    // errors,
    put,
    processing
  } = useForm({
    name: user.name,
    last_name: user.last_name,
    username: user.username,
    slogan: user.slogan,
    article: user.article,
    url: user.url,
    degree: user.degree,
    work_experience: user.work_experience,
    job_id: user.job_id,
    email: user.email,
    phone_n: user.phone_n,
    address: user.address,
    languages: user.languages,
    company: user.company,
    fav_company: user.fav_company,
    first_ip: user.first_ip,
  });

  const onHandleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    put(route("user-update", user));
  };

  return (
    <div className="prof-flex">
      <UserNav />
      <div className="prof-info">
        <UserTop />
        <div className="top-heading">
          <p>Account Settings</p>
        </div>
        <p>Profile</p>
        <p className="fade-text">
          This information will be displayed publicly so be careful what you share.
        </p>
        <div className="prof-form">
          <form onSubmit={submit}>
            <p>Account Settings</p>
            <div className="info-row">
              <label htmlFor="name">
                First name
              </label>
              <TextInput
                type="text"
                name="name"
                value={data.name}
                handleChange={onHandleChange}
              />
              <label htmlFor="last_name">
                Last name
              </label>
              <TextInput
                type="text"
                name="last_name"
                value={data.last_name}
                handleChange={onHandleChange}
              />
            </div>
            <div className="info-row">
              <label htmlFor="username">Username</label>
              <TextInput
                type="text"
                name="username"
                value={data.username}
                handleChange={onHandleChange}
              />
              <label htmlFor="username">Slogan</label>
              <TextInput
                type="text"
                name="slogan"
                value={data.slogan}
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
              <label htmlFor="article">Article (about)</label>
              <TextArea
                rows="3"
                className="textarea"
                name="article"
                value={data.article}
                handleChange={onHandleChange} />
              <p className="fade-text">
                Brief description for your profile or article to present you.URLs are hyperlinked.
              </p>
            </div>
            <div className="info-row url">
              <label htmlFor="url">References (URL)</label>
              <TextInput
                type="text"
                name="url"
                value={data.url}
                handleChange={onHandleChange} />
            </div>
            <div className="info-row">
              <label htmlFor="job_id">
                Job Id (Profession)
              </label>
              <TextInput
                type="text"
                name="job_id"
                value={data.job_id}
                handleChange={onHandleChange}
              />
              <label htmlFor="degree">
                Degree (Qualification)
              </label>
              <TextInput
                type="text"
                name="degree"
                value={data.degree}
                handleChange={onHandleChange}
              />
            </div>
            <div className="bio-row">
              <label htmlFor="work_experience">Work Experience</label>
              <TextArea
                rows="3"
                className='textarea'
                name="work_experience" value={data.work_experience} handleChange={onHandleChange} />
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
                value={data.email}
                handleChange={onHandleChange}
              />
              <label htmlFor="phone">
                Phone
              </label>
              <TextInput
                type="tel"
                name="phone_n"
                value={data.phone_n}
                handleChange={onHandleChange}
              />
            </div>
            <div className="info-row">
              <label htmlFor="address">
                Address
              </label>
              <TextInput
                type="text"
                name="address"
                value={data.address}
                handleChange={onHandleChange}
              />
              <label htmlFor="languages">
                Languages
              </label>
              <TextInput
                type="text"
                name="languages"
                value={data.languages}
                handleChange={onHandleChange}
              />
            </div>
            <div className="info-row company">
              <label htmlFor="company">
                Previous (current) Company(-ies)
              </label>
              <TextInput
                type="text"
                name="company"
                value={data.company}
                handleChange={onHandleChange}
              />
              <label htmlFor="fav_company">
                Favourite Company (You'd like to work for)
              </label>
              <TextInput
                type="text"
                name="fav_company"
                value={data.fav_company}
                handleChange={onHandleChange}
              />
            </div>
            <p className="fade-text">This account was created on <i>September 29, 2022, 8:35:40 PM</i> {data.first_ip}.</p>
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

export default Settings;