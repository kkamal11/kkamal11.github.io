import { useNavigate } from "react-router-dom";
import { useAuth } from "../vault/AuthContext";
import NotesSection from "../components/vault/NotesSection";
import LinksSection from "../components/vault/LinksSection";
import FilesSection from "../components/vault/FilesSection";
import { SignOut, Lock } from "phosphor-react";

export default function PrivateVault() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/vault");
  };

  // Initials from email
  const initials = user?.email
    ? user.email.split("@")[0].slice(0, 2).toUpperCase()
    : "KK";

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-[#f5f3ee] px-4 py-8"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        {/* ── Header ── */}
        <div className="flex items-center justify-between pb-5 border-b border-gray-900">
          <div className="flex items-center gap-3">
            {/* Lock icon */}
            <div className="w-8 h-8 rounded-full bg-white border border-[#e8e6df] flex items-center justify-center shrink-0">
              <Lock size={14} className="text-[#c8440a]" weight="duotone" />
            </div>
            <div>
              <h1
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
                className="text-2xl font-light text-gray-900 leading-none"
              >
                Private <em className="text-[#c8440a]">Vault</em>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* User badge */}
            <div className="hidden sm:flex items-center gap-2 border border-[#e8e6df] bg-white rounded-[3px] px-3 py-1.5">
              <div
                className="w-5 h-5 rounded-full bg-[#f5f3ee] border border-[#e8e6df] flex items-center justify-center shrink-0"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#c8440a" }}
              >
                {initials}
              </div>
              <span
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-[10px] tracking-widest uppercase text-gray-500 max-w-[160px] truncate"
              >
                {user?.email}
              </span>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="flex items-center gap-1.5 text-[9px] tracking-widest uppercase
                border border-gray-900 text-gray-900 px-3 py-2 rounded-[3px]
                hover:bg-gray-900 hover:text-white
                transition-colors duration-150 cursor-pointer"
            >
              <SignOut size={11} />
              Logout
            </button>
          </div>
        </div>

        {/* ── Notes + Links ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NotesSection />
          <LinksSection />
        </div>

        {/* ── Files ── */}
        <FilesSection />

      </div>
    </div>
  );
}