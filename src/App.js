import axios from "axios";
import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { HomePage } from "./Page/HomePage";
import { NotFound } from "./Page/NotFound";
import { Details } from "./Page/Details";
import { Route, Routes } from "react-router-dom";
import { ALL_COUNTRES } from "./config";

import "./style.css";

export default function App() {
  const [countries, setCountries] = React.useState([]);
  React.useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRES).then(({ data }) => setCountries(data));
  }, []);

  
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} />} />
          <Route path="country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}
