import { Link, Navigate, useNavigate } from "react-router-dom";
import { Calendar } from "../Calendar/Calendar.jsx";
import { useContext, useState } from "react";
import { TasksContext } from "../../context/contextAPI.js";

export function PopNewCard() {
  const navigate = useNavigate();
  const { addTask } = useContext(TasksContext);

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
    console.log(e);
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

  console.log(formTask);

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
                <div className="calendar__block">
                  <div className="calendar__nav">
                    <div className="calendar__month">Сентябрь 2023</div>
                    <div className="nav__actions">
                      <div className="nav__action" data-action="prev">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                        >
                          <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </svg>
                      </div>
                      <div className="nav__action" data-action="next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                        >
                          <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <Calendar />

                  <input type="hidden" id="datepick_value" />
                  <div className="calendar__period">
                    <p className="calendar__p date-end">
                      Выберите срок исполнения{" "}
                      <span className="date-control"></span>.
                    </p>
                  </div>
                </div>
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
