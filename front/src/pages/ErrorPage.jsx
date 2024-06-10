import { Link, useLocation } from "react-router-dom";
import "../styles/styleNotFoundAndError.scss"

function ErrorPage() {
  const location = useLocation();
  const errorMessage = new URLSearchParams(location.search).get("message");

  return (
    <div className="error-section" >
      <h1 className="error-area"> {errorMessage} </h1>
      <h4 className="error-details">
        { errorMessage.includes('409') &&  
          'The current error is due to a problem with the data provided. Please inform the site administrator.' }
      </h4>
      <Link to="/" replace={true}>
        <button type="button" className="btn btn-info">Go to Home</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
