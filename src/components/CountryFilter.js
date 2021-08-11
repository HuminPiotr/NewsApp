import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCountry } from "../actions";

const CountryFilter = ({ country, setCountry }) => {
  const countryOptions = [
    {
      id: "pl",
      name: "Polska",
    },
    {
      id: "cz",
      name: "Czechy",
    },
    {
      id: "de",
      name: "Niemcy",
    },
  ];

  const changeCountry = () => {
    const countryId = document.querySelector("#countries").value;
    const countryName = document.getElementById(countryId).innerText;
    setCountry({
      id: countryId,
      name: countryName,
    });
    localStorage.setItem(
      "country",
      JSON.stringify({
        id: countryId,
        name: countryName,
      })
    );
  };

  const countryOptionsList = countryOptions.map((country) => {
    return (
      <option value={country.id} id={country.id} key={country.id}>
        {country.name}
      </option>
    );
  });

  return (
    <div className="countryFilter">
      <label htmlFor="countries">Country: </label>
      <select
        name="countries"
        id="countries"
        className={"countryFilter__select"}
        onChange={changeCountry}
        value={country.id}
      >
        {countryOptionsList}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { country } = state;
  return { country };
};

const mapDispatchToProps = (dispatch) => ({
  setCountry: (country) => dispatch(setCountry(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryFilter);
