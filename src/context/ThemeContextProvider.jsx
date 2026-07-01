import { useState } from "react";
import { ThemeContext } from "./contextAPI.js";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
