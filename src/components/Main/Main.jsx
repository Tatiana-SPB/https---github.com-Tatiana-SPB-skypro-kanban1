import { SColumn } from "../Column/Column.jsx";
//import { cardList } from "../../data.js";
import {
  Scontainer,
  Smain,
  Smain__block,
  Smain__content,
} from "./Main.styled.js";

export function SMain({ loading, error, tasks }) {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const groupedCards = statuses.reduce((acc, status) => {
    acc[status] = tasks.filter((card) => card.status === status);
    return acc;
  }, {});

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

  return (
    <Smain>
      <Scontainer>
        <Smain__block>
          <Smain__content>
            {statuses.map((status) => (
              <SColumn
                key={status}
                status={status}
                cards={groupedCards[status]}
              />
            ))}
          </Smain__content>
        </Smain__block>
      </Scontainer>
    </Smain>
  );
}

export default SMain;
