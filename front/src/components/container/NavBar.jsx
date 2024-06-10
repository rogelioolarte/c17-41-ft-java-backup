import { useEffect, useContext } from "react";
import "../../styles/styleNavbar.scss";
import Logo from "../../assets/payzo.svg";
import Wallet from "../../assets/wallet.svg";
import Dashboard from "../../assets/dashboard.svg";
import Person from "../../assets/person.svg";
import Config from "../../assets/configuration.svg";
import Logout from "../../assets/logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

function NavBar() {
  const { logUserOut, loggedUser } = useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    logUserOut();
    navigate("/");
  }

  useEffect(() => {}, [loggedUser.id]);

  function changeButtons() {
    if (loggedUser.id) {
      return (
        <div className="button-init">
          <NavLink to="/wallet" replace={true}>
            <img className="logo-nav" src={Wallet} alt="Wallet" />
          </NavLink>
          <NavLink to="/dashboard" replace={true} className="navlink-with-avatar">
            <img className="logo-nav nav-dash" src={Dashboard} alt="Dashboard" />
            {loggedUser.avatar ? (
              <img className="logo-nav nav-img" src={`${loggedUser.avatar}`} alt="Avatar" />
            ) : (
              <img className="logo-nav nav-img" src={Person} alt="Dashboard" />
            )}
          </NavLink>
          <NavLink to="/config" replace={true}>
            <img className="logo-nav" src={Config} alt="Config" />
          </NavLink>
          <NavLink to="/" replace={true} onClick={logout}>
            <img className="logo-nav" src={Logout} alt="Logout" />
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="button-init-home">
          <NavLink to="/login" replace={true}>
            <button
              type="button"
              className="btn btn-light btn-sm button-init-left "
            >
              Log in
            </button>
          </NavLink>
          <NavLink to="/register" replace={true}>
            <button
              type="button"
              className="btn btn-info btn-sm button-init-right "
            >
              Register
            </button>
          </NavLink>
        </div>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbare">
      <NavLink to="/" replace={true} className="color-background">
        <img className="logo" src={Logo} alt="Logo" />
      </NavLink>
      {changeButtons()}
    </nav>
  );
}

export default NavBar;
