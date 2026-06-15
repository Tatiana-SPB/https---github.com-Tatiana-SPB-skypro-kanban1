import { createContext, useContext } from "react";

export const TasksContext = createContext();
export const UserContext = createContext();
export const ThemeContext = createContext();
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const useTheme = () => useContext(ThemeContext);
