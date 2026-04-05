import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PopBrowse } from "./components/popups/PopBrowse";
import { PopExit } from "./components/popups/PopExit";
import { PopNewCard } from "./components/popups/PopNewCard";

function App() {
  return (
    <div className="wrapper">
      <PopExit />

      <PopNewCard />

      <PopBrowse />

      <Header />

      <Main />
    </div>
  );
}

export default App;
