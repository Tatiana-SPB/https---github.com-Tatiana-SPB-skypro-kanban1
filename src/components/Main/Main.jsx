import { useContext, useEffect } from "react";
import { SColumn } from "../Column/Column.jsx";
import {
  Scontainer,
  Smain,
  Smain__block,
  Smain__content,
} from "./Main.styled.js";
import { TasksContext, ThemeContext } from "../../context/contextAPI.js";
import {
  Card_load,
  Item1__load,
  Item1_left_load,
  Item1_right_load,
  Item2__load,
  Item3__load,
  Scolumn__title,
} from "../Column/Column.styled.js";

export function SMain() {
  const tasksContext = useContext(TasksContext);
  const { theme } = useContext(ThemeContext);
  const { loading, tasks } = useContext(TasksContext);

  useEffect(() => {
    tasksContext.getTasks();
  }, []);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const safeTasks = Array.isArray(tasks) ? tasks : [];

  const tasksForColumns = statuses.reduce((acc, status) => {
    acc[status] = safeTasks.filter((task) => task.status === status);
    return acc;
  }, {});

  if (loading) {
    return (
      <Smain>
        <Scontainer>
          <Smain__block>
            <Smain__content>
              <Card_load>
                <Item1__load>
                  <Item1_left_load></Item1_left_load>
                  <Item1_right_load></Item1_right_load>
                </Item1__load>
                <Item2__load></Item2__load>
                <Item3__load></Item3__load>
              </Card_load>
            </Smain__content>
          </Smain__block>
        </Scontainer>
      </Smain>
    );
  }
  if (!safeTasks.length) {
    return (
      <Smain
        style={{
          backgroundColor: theme === "light" ? "#151419" : "#eaeef6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <Scontainer style={{ textAlign: "center" }}>
          <h3>Доска пуста</h3>
          <p>
            Здесь пока нет ни одной задачи. Добавьте первую, чтобы начать
            работу!
          </p>
        </Scontainer>
      </Smain>
    );
  }
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
}

export default SMain;
