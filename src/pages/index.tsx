import React, { useState } from "react";
import CountryFilter from "../components/CountryFilter";

import useFetchData from "../customHooks/useFetchData";

const Index: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  //Custom Hooks Created (useFetchData) to get data from API
  const { loading, countries, error } = useFetchData(
    "https://restcountries.com/v3.1/all"
  );

  const toggleTheme = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };

  const style = {
    background: isDarkMode ? "#000" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    transition: "background-color 0.3s, color 0.3s",
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="wrapper" style={style}>
        <label className="switch">
          <input type="checkbox" id="togBtn" onClick={toggleTheme} />
          <div className="slider round">
            <span className="on">Dark</span>
            <span className="off">Light</span>
          </div>
        </label>
        <h2>Dashboard (Country)</h2>
        <CountryFilter countries={countries} />
      </div>
    </>
  );
};

export default Index;
