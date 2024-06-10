import * as Yup from "yup";

const configSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  idPassport: Yup.string()
    .required("Please give us an ID or Passport number")
    .test(
      "valid format",
      "Format must be that of either an ID or a Passport",
      (value) => {
        const dniRegex = /^\d{7,8}$/;
        const passportRegex = /^P\d{7}$/;
        return dniRegex.test(value) || passportRegex.test(value);
      }
    ),
  email: Yup.string()
    .email("Must be a valid email format")
    .required("Please enter your email"),
  password: Yup.string().test(
    "is-valid",
    "Password must be at least 8 characters long and contain at least one uppercase letter",
    (value) => {
      if (!value) return true;
      return Yup.string()
        .min(8, "Password too short")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .isValidSync(value);
    }
  ),
  /* avatar: Yup.mixed()
    .test('fileSize', 'File size too large', (value) => {
      if (!value) return true;
      return value.size <= 1024 * 1024; // Máximo 1MB
    })
    .test('fileFormat', 'Invalid file format', (value) => {
      if (!value) return true;
      return (
        value.type === 'image/png' || value.type === 'image/jpeg'
      ); 
    }), */
  account: Yup.string().required("Please enter your account number"),
});

export default configSchema;
