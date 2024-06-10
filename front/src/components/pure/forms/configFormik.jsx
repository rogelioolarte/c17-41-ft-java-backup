import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import configSchema from "../../../models/config.schema";
import { UserContext } from "../../../contexts/user.context";
import { updateUserInfo } from "../../../services/userConfigServices";
import "../../../styles/userConfigStyles.scss";

function ConfigFormik() {
  const { loggedUser, assignUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const initialValues = {
    firstName: loggedUser.firstName,
    lastName: loggedUser.lastName,
    idPassport: loggedUser.idPassport,
    email: loggedUser.email,
    password: loggedUser.password,
    avatar: loggedUser.avatar,
    account: loggedUser.account,
  };

  const navigateToErrorPage = (error) => {
    navigate(`/error?message=${encodeURIComponent(error)}`);
  };

  const handleSubmit = async (values) => {
    const updatedUser = await updateUserInfo(
      loggedUser.id,
      values.firstName,
      values.lastName,
      values.idPassport,
      values.email,
      values.password,
      values.avatar,
      values.account,
      navigateToErrorPage
    );
    if (updatedUser) {
      assignUserInfo(updatedUser);
      window.location.reload();
    }
  };

  return (
    <div className="config-section col-xl-8 col-md-10 col-12">
      <div className="card">
        <div className="card-header">
          <h1>User configuration</h1>
        </div>
        <div className="card-body">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={configSchema}
          >
            <Form>
              <div className="config-form">
                <div className="config-element">
                  <label htmlFor="first-name">First name</label>
                  <Field
                    type="text"
                    id="first-name"
                    name="firstName"
                    className="config-field"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="last-name">Last name</label>
                  <Field
                    type="text"
                    id="last-name"
                    name="lastName"
                    className="config-field"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="id-passport">ID or Passport</label>
                  <Field
                    type="text"
                    id="id-passport"
                    name="idPassport"
                    className="config-field"
                  />
                  <ErrorMessage
                    name="idPassport"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="account">Account</label>
                  <Field
                    type="text"
                    id="account"
                    name="account"
                    className="config-field"
                  />
                  <ErrorMessage
                    name="account"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="config-field"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="text"
                    id="password"
                    name="password"
                    className="config-field"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="avatar">Avatar</label>
                  <Field
                    type="text"
                    id="avatar"
                    name="avatar"
                    className="config-field"
                  />
                  <ErrorMessage
                    name="avatar"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
              <div className="card-footer">
                <button className="config-update-button" type="submit">
                  Update information
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ConfigFormik;
