import { GlobalStyle } from "./components/GlobalStyle.js";
import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header.styled.jsx";
import { PopBrowse } from "./components/popups/PopBrowse";
import { PopExit } from "./components/popups/PopExit";
import { PopNewCard } from "./components/popups/PopNewCard";
import { SMain } from "./components/Main.styled.jsx";
import { Swrapper } from "./App.styled.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <>
      <GlobalStyle />
      <Swrapper>
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header />

        <SMain loading={loading} />
      </Swrapper>
    </>
  );
}

export default App;
