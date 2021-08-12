if (!localStorage.getItem("country") || !localStorage.getItem("pageSize")) {
  //init localStorage
  localStorage.setItem(
    "country",
    JSON.stringify({
      id: "pl",
      name: "Polska",
    })
  );
  localStorage.setItem("pageSize", 10);
}

const country = JSON.parse(localStorage.getItem("country"));

const initialState = {
  articlesList: [],
  country: {
    id: country.id,
    name: country.name,
  },
  pageSize: localStorage.getItem("pageSize"),
  maxPageSize: 10,
};

export default initialState;
