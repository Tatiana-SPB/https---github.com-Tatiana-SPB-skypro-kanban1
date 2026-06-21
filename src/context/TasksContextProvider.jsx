import { useState } from "react";
import { AuthContext, TasksContext } from "./contextAPI.js";
import { apiAddTask, fetchTask, fetchTasks, remove } from "../services/api";

export const TasksContextProvider = ({ children }) => {
  //const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [error, setError] = useState("");

  const getToken = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const { token } = JSON.parse(userInfo);
      return token;
    }
    return null;
  };

  const getTasks = async () => {
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
      console.log(token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getTask = async ({ id }) => {
    try {
      setLoading(true);
      const token = getToken();
      if (!token) {
        setError("Токен авторизации не найден");
        return;
      }
      const task = await fetchTask({ token, id });
      if (!task) {
        setError("Задача не найдена");
        return;
      }
      setCurrentTask(task);
      console.log(token);
      console.log(id);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async ({ title, topic, status, description, date }) => {
    try {
      setLoading(true);
      const token = getToken();
      if (!token) {
        setError("Токен авторизации не найден");
        return;
      }
      const newTask = await apiAddTask({
        token,
        task: { title, topic, status, description, date },
      });

      setTasks((prevTasks) => [...prevTasks, newTask]);
      getTasks();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async ({ id }) => {
    try {
      setLoading(true);
      setError(null);

      const token = await getToken();
      if (!token) {
        setError("Токен авторизации не найден");
        return;
      }
      console.log(token);
      remove({ token, id });
     
    } catch (err) {
      console.error("Ошибка удаления задачи:", err);
      if (err.response?.status === 401) {
        setError("Требуется авторизация");
      } else if (err.response?.status === 404) {
        setError("Задача не найдена");
      } else {
        setError("Произошла ошибка при удалении задачи");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        currentTask,
        setCurrentTask,
        setTasks,
        getTasks,
        getTask,
        addTask,
        deleteTask,
        loading,
        error,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
