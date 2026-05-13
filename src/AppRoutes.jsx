import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./pages/Main.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Exit from "./pages/PopExit.jsx";
import Browse from "./pages/PopBrowse.jsx";
import NewCard from "./pages/PopNewCard.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          {/* Главная страница */}
          <Route path="/" element={<MainPage loading={loading} />} />

          {/* Просмотр и редактирование карточки */}
          <Route path="/" element={<MainPage loading={loading} />}>
            <Route path="/card/:id" element={<Browse />} />
          </Route>

          {/* Добавление новой задачи */}
          <Route path="/" element={<MainPage loading={loading} />}>
            <Route path="/" element={<NewCard />} />
          </Route>
        </Route>

        {/* Страница входа */}
        <Route path="/login" element={<SignInPage setIsAuth={setIsAuth} />} />

        {/* Страница регистрации */}
        <Route path="/register" element={<SignUpPage />} />

        {/* Выход из аккаунта */}
        <Route path="/" element={<MainPage loading={loading} />}>
          <Route path="/exit" element={<Exit />} />
        </Route>

        {/* 404 */}
        <Route path="\*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
