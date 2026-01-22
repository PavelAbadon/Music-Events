import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";

export default function Register({
	onRegister,
}) {
	
	const navigate = useNavigate();

  	const registerHandler = (values) =>{
		
		const {email, password, repassword} = values

	//todo validation
		if(!email || !password){
			return alert('email or password are requaired')
		}

		if(password !== repassword){
			return alert('password must be equal to repassword')
		}
		try {
			//todo Fake API call
			onRegister(email, password);

			//todo redirection
			navigate('/');
			
		} catch (err) {
			alert(err.message);

		}


  }

  const {formAction, changeHandler, values} = useForm(registerHandler,{
    email: '',
    password: '',
    repassword: ''
  });

  return (
    <div className="auth-page">
      <form className="auth-form" action={formAction} >
        <h2>Register</h2>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="metalhead@example.com"
            name="email"
            onChange={changeHandler}
            value={values.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            name="password"
            onChange={changeHandler}
            value={values.password}
          />
        </div>

        <div className="form-group">
          <label htmlFor="repassword">Repeat Password</label>
          <input
            type="password"
            id="repassword"
            placeholder="••••••••"
            name="repassword"
            onChange={changeHandler}
            value={values.repassword}
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
