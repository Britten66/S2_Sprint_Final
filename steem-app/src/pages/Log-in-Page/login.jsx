import { useState } from "react";
import "./Login.css";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPassErr, setUserPassErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sets error to blank so I dosent keep displaying.
    setUserEmailErr("");
    setUserPassErr("");

    // Check if Email input is blank.
    if (userEmail === "") {
      setUserEmailErr("Please enter your E-mail");
      console.log("Error e-mail cannot be empty");
      return;
    }
    // Check if Email input is a valided Email.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
      setUserEmailErr("Please enter a valid email address");
      return;
    }
    // Check if the password input is empty.
    if (userPass === "") {
      setUserPassErr("Please enter your password");
      console.log("Error password canot be empty");
      return;
    }

    console.log("Login Attempt:", { userEmail, userPass });
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="logo-icon">⚡</div>
            <h2>Sign In</h2>
            <p>Access your account</p>
          </div>

          <form
            className="login-form"
            id="loginForm"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={userEmail} // 1. Lock the input to our state
                  onChange={(e) => setUserEmail(e.target.value)} // 2. Update state when typing
                />
                <label htmlFor="email">Email</label>
                <span className="input-line"></span>
              </div>
              <span className={`error-message ${userEmailErr ? "show" : ""}`}>
                {userEmailErr}
              </span>
            </div>

            <div className="form-group">
              <div className="input-wrapper password-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  autoComplete="password"
                  value={userPass}
                  onChange={(e) => setUserPass(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <button
                  type="button"
                  className="password-toggle"
                  id="passwordToggle"
                  aria-label="Toggle password visibility"
                >
                  <span className="toggle-icon"></span>
                </button>
                <span className="input-line"></span>
              </div>
              <span className={`error-message ${userPassErr ? "show" : ""}`}>
                {userPassErr}
              </span>
            </div>

            <div className="form-options">
              <div className="remember-wrapper">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember" className="checkbox-label">
                  <span className="custom-checkbox"></span>
                  Keep me signed in
                </label>
              </div>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-btn btn">
              <span className="btn-text">Sign In</span>
              <span className="btn-loader"></span>
              <span className="btn-glow"></span>
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-btn google-btn">
              <span className="social-icon google-icon"></span>
              <span>Continue with Google</span>
            </button>
            <button type="button" className="social-btn apple-btn">
              <span className="social-icon apple-icon"></span>
              <span>Continue with Apple</span>
            </button>
          </div>

          <div className="signup-link">
            <p>
              New here? <a href="#">Create an account</a>
            </p>
          </div>
        </div>

        {/* Background Effects */}
        <div className="background-effects">
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>
          <div className="glow-orb glow-orb-3"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
