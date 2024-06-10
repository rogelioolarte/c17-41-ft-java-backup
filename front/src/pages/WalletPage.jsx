import WalletSection from "../components/container/walletSection";
import useProtectedRoute from "../hooks/useProtectedRoute";
import "../styles/styleWallet.scss";

function WalletPage() {
  useProtectedRoute();
  return (
    <div className="d-flex justify-content-center wallet-page">
      <WalletSection />
    </div>
  );
}

export default WalletPage;
