import { useState } from "react";
import { Link } from "react-router-dom";
import { MAGIC_WORD } from "../consts/MagicWord";
import { useAuthContext } from "../contexts/AuthContext";
function Login() {
  const { login } = useAuthContext();
  const [magicWord, setMagicWord] = useState("");

  function handleInputChange(event) {
    setMagicWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (magicWord === MAGIC_WORD) {
      login();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={magicWord} onChange={handleInputChange} />
        <button type="submit">Iniciar sesión</button>
      </form>

      <Link to={"/"}>Back to Coffee</Link>
    </div>
  );
}

export default Login;
