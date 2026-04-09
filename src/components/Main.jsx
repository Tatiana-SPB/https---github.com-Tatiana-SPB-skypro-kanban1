import { Column } from "./Column";
import { cardList } from "../data.js";

export function Main({ loading }) {
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
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {statuses.map((status) => (
                <Column
                  key={status}
                  status={status}
                  cards={groupedCards[status]}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
