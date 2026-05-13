import { SColumn } from "./Column.styled.jsx";
import { cardList } from "../data.js";
import {
  Scontainer,
  Smain,
  Smain__block,
  Smain__content,
} from "./Main.styled.js";

export function SMain({ loading }) {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const groupedCards = statuses.reduce((acc, status) => {
    acc[status] = cardList.filter((card) => card.status === status);
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
  } else {
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
}

export default SMain;
