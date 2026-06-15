import { useState } from "react";
import { ThemeContext } from "./contextAPI.js";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
