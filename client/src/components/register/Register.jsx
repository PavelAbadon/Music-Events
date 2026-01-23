import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Register() {
	
	const navigate = useNavigate();
  const { registerHandler } = useContext(UserContext)

  	const registerSubmitHandler = async (values) =>{
		
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
			await registerHandler(email, password);

			//todo redirection
			navigate('/');
			
		} catch (err) {
			alert(err.message);

		}


  }

  const { formAction, register } = useForm(registerSubmitHandler,{
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
            {...register('email')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            {...register('password')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="repassword">Repeat Password</label>
          <input
            type="password"
            id="repassword"
            placeholder="••••••••"
            {...register('repassword')}
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
