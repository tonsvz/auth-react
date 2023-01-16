import React from "react";
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
function Logout() {
  const { logout } = useAuthContext();
  useEffect(() => logout());
  return null;
}
export default Logout;
