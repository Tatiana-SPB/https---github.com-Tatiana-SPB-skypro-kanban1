import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext, TasksContext } from "./contextAPI.js";
import { apiAddTask, fetchTasks } from "../services/api";

export const TasksContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
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
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addTask = async ({ title, topic, status, description, date }) => {
    try {
      setLoading(true);
      const token = getToken();
      if (!token) {
        setError("Токен авторизации не найден");
        return;
      }

      // Отправляем задачу на сервер
      await apiAddTask({
        token,
        task: { title, topic, status, description, date },
      });

      // После успешного добавления обновляем список задач
      await getTasks();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <TasksContext.Provider
      loading={loading}
      error={error}
      value={{ tasks, setTasks, getTasks, addTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
