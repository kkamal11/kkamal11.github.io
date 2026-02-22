import { useEffect, useState } from "react";
import Icon from "./layout/Icon";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../vault/firebase";
import { useNavigate } from "react-router-dom";

const ALLOWED_EMAIL = "kishorkamal7091@gmail.com";

export default function VaultLogin() {
  const [blink, setBlink] = useState(true);
  const [denied, setDenied] = useState(false);
  const [sec, setSec] = useState(4);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user?.email === ALLOWED_EMAIL) {
        navigate("/vault/private-vault");
      }
    });

    return () => unsub();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      if (user.email !== ALLOWED_EMAIL) {
        setDenied(true);
        setSec(4);

        const interval = setInterval(() => {
          setSec((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        setTimeout(async () => {
          await signOut(auth);
          navigate("/");
        }, 4000);

        return;
      }

      navigate("/vault/private-vault");
    } catch (error: any) {
        if (error.code === "auth/popup-closed-by-user") {
            return;
        }
        navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">

        {!denied && (
          <p
            className={`text-center text-sm font-medium mb-6 transition-opacity duration-300 ${
              blink ? "opacity-90" : "opacity-20"
            } text-red-600`}
          >
            ⚠ You won't be authorised to login
          </p>
        )}

        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-2">
          Vault Access
        </h1>

        <p className="text-gray-500 text-center mb-4 text-sm">
          Private developer space — restricted access
        </p>

        {denied && (
          <p className="text-center text-sm text-red-600 mb-4 animate-pulse font-medium">
            Unauthorized human detected... Redirecting in {sec}s
          </p>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={denied}
          className={`w-full flex items-center justify-center gap-3 
          transition-all font-medium py-3 rounded-xl border
          ${
            denied
              ? "bg-red-100 text-red-700 border-red-300 cursor-not-allowed"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300 cursor-pointer"
          }`}
        >
          {denied ? (
            "ACCESS DENIED"
          ) : (
            <>
              <Icon path="/icons/google.svg" alt_text="Google Icon" width={22} />
              Continue with Google
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center mt-6">
          If you are not me… this won't end well.
        </p>
      </div>
    </div>
  );
}
