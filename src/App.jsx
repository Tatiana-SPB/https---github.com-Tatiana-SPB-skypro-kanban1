import { GlobalStyle } from "./GlobalStyle.js";
import "./App.css";
import { Swrapper } from "./App.styled.js";
import AppRoutes from "./AppRoutes.jsx";
import { useContext } from "react";
import { ThemeContext } from "./context/contextAPI.js";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyle />
      <Swrapper
        style={{ backgroundColor: theme === "light" ? "#151419" : "#eaeef6" }}
      >
        <AppRoutes />
      </Swrapper>
    </>
  );
}

export default App;
