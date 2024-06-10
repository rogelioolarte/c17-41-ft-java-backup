import { Link } from "react-router-dom";
import "../../styles/styleDashboard.scss";

const DashboardPannel = () => {
  return (
    <div className="dashboard-pannel-init ">
      <Link to="/dashboard/offer">
        <button
          type="button"
          className="btn btn-light  btn-outline-dark btn-lg dashboard-button-init ">
          Buy or Sell Crypto
        </button>
      </Link>
      <Link to="/dashboard/history">
        <button type="button" className="btn btn-light btn-outline-dark btn-lg dashboard-button-init">
          Show Transactions
        </button>
      </Link>
      <Link to="/dashboard/recharge">
        <button type="button" className="btn btn-light btn-outline-dark btn-lg dashboard-button-init">
          Recharge your Wallet
        </button>
      </Link>
    </div>
  );
};

DashboardPannel.propTypes = {};

export default DashboardPannel;
