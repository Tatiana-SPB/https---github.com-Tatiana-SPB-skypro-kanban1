import "./App.css";
import { Header } from "./components/HeaderComponents";
import { Main } from "./components/MainComponents";
import { PopBrowse } from "./components/popups/PopBrowseComponents";
import { PopExit } from "./components/popups/PopExitComponents";
import { PopNewCard } from "./components/popups/PopNewCardComponents";

function App() {
  return (
    <div class="wrapper">
      <PopExit />

      <PopNewCard />

      <PopBrowse />

      <Header />

      <Main />
    </div>
  );
}

export default App;
