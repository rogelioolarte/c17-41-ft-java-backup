import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <div className="error-section">
      <h1 className="error-area">The page you are looking for no longer exists or has been modified.</h1>
      <Link to="/" replace={true}>
        <button type="button" className="btn btn-info">Go to Home</button>
      </Link>
    </div>
  )
}

export default NotFoundPage