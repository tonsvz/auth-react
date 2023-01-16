import React from "react";
import { Link } from "react-router-dom";
import { LOGOUT } from "../config/routes/paths";
function Private() {
  return (
    <div>
      <h1>Mi Cuenta</h1>
      <Link to={LOGOUT}>Cerrar sesión</Link>
    </div>
  );
}
export default Private;
