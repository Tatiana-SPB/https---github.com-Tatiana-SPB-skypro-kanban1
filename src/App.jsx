import { useEffect, useState } from "react";
import { GlobalStyle } from "./components/GlobalStyle.jsx";
import "./App.css";
import { Header } from "./components/Header";
import { Swrapper } from "./App.styled.js";
import { PopBrowse } from "./components/popups/PopBrowse";
import { PopExit } from "./components/popups/PopExit";
import { PopNewCard } from "./components/popups/PopNewCard";
import { SMain } from "./components/Main.styled.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
