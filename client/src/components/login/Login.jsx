import { useState } from "react";
import { login } from "../../services/authService.js";
import { useNavigate } from "react-router";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [emptyFields, setEmptyFields] = useState("");
    const navigate = useNavigate();


    const onChange =  (e) => {
        setFormData(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setEmptyFields("All fields are required!");
            return;
        }

        setEmptyFields("");
        try {
            const userData = await login(formData.email, formData.password);
            console.log("LOGGED IN USER:", userData);

            navigate('/');
        } catch (err) {
            setEmptyFields(err.message);
        }
    };



  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={onSubmit}>
        <h2>Login</h2>
        {emptyFields && <p className="form-error">{emptyFields}</p>}


        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            id="email"
            placeholder="metalhead@example.com"
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            id="password"
            placeholder="••••••••"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="auth-btn">Login</button>

        <p className="auth-switch">
          Don’t have an account? <span>Register</span>
        </p>
      </form>
    </div>
  );
}
