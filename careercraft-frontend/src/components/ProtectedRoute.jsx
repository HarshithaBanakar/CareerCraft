import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  // While Firebase checks authentication → show a loader
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  // If user not logged in → redirect to /welcome
  if (!user) {
    return <Navigate to="/welcome" replace />;
  }

  // Authenticated → render page
  return children;
}
