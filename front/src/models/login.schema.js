import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email format")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password too short")
    .test(
      "has-uppercase",
      "Password must contain at least one uppercase letter",
      (value) => {
        return /[A-Z]/.test(value);
      }
    )
    .required("Please enter a password"),
});

export default loginSchema;
