import { Formik, Field, Form } from "formik";
import { NavLink } from "react-router-dom";
import "../../../styles/recoverAccount.scss";

const RecoverFormik = () => {
  return (
    <section className="recover-section">
      <Formik initialValues={{ email: "" }}>
        <Form className="recover-form">
          <h1>Reset your password</h1>
          <p className="recover-instructions">
            Enter your email address to reset your password
          </p>
          <div>
            <label htmlFor="recover-email">Email</label>
            <Field
              type="email"
              id="recover-email"
              name="recover-email"
              placeholder="Example@mail.com"
              className="recover-field"
              autoFocus
            />
          </div>
          <button type="submit">
            Recover <i className="fas fa-chevron-right" />
          </button>
        </Form>
      </Formik>
      <div>
        <NavLink to={"/login"}>
          <i className="fas fa-chevron-left" /> Go back to login
        </NavLink>
      </div>
    </section>
  );
};

export default RecoverFormik;
