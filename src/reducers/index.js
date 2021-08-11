const initialState = {
  articlesList: [],
  country: JSON.parse(localStorage.getItem("country")),
  pageSize: localStorage.getItem("pageSize"),
  maxPageSize: 100,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      console.log(action.payload.articles);
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
