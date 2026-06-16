import { useState } from "react";
import { AuthContext } from "./contextAPI.js";

const getInitialUser = () => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUser());

  const enter = ({ login, password, name }) => {

    const userData = {
      login,
      password,
      name,
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, enter, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
