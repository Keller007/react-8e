import axios from "axios";
import React from "react";
import { Control } from "./components/Control";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./style.css";
import { ALL_COUNTRES } from "./config.js";
import { List } from "./components/List";
import { Card } from "./components/Card";

export default function App() {
  const [countries, setCountries] = React.useState([]);
  React.useEffect(() => {
    axios.get(ALL_COUNTRES).then(({ data }) => setCountries(data));
  }, []);
  return (
    <>
      <Header />
      <Main>
        <Control />
        <List>
          {countries.map((el) => {
            const countryInfo = {
              img: el.flags.png,
              name: el.name,
              info: [
                {
                  title: "Population",
                  description: el.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: el.region,
                },
                {
                  title: "Capital",
                  description: el.capital,
                },
              ],
            };

            return <Card key={el.title} {...countryInfo} />;
          })}
        </List>
      </Main>
    </>
  );
}
