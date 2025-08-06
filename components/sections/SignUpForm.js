import Link from "next/link";

export default function SignUpForm({ userData, updateUserData, handleSignUp }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateUserData(name, type === "checkbox" ? checked : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(); // triggers validation and nextStep inside SignUpFlow
  };

  return (
    <div className="tf-section-2 pt-60 widget-box-icon">
      <div className="themesflat-container w920">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-section-1">
              <h2 className="tf-title pb-16">Create your account</h2>
              <p className="pb-40">Welcome home — where gamers creators and studios unite</p>
            </div>
          </div>
          <div className="col-12">
            <div className="widget-login">
              <form onSubmit={handleSubmit} className="comment-form">
                <fieldset className="name">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name*"
                    value={userData.name}
                    onChange={handleChange}
                    required
                  />
                </fieldset>

                <fieldset className="email">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="mail@website.com"
                    value={userData.email}
                    onChange={handleChange}
                    required
                  />
                </fieldset>

                <fieldset className="password">
                  <label>Password *</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Min. 8 characters"
                    value={userData.password}
                    onChange={handleChange}
                    required
                  />
                </fieldset>

                <fieldset className="password">
                  <label>Confirm Password *</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={userData.confirmPassword}
                    onChange={handleChange}
                    required
                  />

                  <div className="widget-category-checkbox mt-3">
                    <label>
                      I agree to all Terms, Privacy Policy and fees
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={userData.agreeTerms || false}
                        onChange={handleChange}
                      />
                      <span className="btn-checkbox" />
                    </label>
                  </div>
                </fieldset>

                <div className="btn-submit mb-30">
                  <button type="submit" className="tf-button style-1 h50 w-100">
                    Sign up <i className="icon-arrow-up-right2" />
                  </button>
                </div>
              </form>

              <div className="other">or continue</div>
              <div className="login-other">
                <Link href="#" className="login-other-item">
                  <img src="/assets/images/google.png" alt="Google" />
                  <span>Login with Google</span>
                </Link>
              </div>

              <div className="no-account">
                Already have an account?{" "}
                <Link href="/login" className="tf-color">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
