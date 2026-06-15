import { useState } from "react";
import { AuthContext } from "./contextAPI.js";

const accessUser = {
  login: "anna@gmail.com",
  password: "111",
  name: "Анна",
};

const getInitialUser = () => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUser());

  const enter = ({ login, password, name }) => {
    console.log(user);

    if (login === accessUser.login && password === accessUser.password) {
      const userData = {
        login,
        password,
        name: name || accessUser.name,
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={ user, enter, logout }>
      {children}
    </AuthContext.Provider>
  );
};
