import "../App.css";
import { Header } from "../components/Header/Header.jsx";
import { SMain } from "../components/Main/Main.jsx";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/contextAPI.js";

const Swrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #eaeef6;
`;

const MainPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Swrapper
        style={{ backgroundColor: theme === "light" ? "#151419" : "#eaeef6" }}
      >
        <Header />
        <SMain />
        <Outlet />
      </Swrapper>
    </>
  );
};

export default MainPage;
