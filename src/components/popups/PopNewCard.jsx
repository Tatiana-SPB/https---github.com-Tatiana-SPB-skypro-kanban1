import { Link, Navigate, useNavigate } from "react-router-dom";
import { StyledCalendar } from "../Calendar/Calendar.styled.js";
import { useContext, useState } from "react";
import { TasksContext } from "../../context/contextAPI.js";
import { Scalendar__p, Scalendar__period } from "./PopNewCard.styled.js";

export function PopNewCard() {
  const navigate = useNavigate();
  const { addTask } = useContext(TasksContext);
  const [date, setDate] = useState(new Date());

  function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // месяцы с 0
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  }

  const [formTask, setFormTask] = useState({
    title: "",
    topic: "",
    description: "",
    date: new Date(),
    status: "Без статуса",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormTask({
      ...formTask,
      [name]: value,
    });
  };

  const handleChangeTopic = (e) => {
    const { value } = e.target;
    setFormTask({
      ...formTask,
      topic: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const handleOnClick = () => {
    addTask(formTask);
    navigate("/");
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">
              &#10006;
            </Link>

            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                onSubmit={handleSubmit}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formTask.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formTask.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <StyledCalendar
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                  locale="ru"
                  formats={{
                    navigationLabel: (date, locale) => {
                      const month = new Intl.DateTimeFormat(locale, {
                        month: "long",
                      }).format(date);
                      const year = date.getFullYear();
                      return `${month} ${year}`;
                    },
                  }}
                />
                <input type="hidden" id="datepick_value" />
                <Scalendar__period>
                  {!date ? (
                    <Scalendar__p>Выберите срок исполнения</Scalendar__p>
                  ) : (
                    <Scalendar__p>
                      Срок исполнения: <span>{formatDate(date)}</span>
                    </Scalendar__p>
                  )}
                </Scalendar__period>
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <button
                  className={`categories__theme _orange ${formTask.topic === "Web Design" ? "_active-category" : ""}`}
                  value="Web Design"
                  onClick={handleChangeTopic}
                >
                  Web Design
                </button>
                <button
                  className={`categories__theme _green ${formTask.topic === "Research" ? "_active-category" : ""}`}
                  value="Research"
                  onClick={handleChangeTopic}
                >
                  Research
                </button>
                <button
                  className={`categories__theme _purple ${formTask.topic === "Copywriting" ? "_active-category" : ""}`}
                  value="Copywriting"
                  onClick={handleChangeTopic}
                >
                  Copywriting
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="form-new__create _hover01"
              id="btnCreate"
              disabled={isLoading}
              onClick={handleOnClick}
            >
              {isLoading ? "Создание..." : "Создать задачу"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
