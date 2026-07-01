import { TasksContext } from "../../context/contextAPI.js";
import SCardsItem from "../CardsItem/CardsItem.jsx";
import { Scards, Scolumn__title, Smain__column } from "./Column.styled.js";

export function SColumn({ status, tasks }) {
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
    )
}

export default SColumn;
