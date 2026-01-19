import { useNavigate } from "react-router";

export default function Login({
  onLogin
}) {
    
    const navigate = useNavigate();

    const loginSubmit = (formData) =>{
        const email = formData.get('email');
        const password = formData.get('password');

        // very simple validation
        if(!email || !password){
			return alert('email or password are requaired')
		}
        // fake API call
        try {
            onLogin(email, password);

        //redirection    
            navigate('/');
            
        } catch (err) {
            alert(err.message);

        } 

    }

  return (
    <div className="auth-page">
      <form className="auth-form" action={loginSubmit}>
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
