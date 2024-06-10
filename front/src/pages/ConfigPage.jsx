import ConfigSection from "../components/container/configSection";
import useProtectedRoute from "../hooks/useProtectedRoute";

function ConfigPage() {
  useProtectedRoute();
  return (
    <div>
      <ConfigSection />
    </div>
  );
}

export default ConfigPage;
