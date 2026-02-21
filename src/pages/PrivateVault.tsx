import { useNavigate } from "react-router-dom";
import { useAuth } from "../vault/AuthContext";

export default function PrivateVault() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/vault");
  };

  return (
    <div className="p-6">
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}
