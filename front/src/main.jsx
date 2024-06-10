import ReactDOM from "react-dom/client";
import "./index.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import RecoverPage from "./pages/RecoverPage.jsx";
import WalletPage from "./pages/WalletPage.jsx";
import ShowHistory from "./components/container/ShowHistory.jsx";
import CreateOffer from "./components/pure/forms/CreateOffer.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { UserProvider } from "./contexts/user.context.jsx";
import ConfigPage from "./pages/ConfigPage.jsx";
import RechargeDollars from "./components/pure/rechargeDollars.jsx";

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <Navigate to="/home" />},
      { path: "/home", element: <HomePage /> },
      { path: "/dashboard", element: <DashboardPage />, children: [
        { path: "/dashboard", element: <Navigate to="/dashboard/offer" /> },
        { path: "/dashboard/offer", element: <CreateOffer /> },
        { path: "/dashboard/history", element: <ShowHistory /> },
        { path: "/dashboard/recharge", element: <RechargeDollars /> },
      ]},
      { path: "/wallet", element: <WalletPage /> },
      { path: "/config", element: <ConfigPage /> },
    ] },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/recover", element: <RecoverPage /> },
  { path: "/error", element: <ErrorPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
    
);
