import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Calendar } from "../Calendar/Calendar.jsx";
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

export function PopBrowse() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentTask, setCurrentTask, getTask, deleteTask } =
    useContext(TasksContext);

  const getToken = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const { token } = JSON.parse(userInfo);
      return token;
    }
    return null;
  };

  useEffect(() => {
    if (id) {
      getTask({ id });
    }
  }, []);

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
    console.log({ id });
    deleteTask({ id });
    navigate("/");
    fetchTasks({ token });
  };

  console.log(currentTask);

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

  const updateTask = () => {
    const token = getToken();
    if (!token) {
      return;
    }

    editTask({
      token,
      id: editedTask.id,
      task: editedTask,
    });

    // Обновляем currentTask после успешного сохранения
    setCurrentTask((prev) => ({
      ...prev,
      task: editedTask,
    }));

    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTask(null);
    setIsEditing(false);
  };

  return (
    <SPopBrowse>
      <PopBrowse_container>
        <PopBrowse_block>
          <PopBrowse_content>
            <PopBrowse_topBlock>
              <PopBrowse_ttl>{currentTask.task.title}</PopBrowse_ttl>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </PopBrowse_topBlock>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {statuses.map((status) => (
                  <div
                    key={status}
                    className={`status__theme ${
                      editedTask?.status === status ? "_active" : ""
                    }`}
                    onClick={() => isEditing && handleStatusChange(status)}
                    style={{ cursor: isEditing ? "pointer" : "default" }}
                  >
                    <p
                      className={
                        editedTask?.status === status ? "_active-color" : ""
                      }
                    >
                      {status}
                    </p>
                  </div>
                ))}
              </div>
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
                      onChange={isEditing ? handleDescriptionChange : undefined}
                      readOnly={!isEditing}
                    ></PopBrowse_form_browse__area>
                  </PopBrowse_form_block>
                </PopBrowse_form>
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

                    <input
                      type="hidden"
                      id="datepick_value"
                      value="08.09.2023"
                    />
                    <div className="calendar__period">
                      <p className="calendar__p date-end">
                        Срок исполнения:{" "}
                        <span className="date-control">
                          {currentTask.task.date}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </PopBrowse_wrap>
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div
                  className={`categories__theme ${getThemeClass(currentTask.task.topic)} _active-category`}
                >
                  <p className={getThemeClass(currentTask.task.topic)}>
                    {currentTask.task.topic}
                  </p>
                </div>
              </div>
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={handleEdit}
                  >
                    <a href="#">Редактировать задачу</a>
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleOnClickDel}
                  >
                    Удалить задачу
                  </button>
                </div>
                <Sbtn_browse__close_btn_bg to="/">
                  Закрыть
                </Sbtn_browse__close_btn_bg>
              </div>
              <div className="pop-browse__btn-edit _hide">
                <div className="btn-group">
                  {isEditing && (
                    <button
                      className="btn-edit__save _btn-bg _hover01"
                      onClick={updateTask}
                    >
                      Сохранить
                    </button>
                  )}
                  {isEditing && (
                    <button
                      className="btn-edit__edit _btn-bor _hover03"
                      onClick={handleCancelEdit}
                    >
                      Отменить
                    </button>
                  )}
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleOnClickDel}
                  >
                    Удалить задачу
                  </button>
                </div>
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
