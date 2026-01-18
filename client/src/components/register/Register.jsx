import { useNavigate } from "react-router";

export default function Register({
	onRegister,
}) {
	
	const navigate = useNavigate();

  	const registerSubmit = (formData) =>{
		
		const email = formData.get('email');
		const password = formData.get('password');
		const repassword = formData.get('repassword');

	//todo validation
		if(!email || !password){
			return alert('email or password are requaired')
		}

		if(password !== repassword){
			return alert('password must be equal to repassword')
		}
	//todo Fake API call
		onRegister(email);

	//todo redirection
	navigate('/');

  }

  return (
    <div className="auth-page">
      <form className="auth-form" action={registerSubmit} >
        <h2>Register</h2>
        
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

        <div className="form-group">
          <label htmlFor="repassword">Repeat Password</label>
          <input
            type="password"
            id="repassword"
            placeholder="••••••••"
            name="repassword"
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
