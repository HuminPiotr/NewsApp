import React from "react";
import { connect } from "react-redux";

const InfoNote = ({ pageSize, maxPageSize, country }) => (
  <p className="infoNote">
    Wyświetlono {pageSize > maxPageSize ? maxPageSize : pageSize} najnowszych
    wiadomości dla kraju: {country.name}
  </p>
);

//redux
const mapStateToProps = (state) => {
  const { pageSize, maxPageSize, country } = state;
  return { pageSize, maxPageSize, country };
};

export default connect(mapStateToProps)(InfoNote);
