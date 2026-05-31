import { Link } from "react-router-dom";
import styled from "styled-components";

const SNotFound = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    background-color: #ffffff;
  }
`;

const NotFoundPage = () => {
  return (
    <SNotFound>
      Страница не найдена
      <Link to="/">На главную</Link>
    </SNotFound>
  );
};

export default NotFoundPage;
