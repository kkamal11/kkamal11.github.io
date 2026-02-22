import AuthProvider from "./AuthContext";
import VaultRoutes from "./VaultRoutes";

export default function VaultShell() {
  return (
    <AuthProvider>
      <VaultRoutes />
    </AuthProvider>
  );
}