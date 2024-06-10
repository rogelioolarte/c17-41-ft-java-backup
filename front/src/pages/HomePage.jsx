import { Link } from "react-router-dom";
import "../styles/styleHome.scss";

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="home-title">Trade Bitcoin with PAYZO</h1>
      <div className="home-banner">
        <ul>
          <li>Join us and create a wallet</li>
          <li>Sell and Buy Etherium</li>
          <li>Trade with Bitcoin</li>
          <li>To trade and improve your assets and you.</li>
        </ul>
      </div>

      <Link to="/register" replace={true}>
        <button type="button" className="btn btn-info btn-lg button-home">
          Join us
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
