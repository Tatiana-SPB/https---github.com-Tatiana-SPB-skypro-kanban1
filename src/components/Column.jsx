import { CardsItem } from "./CardsItem";

export function Column({ status, cards }) {
  if (cards.length > 0) {
    return (
      <div className="main__column column">
        <div className="column__title">
          <p>{status}</p>
        </div>
        <div className="cards">
          <div>
            {cards.map((cardEl) => (
              <CardsItem key={cardEl.id} card={cardEl} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main__column column">
        <div className="column__title">
          <p>{status}</p>
        </div>
        <div className="cards">Задач нет </div>
      </div>
    );
  }
}
