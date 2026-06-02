import { GlobalStyle } from "./GlobalStyle.js";
import "./App.css";
import { Swrapper } from "./App.styled.js";
import AppRoutes from "./AppRoutes.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Swrapper>
        <AppRoutes />
      </Swrapper>
    </>
  );
}

export default App;
