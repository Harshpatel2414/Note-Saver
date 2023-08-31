import React from "react";

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="logo">
        <img className="flash" alt="Flash" src="flash.png" />
        <div className="logo-text">
          <div className="text-wrapper">FLASH CHAT</div>
          <p className="div">One of the best chat app with many new features</p>
        </div>
      </div>
      <div className="signup-form">
        <form className="sign-up-form">
          <h2 className="text-wrapper-2">Sign Up</h2>
          <div className="div-2 div-wrapper">
            <label htmlFor="name">Name</label>
            <input type='text' name='name' id='name' className="text-wrapper-3" placeholder="Name" require />
          </div>
          <div className="div-2 div-wrapper">
            <label htmlFor="mail">Email</label>
            <input type='email' name='email' className="text-wrapper-3" id='mail' placeholder="Email" require />
          </div>
          <div className="div-2 div-wrapper">
            <label htmlFor="password">Password</label>
            <input type='password' name='pass'  className="text-wrapper-3" placeholder="Password" id='password' require />
          </div>
          <button className="sign-btn">SignUp</button>
        </form>
        <h4 className="text-wrapper-5">or continue with</h4>
        <div className="sign-up-options">
          <img className="optionslogo" alt="Google png" src="google-png.png" />
          <img className="optionslogo" alt="X png" src="x-png.png" />
          <img className="optionslogo" alt="Facebook png" src="facebook-png.png" />
        </div>
      </div>
    </div>
  );
};
export default SignUp;