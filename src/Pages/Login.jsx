import React from 'react';
import './Login.css'
import 'bootstrap/dist/bootstrap.min.css';

const loginform = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="path_to_your_image.jpg" className="App-image" alt="rice plants" />
      </header>
      <div className="login-container">
        <h2>Sign In</h2>
        <p>Log in to your account</p>
        <form>
          <div className="input-group">
            <label htmlFor="email">
              <i className="fa fa-envelope"></i>
              <input type="email" id="email" placeholder="example@email.com" required />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <i className="fa fa-lock"></i>
              <input type="password" id="password" placeholder="Password" required />
            </label>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <p>Don't have an account? <a href="/sign-up">Sign Up</a></p>
      </div>
    </div>
  );
}

export default loginform;