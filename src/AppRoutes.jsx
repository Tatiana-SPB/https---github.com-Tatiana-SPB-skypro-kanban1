import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainPage from "./pages/Main.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Exit from "./pages/PopExit.jsx";
import Browse from "./pages/PopBrowse.jsx";
import NewCard from "./pages/PopNewCard.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { PopExit } from "./components/popups/PopExit.jsx";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      try {
        const { token } = JSON.parse(userInfo);
        return !!token;
      } catch (error) {
        console.error("Ошибка парсинга userInfo:", error);
        return false;
      }
    }
    return false;
  });

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route
            path="/"
            element={<MainPage isAuth={isAuth} setIsAuth={setIsAuth} />}
          >
            <Route path="/card/:id" element={<Browse />} />
            <Route path="/add" element={<NewCard />} />
          </Route>
          <Route path="/exit" element={<PopExit setIsAuth={setIsAuth} />} />
        </Route>

        <Route path="/login" element={<SignInPage setIsAuth={setIsAuth} />} />

        <Route path="/register" element={<SignUpPage />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
