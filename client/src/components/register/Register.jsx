export default function Register() {
  return (
    <div className="auth-page">
      <form className="auth-form">
        <h2>Register</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="metalhead@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
          />
        </div>

        <div className="form-group">
          <label htmlFor="repass">Repeat Password</label>
          <input
            type="password"
            id="repass"
            placeholder="••••••••"
          />
        </div>

        <button className="auth-btn">Create Account</button>

        <p className="auth-switch">
          Already have an account? <span>Login</span>
        </p>
      </form>
    </div>
  );
}
