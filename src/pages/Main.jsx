import "../App.css";
import { Header } from "../components/Header/Header.jsx";
import { PopBrowse } from "../components/popups/PopBrowse";
import { PopExit } from "../components/popups/PopExit";
import { PopNewCard } from "../components/popups/PopNewCard";
import { SMain } from "../components/Main/Main.jsx";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { fetchTasks } from "../services/api.js";

const Swrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #eaeef6;
`;

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const getToken = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const { token } = JSON.parse(userInfo);
      return token;
    }
    return null;
  };

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      const token = getToken();
      if (!token) {
        setError("Токен авторизации не найден");
        return;
      }
      const data = await fetchTasks({ token });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <>
      <Swrapper>
        <Header />
        <SMain loading={loading} error={error} tasks={tasks} />
        <Outlet />
      </Swrapper>
    </>
  );
};

export default MainPage;
