import { useContext, useEffect } from "react";
import { SColumn } from "../Column/Column.jsx";
import {
  Scontainer,
  Smain,
  Smain__block,
  Smain__content,
} from "./Main.styled.js";
import { TasksContext, ThemeContext } from "../../context/contextAPI.js";
import { Scolumn__title } from "../Column/Column.styled.js";

export function SMain({ loading, error }) {
  const tasksContext = useContext(TasksContext);
  const { theme } = useContext(ThemeContext);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const tasksForColumns = statuses.reduce((acc, status) => {
    acc[status] = tasksContext.tasks.filter((task) => task.status === status);
    return acc;
  }, {});

  useEffect(() => {
    tasksContext.getTasks();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          color: "green",
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: 1,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        Данные загружаются
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center" }}>Ошибка: {error}</div>
    );
  }

  if (tasksContext.tasks.length > 0) {
    return (
      <Smain
        style={{ backgroundColor: theme === "light" ? "#151419" : "#eaeef6" }}
      >
        <Scontainer>
          <Smain__block>
            <Smain__content>
              {statuses.map((status) => (
                <SColumn
                  key={status}
                  status={status}
                  tasks={tasksForColumns[status]}
                />
              ))}
            </Smain__content>
          </Smain__block>
        </Scontainer>
      </Smain>
    );
  } else {
    return (
      <Smain>
        <Scolumn__title style={{ textAlign: "center" }}>
          <p>Задач нет</p>
        </Scolumn__title>
      </Smain>
    );
  }
}

export default SMain;
