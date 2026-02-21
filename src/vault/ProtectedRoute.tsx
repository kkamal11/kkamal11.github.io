import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import type { JSX } from "react";
import PageLoader from "../components/PageLoader";

const ALLOWED_EMAIL = "kishorkamal7091@gmail.com";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { user, loading } = useAuth();

  if (loading) return <PageLoader />;

  if (user?.email !== ALLOWED_EMAIL) {
    return <Navigate to="/vault" />;
  }

  return children;
}
