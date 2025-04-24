import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { session } = useAuth();

  if (session === undefined) {
    return <div>Carregando...</div>;
  }

  return <div>{session ? <>{children}</> : <Navigate to="/signup" />}</div>;
};

export default PrivateRoute;
