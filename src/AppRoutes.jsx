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
import { PopExit } from "./components/popups/PopExit.jsx";

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
          <Route path="/" element={<MainPage loading={loading} />}>
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
