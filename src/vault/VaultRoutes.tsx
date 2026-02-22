import { Routes, Route } from "react-router-dom";
import VaultLogin from "../components/VaultLogin";
import PrivateVault from "../pages/PrivateVault";
import ProtectedRoute from "./ProtectedRoute";

export default function VaultRoutes() {
  return (
    <Routes>
      <Route path="/" element={<VaultLogin />} />
      <Route
        path="private-vault"
        element={
          <ProtectedRoute>
            <PrivateVault />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
