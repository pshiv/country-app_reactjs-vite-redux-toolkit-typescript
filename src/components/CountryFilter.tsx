import React, { useState } from "react";
import CardComponent from "./CountryCard";

interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key : string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: Record<string, unknown>;
  startOfWeek: string;
  capitalInfo: {
    latlng: [number, number];
  };
}

type CountryFilterProps = {
  countries: Country[];
};

const CountryFilter: React.FC<CountryFilterProps> = ({ countries }) => {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [capital, setCapital] = useState("");
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countries);

  const handleFilter = () => {
    if (name != "" || region != "" || capital != "") {
      const filteredCountries = countries.filter((country) => {
        const matchName = country.name.common
          .toLowerCase()
          .includes(name.toLowerCase());
        const matchRegion = country.region
          .toLowerCase()
          .includes(region.toLowerCase());
        const matchCapital = country.capital?.some((c) =>
          c.toLowerCase().includes(capital.toLowerCase())
        );
        return matchName && matchRegion && matchCapital;
      });

      setFilteredCountries(filteredCountries);
    }
  };

  const resetHandle =()=>{
    setName("")
    setRegion("")
    setCapital("")
    setFilteredCountries(countries)
  }

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search by Country Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />        
        <input
          type="text"
          placeholder="Search by Capital"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
       <div className="button-wrapper">       
        <button className="search-btn" onClick={resetHandle}>
          Reset
        </button>
        <button className="search-btn" onClick={handleFilter}>
          Filter
        </button>
       </div>
      </div>

      <CardComponent countries={filteredCountries} />
    </>
  );
};

export default CountryFilter;
