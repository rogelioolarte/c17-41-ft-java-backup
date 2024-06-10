import { Outlet } from "react-router-dom";
import "../../styles/styleDashboard.scss";

const DashboardSection = () => {
  return (
    <div className="dashboard-section-init">
      <Outlet />
    </div>
  );
};

DashboardSection.propTypes = {};

export default DashboardSection;
