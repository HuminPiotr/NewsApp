export const updateArticles = (articles) => {
  console.log("acja" + articles);
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
  console.log(size);
  return {
    type: "SET_PAGE_SIZE",
    payload: {
      size,
    },
  };
};

export const setMaxPageSize = (size) => {
  console.log(size);
  return {
    type: "SET_MAX_PAGE_SIZE",
    payload: {
      size,
    },
  };
};
