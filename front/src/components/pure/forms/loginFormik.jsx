import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../contexts/user.context";
import loginSchema from "../../../models/login.schema";
import { login } from "../../../services/authService";
import "../../../styles/loginRegisterForms.scss";
import Logo from "../../../assets/payzo.svg";

const LoginFormik = () => {
  const navigate = useNavigate();

  const { assignUserInfo } = useContext(UserContext);

  const navigateToErrorPage = (error) => {
    navigate(`/error?message=${encodeURIComponent(error)}`);
  };

  const handleSubmit = async (values) => {
    const user = await login(
      values.email,
      values.password,
      navigateToErrorPage
    );
    if (user) {
      assignUserInfo(user);
      navigate("/dashboard");
    }
  };

  return (
    <section className="login-register-section col-lg-5 col-md-6 col-12">
      <Link to="/home">
        <img src={Logo} />
      </Link>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className="login-register-form">
          <h1 className="login-register-title big-title">Log in to Payzo</h1>
          <div className="login-register-input big-label">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Example@mail.com"
              className="login-register-field login-field"
              autoFocus
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div className="login-register-input big-label">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="login-register-field login-field"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
            <p className="navigation-link">
              Forgot your password?{" "}
              <NavLink to={"/recover"}>Click here</NavLink>
            </p>
          </div>
          <button className="login-big-button" type="submit">
            Sign in! <i className="fas fa-chevron-right" />
          </button>
          <div>
            <p className="navigation-link big-link">
              Don`t have an account yet?
              <NavLink to={"/register"}> Register now!</NavLink>
            </p>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default LoginFormik;
