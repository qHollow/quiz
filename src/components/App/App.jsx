import React, { useEffect, useMemo, useState } from "react";
import { createGlobalStyle } from "styled-components";

import OpenService from "../../service";

import QuestionCard from "../QuestionCard";
import Loader from "../Loader";

const Wrapper = createGlobalStyle`
  body {
    margin: 50px 0;
    padding: 0;
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
  }
`;
const service = new OpenService();

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [allAnswers, setAllAnswers] = useState([]);
  const [final, setFinal] = useState(false);

  useEffect(() => {
    service.getAllData().then((res) => {
      setData(res.results);
    });
  }, []);

  const nextPage = (e, answer) => {
    e.preventDefault();
    if (
      page < data.length - 1
    ) {
      setPage(page + 1);
      setAllAnswers([...allAnswers, answer]);
    }
    if (page === data.length - 1) {
      setFinal(true);
    }
  };

  return (
    <main>
      <Wrapper />
      {data.length === 0 ? (
        <Loader />
      ) : (
        <QuestionCard
          data={data[page]}
          nextPage={nextPage}
          final={final}
          allAnswers={allAnswers}
        />
      )}
    </main>
  );
};

export default App;
