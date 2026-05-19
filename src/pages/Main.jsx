import "../App.css";
import { Header } from "../components/Header/Header.jsx";
import { PopBrowse } from "../components/popups/PopBrowse";
import { PopExit } from "../components/popups/PopExit";
import { PopNewCard } from "../components/popups/PopNewCard";
import { SMain } from "../components/Main/Main.jsx";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { fetchWords } from "../services/api.js";

const Swrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #eaeef6;
`;

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [words, setWords] = useState([]);
  const [error, setError] = useState("");
  const getWords = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchWords({
        token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
      });
      if (data) setWords(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    getWords();
  }, [getWords]);

  return (
    <>
      <Swrapper>
        <Header />
        <SMain loading={loading} error={error} words={words} />
        <Outlet />
      </Swrapper>
    </>
  );
};

export default MainPage;
