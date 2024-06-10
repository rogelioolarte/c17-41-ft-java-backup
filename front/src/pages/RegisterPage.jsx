import RegisterFormik from "../components/pure/forms/registerFormik";
import useProtectedRoute from "../hooks/useProtectedRoute";

function RegisterPage() {
  useProtectedRoute();
  return (
    <div className="register-page">
      <RegisterFormik />
    </div>
  );
}

export default RegisterPage;
