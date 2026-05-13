import "../App.css";
import { Header } from "../components/Header/Header.jsx";
import { PopBrowse } from "../components/popups/PopBrowse";
import { PopExit } from "../components/popups/PopExit";
import { PopNewCard } from "../components/popups/PopNewCard";
import { SMain } from "../components/Main/Main.jsx";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Swrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #eaeef6;
`;

const MainPage = ({ loading }) => {
  return (
    <>
      <Swrapper>
        <Header />
        <SMain loading={loading} />
        <Outlet />
      </Swrapper>
    </>
  );
};

export default MainPage;
