import { Link, Navigate, useNavigate } from "react-router-dom";
import { StyledCalendar } from "../Calendar/Calendar.styled.js";
import { useContext, useState } from "react";
import { TasksContext } from "../../context/contextAPI.js";
import {
  Scalendar,
  Scalendar__p,
  Scalendar__period,
  Scalendar__ttl,
  Scategories,
  Scategories__p,
  Scategories__themes,
  Scategories__theme_orange,
  Scategories__theme_green,
  Scategories__theme_purple,
  Sform_new__area,
  Sform_new__block,
  Sform_new__input,
  SpopNewCard,
  SpopNewCard_block,
  SpopNewCard_close,
  SpopNewCard_container,
  SpopNewCard_content,
  SpopNewCard_form,
  SpopNewCard_ttl,
  SpopNewCard_wrap,
  Ssubttl,
  Sform_new__create,
} from "./PopNewCard.styled.js";

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
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const isBlank = (str) => !str || str.trim().length === 0;

  const validateForm = () => {
    const newErrors = { title: "", description: "", topic: "" };
    let isValid = true;

    if (isBlank(formTask.title)) {
      newErrors.title = "Введите название задачи";
      console.log("ошибка1");
      isValid = false;
    }

    if (isBlank(formTask.description)) {
      newErrors.description = "Укажите описание задачи";
      console.log("ошибка2");
      isValid = false;
    }

    if (!formTask.topic) {
      newErrors.topic = "Не выбрана категория";
      console.log("ошибка3");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

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

  const handleOnClick = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      addTask(formTask);
      navigate("/");
    } catch (err) {
      setErrors(err.message);
    }
  };

  return (
    <SpopNewCard>
      <SpopNewCard_container>
        <SpopNewCard_block>
          <SpopNewCard_content>
            <SpopNewCard_ttl>Создание задачи</SpopNewCard_ttl>
            <SpopNewCard_close to="/">&#10006;</SpopNewCard_close>

            <SpopNewCard_wrap>
              <SpopNewCard_form onSubmit={handleSubmit}>
                <Sform_new__block>
                  <Ssubttl>Название задачи</Ssubttl>
                  <Sform_new__input
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formTask.title}
                    onChange={handleChange}
                    style={errors.title ? { borderColor: "red" } : {}}
                  />
                  {errors.title && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "-14px",
                        display: "block",
                        marginBottom: "24px",
                      }}
                    >
                      {errors.title}
                    </span>
                  )}{" "}
                </Sform_new__block>
                <Sform_new__block>
                  <Ssubttl>Описание задачи</Ssubttl>
                  <Sform_new__area
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formTask.description}
                    onChange={handleChange}
                    style={errors.description ? { borderColor: "red" } : {}}
                  ></Sform_new__area>
                  {errors.description && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        display: "block",
                      }}
                    >
                      {errors.description}
                    </span>
                  )}
                </Sform_new__block>
              </SpopNewCard_form>
              <Scalendar>
                <Scalendar__ttl>Даты</Scalendar__ttl>
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
                <Scalendar__period>
                  {!date ? (
                    <Scalendar__p>Выберите срок исполнения</Scalendar__p>
                  ) : (
                    <Scalendar__p>
                      Срок исполнения: <span>{formatDate(date)}</span>
                    </Scalendar__p>
                  )}
                </Scalendar__period>
              </Scalendar>
            </SpopNewCard_wrap>
            <Scategories>
              <Scategories__p>Категория</Scategories__p>
              <Scategories__themes>
                <Scategories__theme_orange
                  $active={formTask.topic === "Web Design"}
                  value="Web Design"
                  onClick={handleChangeTopic}
                >
                  Web Design
                </Scategories__theme_orange>
                <Scategories__theme_green
                  $active={formTask.topic === "Research"}
                  value="Research"
                  onClick={handleChangeTopic}
                >
                  Research
                </Scategories__theme_green>

                <Scategories__theme_purple
                  $active={formTask.topic === "Copywriting"}
                  value="Copywriting"
                  onClick={handleChangeTopic}
                >
                  Copywriting
                </Scategories__theme_purple>
              </Scategories__themes>
              {errors.topic && (
                <span
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "8px",
                    display: "block",
                  }}
                >
                  {errors.topic}
                </span>
              )}
            </Scategories>
            <Sform_new__create
              type="submit"
              id="btnCreate"
              disabled={isLoading}
              onClick={handleOnClick}
            >
              {isLoading ? "Создание..." : "Создать задачу"}
            </Sform_new__create>
          </SpopNewCard_content>
        </SpopNewCard_block>
      </SpopNewCard_container>
    </SpopNewCard>
  );
}
