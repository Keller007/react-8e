import React from "react";
import { Control } from "../components/Control";
import { List } from "../components/List";
import { Card } from "../components/Card";

export const HomePage = ({ countries }) => {
  const [filterCountries, setFilterCountries] = React.useState([]);

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((e) => e.region.includes(region));
    }
    if (search)
      data = data.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      );

    setFilterCountries(data);
  };

  React.useEffect(() => {
    handleSearch();
  }, [countries]); 
  return (
    <>
      <Control onSearch={handleSearch} />
      <List>
        {filterCountries.map((el) => {
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

          return <Card key={el.name} {...countryInfo} />;
        })}
      </List>
    </>
  );
};
