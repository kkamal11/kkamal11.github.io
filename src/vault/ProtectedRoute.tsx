import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import type { JSX } from "react";
import PageLoader from "../components/layout/PageLoader";

const ALLOWED_EMAIL: string[] = ["kishorkamal7091@gmail.com"];

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { user, loading } = useAuth();

  if (loading) return <PageLoader />;

  if (!ALLOWED_EMAIL.includes(user?.email || "")) {
    return <Navigate to="/vault" />;
  }

  return children;
}
