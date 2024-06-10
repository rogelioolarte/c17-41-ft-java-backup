import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/container/NavBar";
import ManagedAlert from "./hooks/managedAlert";

function App() {
  return (
    <div>
      <NavBar />
      { ManagedAlert() }
      <Outlet />
    </div>
  );
}

export default App;
