import { createContext, useState } from "react";
import * as AuthService from "../services/AuthService";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState({ login: null });
  const [erro, setErro] = useState("");

  const login = async ({ email, senha }) => {
    try {
      await AuthService.signIn({
        email: email,
        password: senha,
        returnSecureToken: true,
      });
      setUsuario({ login: email, logado: true });
      setErro("");
    } catch (err) {
      setErro(err.message);
    }
  };

  const logout = () => {
    setUsuario({ login: null });
    setErro("");
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, erro }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
