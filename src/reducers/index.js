// if (!localStorage.getItem("country") || !localStorage.getItem("pageSize")) {
//   //init localStorage
//   localStorage.setItem(
//     "country",
//     JSON.stringify({
//       id: "pl",
//       name: "Polska",
//     })
//   );
//   localStorage.setItem("pageSize", 10);
// }

// const country = JSON.parse(localStorage.getItem("country"));
// const initialState = {
//   articlesList: [],
//   country: {
//     id: country.id || "pl",
//     name: country.name || "Polska",
//   },
//   pageSize: localStorage.getItem("pageSize"),
//   maxPageSize: 10,
// };
import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        articlesList: [...action.payload.articles],
      };

    case "SET_COUNTRY":
      return {
        ...state,
        country: action.payload.country,
      };

    case "SET_PAGE_SIZE":
      return {
        ...state,
        pageSize: action.payload.size,
      };

    case "SET_MAX_PAGE_SIZE":
      return {
        ...state,
        maxPageSize: action.payload.size,
      };
  }
  return state;
};

export default rootReducer;
