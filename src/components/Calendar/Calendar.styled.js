import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

export const StyledCalendar = styled(Calendar)`
  width: 350px;
  max-width: 100%;
  background: white;
  line-height: 1.125em;
  border: none;

  .react-calendar__navigation {
    display: flex;
    margin-bottom: 1em;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }

  .react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__month-view__days__day {
    color: #94a6be;
  }

  abbr {
    font-weight: 500;
    font-style: Medium;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: -2%;
    text-align: center;
    vertical-align: middle;
  }

  .react-calendar__navigation__prev-button {
    color: #94a6be;
    font-size: 20px;
    line-height: 1;
    order: 2;
    text-align: right;
    padding-right: 16px;
  }

  react-calendar__navigation button {
    min-width: 14px;
    background: none;
    text-align: right;
  }

  .react-calendar__navigation__label {
    text-align: left;
  }

  .react-calendar__navigation__label__labelText--from {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
    order: 1;
  }

  .react-calendar__navigation__next-button {
    color: #94a6be;
    font-size: 20px;
    line-height: 1;
    order: 3;
    text-align: right;
    padding-right: 7px;
  }

  .react-calendar__month-view__weekdays__weekday {
    color: #94a6be;
  }

  .react-calendar__tile--now {
    background-color: #eaeef6;
    color: #94a6be;
    border-radius: 50%;
  }

  .react-calendar__tile {
    font-size: 10px;
    line-height: 100%;
    padding-bottom: 7px;
    padding-top: 7px;
  }

  .react-calendar__tile--active {
    background: #94a6be;
    color: white;
    border-radius: 50%;
  }
`;
