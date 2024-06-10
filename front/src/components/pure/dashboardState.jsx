import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import "../../styles/styleDashboard.scss";

function DashboardState() {
    const { loggedUser } = useContext(UserContext);

    useEffect(() => {

    },[loggedUser])
  return (
    <div className="dashboard-state-area">
        Your wallet has { loggedUser.wallet === 0 || loggedUser.wallet === undefined || 
        loggedUser.wallet === null ? '0':loggedUser.wallet } USD
    </div>
  )
}

export default DashboardState