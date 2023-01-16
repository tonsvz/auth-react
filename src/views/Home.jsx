import React from "react";
import { Link } from "react-router-dom";
import { LOGIN, PRIVATE } from "../config/routes/paths";
import { useAuthContext } from "../contexts/AuthContext";
export default function Home() {
  const { isAuthenticated } = useAuthContext();
  return (
    <div>
      <h1>Coffee and TV.</h1>
      <p>
        {isAuthenticated ? (
          <Link to={PRIVATE}>Sección privada</Link>
        ) : (
          <Link to={LOGIN}>Iniciar sesión</Link>
        )}
      </p>
    </div>
  );
}
