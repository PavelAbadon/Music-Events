
export default function Login() {
        

  return (
    <div className="auth-page">
      <form className="auth-form" >
        <h2>Login</h2>
        
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                placeholder="metalhead@example.com"
                name="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
                type="password"
                id="password"
                placeholder="••••••••"
                name="password"
            
          />
        </div>

        <button className="auth-btn">Login</button>

        <p className="auth-switch">
          Don’t have an account? <span>Register</span>
        </p>
      </form>
    </div>
  );
}
