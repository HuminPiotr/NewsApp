import React from "react";

const InfoNote = ({ pageSize, country }) => (
  <p className="infoNote">
    Wyświetlono {pageSize} najnowszych wiadomości dla kraju: {country}{" "}
  </p>
);

export default InfoNote;
