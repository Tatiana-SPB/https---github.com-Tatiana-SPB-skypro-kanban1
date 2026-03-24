import { CardsItemCopywriting } from "./CardsItemCopywritingComponents";
import { CardsItemResearch } from "./CardsItemResearchComponents";
import { CardsItemWebDesign } from "./CardsItemWebDesignComponents";

export function Column() {
  return (
    <div class="main__content">
      <div class="main__column column">
        <div class="column__title">
          <p>Без статуса</p>
        </div>
        <div class="cards">
          <CardsItemWebDesign />
          <CardsItemResearch />
          <CardsItemWebDesign />
          <CardsItemCopywriting />
          <CardsItemWebDesign />
        </div>
      </div>
      <div class="main__column">
        <div class="column__title">
          <p>Нужно сделать</p>
        </div>
        <div class="cards">
          <CardsItemResearch />
        </div>
      </div>
      <div class="main__column">
        <div class="column__title">
          <p>В работе</p>
        </div>
        <div class="cards">
          <CardsItemResearch />
          <CardsItemCopywriting />
          <CardsItemWebDesign />
        </div>
      </div>
      <div class="main__column">
        <div class="column__title">
          <p>Тестирование</p>
        </div>
        <div class="cards">
          <CardsItemResearch />
        </div>
      </div>
      <div class="main__column">
        <div class="column__title">
          <p>Готово</p>
        </div>
        <div class="cards">
          <CardsItemResearch />
        </div>
      </div>
    </div>
  );
}
