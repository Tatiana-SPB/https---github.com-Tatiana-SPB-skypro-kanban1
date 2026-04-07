import { cardList } from "../data";
import { CardsItem } from "./CardsItem";

export function Column({ status }) {
  const filteredCards = cardList.filter((card) => card.status === status);

  if (filteredCards.length > 0) {
    return (
      <div className="main__column column">
        <div className="column__title">
          <p>{status}</p>
        </div>
        <div className="cards">
          <div>
            <CardsItem status={status} />
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
