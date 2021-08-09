import React from "react";

import CountryFilter from "./components/CountryFilter";
import PageSizeFilter from "./components/PageSizeFilter";
import InfoNote from "./components/InfoNote";
import News from "./components/News";

export function App() {
  let country = "Polska";
  let pageSize = 10;
  return (
    <div className="container">
      <h1 className="header">News App</h1>
      <div className="filters">
        <CountryFilter />
        <PageSizeFilter />
      </div>
      <InfoNote pageSize={pageSize} country={country} />
      <div className="newsList">
        <News />
        <News />
        <News />
        <News />
      </div>
    </div>
  );
}
