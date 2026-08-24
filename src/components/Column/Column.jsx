import { useContext } from "react";
import { TasksContext } from "../../context/contextAPI.js";
import SCardsItem from "../CardsItem/CardsItem.jsx";
import {
  Card_load,
  Item1__load,
  Item1_left_load,
  Item1_right_load,
  Item2__load,
  Item3__load,
  Scards,
  Scolumn__title,
  Smain__column,
} from "./Column.styled.js";

export function SColumn({ status, tasks }) {
  const tasksContext = useContext(TasksContext);
  const { loading } = useContext(TasksContext);
  const isTasksReady = Array.isArray(tasksContext.tasks);

  if (loading || !isTasksReady) {
    return (
      <>
        <Card_load>
          <Item1__load>
            <Item1_left_load></Item1_left_load>
            <Item1_right_load></Item1_right_load>
          </Item1__load>
          <Item2__load></Item2__load>
          <Item3__load></Item3__load>
        </Card_load>
      </>
    );
  }

  return (
    <Smain__column>
      <Scolumn__title>
        <p>{status}</p>
      </Scolumn__title>
      <Scards>
        <div>
          {tasks.map((task) => (
            <SCardsItem key={task._id} task={task} />
          ))}
        </div>
      </Scards>
    </Smain__column>
  );
}

export default SColumn;
