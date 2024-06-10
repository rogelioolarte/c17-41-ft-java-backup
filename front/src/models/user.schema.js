import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter your first name'),
  lastName: Yup.string().required('Please enter your last name'),
  idPassport: Yup.string()
    .required('Please give us an ID or Passport number')
    .test(
      'valid format',
      'Format must be that of either an ID or a Passport',
      (value) => {
        const dniRegex = /^\d{7,8}$/;
        const passportRegex = /^P\d{7}$/;
        return dniRegex.test(value) || passportRegex.test(value);
      }
    ),
  email: Yup.string()
    .email('Must be a valid email format')
    .required('Please enter your email'),
  password: Yup.string()
    .min(8, 'Password too short')
    .test(
      'has-uppercase',
      'Password must contain at least one uppercase letter',
      (value) => {
        return /[A-Z]/.test(value);
      }
    )
    .required('Please enter a password'),
  avatar: Yup.mixed()
    .test('fileSize', 'File size too large', (value) => {
      if (!value) return true;
      if(typeof value === "string") return true;
      return value.size <= 5 * 1024; // Máximo 5KB
    })
    .test('fileFormat', 'Invalid file format', (value) => {
      if (!value) return true;
      if(typeof value === "string") return true;
      return (
        value.type === 'image/png' || value.type === 'image/jpeg' || value.type === 'image/jpg'
      ); 
    }),
  account: Yup.string().required('Please enter your account number'),
});

export default userSchema;
