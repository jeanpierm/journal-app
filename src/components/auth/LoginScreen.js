import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  startGoogleLogin,
  startLoginWithEmailPassword,
} from "../../actions/auth";
import { registerAuthRoute } from "../../helpers/routes";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const { loading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleLogin}
      >
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary btn-block"
          disabled={loading}
          type="submit"
        >
          Login
        </button>

        {/* google button */}
        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to={registerAuthRoute}>
          Create new account
        </Link>
      </form>
    </>
  );
};
