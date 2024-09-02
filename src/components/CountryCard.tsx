import React from "react";
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
    [key: string]: {
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

type CardComponentProps = {
  countries: Country[];
};

const CardComponent: React.FC<CardComponentProps> = ({ countries }) => {
  return (
    <>
      <div className="main">
        <ul className="cards">
          {countries.map((country) => (
            <li className="cards_item" key={country.flag}>
              <div className="card">
                <div className="card_content">
                  <h2 className="card_title">Country: {country.name.common}</h2>
                  <div className="card_details">
                    <div>
                      <b>Capital:</b> {country.capital}
                    </div>                    
                    <div>
                      <b>Regin:</b> {country.region}
                    </div>
                    <div>
                      <b>Population:</b> {country.population}
                    </div>
                  </div>
                  <details className="show-more">
                    <summary>Show More details</summary>
                    <div>
                      <b>Currencies:</b>{" "}
                      {country.currencies &&
                        Object.entries(country.currencies).map(
                          ([code, { name, symbol }]) => (
                            <span key={code}>
                              {name} ({symbol})
                            </span>
                          )
                        )}
                    </div>
                    <div>
                      <b>Languages:</b>{" "}
                      {country.languages &&
                        Object.entries(country.languages).map(
                          ([code, name]) => <span key={code}>{name}, </span>
                        )}
                    </div>
                    <div>
                      <b>Time zones:</b> {country.timezones}
                    </div>
                  </details>
                  {/* <button className="btn card_btn">Get Details</button> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CardComponent;
