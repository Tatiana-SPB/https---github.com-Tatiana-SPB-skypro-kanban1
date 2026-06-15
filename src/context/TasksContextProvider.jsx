import { useCallback, useEffect, useState } from "react";
import { TasksContext } from "./contextAPI.js";
import { fetchTasks } from "../services/api";

export const TasksContextProvider = ({ children }) => {
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
    <TasksContext.Provider
      loading={loading}
      error={error}
      value={{ tasks: tasks }}
    >
      {children}
    </TasksContext.Provider>
  );
};
