import DashboardPannel from "../components/pure/dashboardPannel";
import DashboardSection from "../components/container/dashboardSection";
import useProtectedRoute from "../hooks/useProtectedRoute";
import "../styles/styleDashboard.scss";
import DashboardState from "../components/pure/dashboardState";

function DashboardPage() {
  useProtectedRoute();

  return (
    <div className="dashboard-init">
      <div className="dashboard-state">
        <DashboardState  />
        <DashboardPannel/>
      </div>
      <DashboardSection className="adapt-total-area" />
    </div>
  );
}

export default DashboardPage;
