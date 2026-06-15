import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import MainPage from "./pages/Main.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Exit from "./pages/PopExit.jsx";
import Browse from "./pages/PopBrowse.jsx";
import NewCard from "./pages/PopNewCard.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { PopExit } from "./components/popups/PopExit.jsx";
import { AuthContext } from "./context/contextAPI.js";

function AppRoutes() {
  const { user } = useContext(AuthContext);
  console.log({ user });
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isAuth={!!user} />}>
          <Route path="/" element={<MainPage />}>
            <Route path="/card/:id" element={<Browse />} />
            <Route path="/add" element={<NewCard />} />
          </Route>
          <Route path="/exit" element={<PopExit />} />
        </Route>

        <Route path="/login" element={<SignInPage />} />

        <Route path="/register" element={<SignUpPage />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
