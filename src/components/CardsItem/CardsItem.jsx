import { useNavigate } from "react-router-dom";
import {
  Scard__btn,
  Scard__content,
  Scard__date,
  Scard__group,
  Scard__theme,
  Scard__title,
  Scards__card,
  Scards__item,
} from "./CardsItem.styled.js";
import { TasksContext } from "../../context/contextAPI.js";
import { useContext } from "react";

export const SCardsItem = ({ task }) => {
  const navigate = useNavigate();
  const { getTask } = useContext(TasksContext);

  function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // месяцы с 0
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  }

  const handleCardClick = (e) => {
    e.preventDefault();
    if (!task) return;
    getTask({ id: task._id });
    navigate(`/task/${task._id}`);
  };

  return (
    <>
      <Scards__item onClick={handleCardClick}>
        <Scards__card>
          <Scard__group>
            <Scard__theme theme={task.topic}>
              <p>{task.topic}</p>
            </Scard__theme>
            <Scard__btn>
              <div></div>
              <div></div>
              <div></div>
            </Scard__btn>
          </Scard__group>
          <Scard__content>
            <Scard__title>{task.title}</Scard__title>
            <Scard__date>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <g clipPath="url(#clip0_1_415)">
                  <path
                    d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_415">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>{formatDate(task.date)}</p>
            </Scard__date>
          </Scard__content>
        </Scards__card>
      </Scards__item>
    </>
  );
};

export default SCardsItem;
