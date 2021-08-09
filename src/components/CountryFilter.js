import React, { useState } from "react";

const CountryFilter = () => {
  const [country, setCountry] = useState("Polska");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="countryFilter">
      <p className="countryFilter__text">
        Country: &nbsp;
        <span
          className="countryFilter__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {country}
          <div
            className={
              isOpen
                ? "open countryFilter__button-triangle"
                : "countryFilter__button-triangle"
            }
          ></div>
        </span>
      </p>
      {isOpen && (
        <div className="countryFilter__menu">
          <p>Czechy</p>
          <p>Niemcy</p>
        </div>
      )}
    </div>
  );
};

export default CountryFilter;
