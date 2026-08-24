import { useNavigate, useParams } from "react-router-dom";
import { TasksContext } from "../../context/contextAPI.js";
import { useContext, useEffect, useState } from "react";
import { editTask, fetchTasks } from "../../services/api.js";
import {
  PopBrowse_block,
  PopBrowse_container,
  PopBrowse_content,
  PopBrowse_form,
  PopBrowse_form_block,
  PopBrowse_form_browse__area,
  PopBrowse_topBlock,
  PopBrowse_ttl,
  PopBrowse_wrap,
  Sbtn_browse__close_btn_bg,
  SPopBrowse,
} from "./PopBrowse.styled.js";
import { StyledCalendar } from "../Calendar/Calendar.styled.js";
import { Scalendar__p, Scalendar__period } from "./PopNewCard.styled.js";
import {
  Card_load,
  Item1__load,
  Item1_left_load,
  Item1_right_load,
  Item2__load,
  Item3__load,
} from "../Column/Column.styled.js";

export function PopBrowse() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentTask, setCurrentTask, getTask, deleteTask, setTasks } =
    useContext(TasksContext);

  const getToken = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const { token } = JSON.parse(userInfo);
      return token;
    }
    return null;
  };

  function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  }

  useEffect(() => {
    if (id) {
      getTask({ id });
    }
  }, [id]);

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setEditedTask((prev) => ({
      ...prev,
      description: value,
    }));
  };

  const getThemeClass = (topic) => {
    const themeMap = {
      Research: "_green",
      "Web Design": "_orange",
      Copywriting: "_purple",
    };
    return themeMap[topic] || "";
  };

  const handleOnClickDel = () => {
    const token = getToken();
    if (!token) {
      return;
    }
    deleteTask({ id });
    navigate("/");
    fetchTasks({ token });
  };

  const handleDateChange = (newDate) => {
    if (isEditing) {
      setEditedTask((prev) => ({
        ...prev,
        date: newDate,
      }));
    }
  };

  const handleEdit = () => {
    if (currentTask) {
      setEditedTask({ ...currentTask.task });
      setIsEditing(true);
    }
  };
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  const handleStatusChange = (newStatus) => {
    setEditedTask((prev) => ({
      ...prev,
      status: newStatus,
    }));
  };

  const updateTask = async () => {
    const token = getToken();
    if (!token) {
      return;
    }

    if (!editedTask) {
      return;
    }

    try {
      const updatedTasks = await editTask({
        token,
        id: editedTask._id,
        task: {
          title: editedTask.title,
          topic: editedTask.topic,
          status: editedTask.status,
          description: editedTask.description,
          date: editedTask.date,
        },
      });

      setCurrentTask((prev) => ({
        ...prev,
        task: editedTask,
      }));

      setTasks(updatedTasks);

      setIsEditing(false);
      setEditedTask(null);
    } catch (err) {
      console.error("Не удалось сохранить задачу:", err);
    }
  };

  const handleCancelEdit = () => {
    setEditedTask(null);
    setIsEditing(false);
  };
  if (!currentTask || !currentTask.task) {
    return (
      <Card_load>
        <Item1__load>
          <Item1_left_load></Item1_left_load>
          <Item1_right_load></Item1_right_load>
        </Item1__load>
        <Item2__load></Item2__load>
        <Item3__load></Item3__load>
      </Card_load>
    );
  } else {
    return (
      <SPopBrowse>
        <PopBrowse_container>
          <PopBrowse_block>
            <PopBrowse_content>
              <PopBrowse_topBlock>
                <PopBrowse_ttl>{currentTask.task.title}</PopBrowse_ttl>
                <div
                  className={`categories__theme theme-top ${getThemeClass(currentTask.task.topic)} _active-category`}
                >
                  <p className={getThemeClass(currentTask.task.topic)}>
                    {currentTask.task.topic}
                  </p>
                </div>
              </PopBrowse_topBlock>
              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>
                {!isEditing ? (
                  <div className="status__themes">
                    <div
                      className="status__theme _active-color"
                      style={{ cursor: "default" }}
                    >
                      <p>{currentTask.task.status}</p>
                    </div>
                  </div>
                ) : (
                  <div className="status__themes">
                    {statuses.map((status) => {
                      const isSelected = editedTask?.status === status;

                      return (
                        <div
                          key={status}
                          className="status__theme"
                          onClick={() => handleStatusChange(status)}
                          style={{
                            backgroundColor: isSelected
                              ? "#94a6be"
                              : "transparent",
                            color: isSelected ? "#ffffff" : "#333333",
                          }}
                        >
                          <p style={{ margin: 0, lineHeight: "1.2" }}>
                            {status}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                <PopBrowse_wrap>
                  <PopBrowse_form id="formBrowseCard" action="#">
                    <PopBrowse_form_block>
                      <label htmlFor="textArea01" className="subttl">
                        Описание задачи
                      </label>
                      <PopBrowse_form_browse__area
                        name="text"
                        id="textArea01"
                        placeholder="Введите описание задачи..."
                        value={
                          isEditing
                            ? editedTask?.description || ""
                            : currentTask?.task?.description || ""
                        }
                        onChange={
                          isEditing ? handleDescriptionChange : undefined
                        }
                        readOnly={!isEditing}
                      ></PopBrowse_form_browse__area>
                    </PopBrowse_form_block>
                  </PopBrowse_form>
                  <div className="pop-new-card__calendar calendar">
                    <p className="calendar__ttl subttl">Даты</p>
                    <StyledCalendar
                      value={
                        isEditing ? editedTask?.date : currentTask.task.date
                      }
                      onChange={handleDateChange}
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
                      <Scalendar__p>
                        Срок исполнения:{" "}
                        <span>
                          {formatDate(
                            isEditing
                              ? editedTask?.date || currentTask.task.date
                              : currentTask.task.date,
                          )}
                        </span>
                      </Scalendar__p>
                    </Scalendar__period>
                  </div>
                </PopBrowse_wrap>
                <div className="pop-browse__btn-browse ">
                  {!isEditing ? (
                    <div className="btn-group">
                      <button
                        className="btn-browse__edit _btn-bor _hover03"
                        onClick={handleEdit}
                      >
                        Редактировать задачу
                      </button>
                    </div>
                  ) : (
                    <div className="btn-group-edit">
                      <div className="pop-browse__btn-edit">
                        <button
                          className="btn-edit__save _btn-bg _hover01"
                          onClick={updateTask}
                        >
                          Сохранить
                        </button>
                        <button
                          className="btn-edit__edit _btn-bor _hover03"
                          onClick={handleCancelEdit}
                        >
                          Отменить
                        </button>
                      </div>
                    </div>
                  )}
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleOnClickDel}
                  >
                    Удалить задачу
                  </button>
                  <Sbtn_browse__close_btn_bg to="/">
                    Закрыть
                  </Sbtn_browse__close_btn_bg>
                </div>
              </div>
            </PopBrowse_content>
          </PopBrowse_block>
        </PopBrowse_container>
      </SPopBrowse>
    );
  }
}
