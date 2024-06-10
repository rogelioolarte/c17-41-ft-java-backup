import LoginFormik from "../components/pure/forms/loginFormik";
import useProtectedRoute from "../hooks/useProtectedRoute";

function LoginPage() {
  useProtectedRoute();

  return (
    <div>
      <LoginFormik />
    </div>
  );
}

export default LoginPage;
