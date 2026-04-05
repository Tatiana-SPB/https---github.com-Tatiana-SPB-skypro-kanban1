import { CardsItem } from "./CardsItem";

export function Column() {
  return (
    <div className="main__content">
      <div className="main__column column">
        <div className="column__title">
          <p>Без статуса</p>
        </div>
        <div className="cards">
          <CardsItem text="Web Design" />
          <CardsItem text="Research" />
          <CardsItem text="Web Design" />
          <CardsItem text="Copywriting" />
          <CardsItem text="Web Design" />
        </div>
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>Нужно сделать</p>
        </div>
        <div className="cards">
          <CardsItem text="Research" />
        </div>
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>В работе</p>
        </div>
        <div className="cards">
          <CardsItem text="Research" />
          <CardsItem text="Copywriting" />
          <CardsItem text="Web Design" />
        </div>
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>Тестирование</p>
        </div>
        <div className="cards">
          <CardsItem text="Research" />
        </div>
      </div>
      <div className="main__column">
        <div className="column__title">
          <p>Готово</p>
        </div>
        <div className="cards">
          <CardsItem text="Research" />
        </div>
      </div>
    </div>
  );
}
