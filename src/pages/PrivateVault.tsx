import { useNavigate } from "react-router-dom";
import { useAuth } from "../vault/AuthContext";
import NotesSection from "../components/vault/NotesSection";
import LinksSection from "../components/vault/LinksSection";
import FilesSection from "../components/vault/FilesSection";

export default function PrivateVault() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/vault");
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] px-4 py-8">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Private Vault</h1>

          <button
            onClick={handleLogout}
            className="bg-gray-900 px-3 py-2 rounded-md text-white font-medium text-sm scale-95 hover:cursor-pointer"
          >
            Logout
          </button>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Welcome back, {user?.email}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <NotesSection />
          <LinksSection />
        </div>

        <FilesSection />
      </div>
    </div>
  );
}
