export const updateArticles = (articles) => {
  return {
    type: "UPDATE",
    payload: {
      articles,
    },
  };
};

export const setCountry = (country) => {
  return {
    type: "SET_COUNTRY",
    payload: {
      country,
    },
  };
};

export const setPageSize = (size) => {
  return {
    type: "SET_PAGE_SIZE",
    payload: {
      size,
    },
  };
};

export const setMaxPageSize = (size) => {
  return {
    type: "SET_MAX_PAGE_SIZE",
    payload: {
      size,
    },
  };
};
