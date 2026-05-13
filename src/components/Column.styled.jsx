import SCardsItem from "./CardsItem.styled.jsx";
import { Scards, Scolumn__title, Smain__column } from "./Column.styled.js";

export function SColumn({ status, cards }) {
  if (cards.length > 0) {
    return (
      <Smain__column>
        <Scolumn__title>
          <p>{status}</p>
        </Scolumn__title>
        <Scards>
          <div>
            {cards.map((cardEl) => (
              <SCardsItem key={cardEl.id} card={cardEl} />
            ))}
          </div>
        </Scards>
      </Smain__column>
    );
  } else {
    return (
      <Smain__column>
        <Scolumn__title>
          <p>{status}</p>
        </Scolumn__title>
        <Scards>Задач нет </Scards>
      </Smain__column>
    );
  }
}

export default SColumn;
