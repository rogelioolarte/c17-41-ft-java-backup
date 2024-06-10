import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { TOKEN_GET } from "../../config/token";

function ProtectedRoute({ redirectTo, element }) {
  const { loggedUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(loggedUser || TOKEN_GET);

  useEffect(() => {
    setLoggedIn(loggedUser || TOKEN_GET);
  }, [loggedUser]);

  if (loggedIn) {
    return element;
  } else {
    return redirectTo;
  }
}

ProtectedRoute.propTypes = {
  redirectTo: PropTypes.element.isRequired,
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
