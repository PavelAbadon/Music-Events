import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const {loginHandler} = useContext(UserContext);

  const submitHandler = async ({email, password}) => {
   

    // very simple validation
    if (!email || !password) {
      return alert("email or password are requaired");
    }
    // fake API call
    try {
      await loginHandler(email, password);

      //redirection
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const { register, formAction } = useForm(submitHandler, {
    email: "",
    password: "",
  });

  return (
    <div className="auth-page">
      <form className="auth-form" action={formAction}>
        <h2>Login</h2>

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

        <button className="auth-btn">Login</button>

        <p className="auth-switch">
          Don’t have an account? <span>Register</span>
        </p>
      </form>
    </div>
  );
}
