function RegPage({roles, publicUrl}) {

  return (
    <main className='form'>
      <div className="square"></div>
      <h2>Sign Up</h2>
      <div className="reg-form">
        <form action="">
          <div><span></span><input className="form-input" type="text" placeholder="username" /></div>
          <div><span></span><input className="form-input" type="email" placeholder="e-mail" /></div>
          <div><span></span><input className="form-input" type="password" placeholder="password" /></div>
          <div className="btn">
            <button>sign up</button>
            Already have an account? <a href="#">Login</a></div>
        </form>
        <div className="soc-icons">
          <div className="or">or</div>
          <p>Sign up with social platforms</p>
          <div className="icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            {/* <select>
              {
                roles.map((role, i)=> <option key={i}>{role}</option> )
              }
            </select> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default RegPage;