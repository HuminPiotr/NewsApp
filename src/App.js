import React, { useEffect, useState } from "react";
import "regenerator-runtime/runtime.js";
import { connect } from "react-redux";

import CountryFilter from "./components/CountryFilter";
import PageSizeFilter from "./components/PageSizeFilter";
import InfoNote from "./components/InfoNote";
import Article from "./components/Article";
import Spinner from "./components/Spinner";

import { updateArticles, setMaxPageSize } from "./actions";
import fetchData from "./utils/fetchData";

const App = ({
  country,
  pageSize,
  articlesList,
  updateArticles,
  setMaxPageSize,
}) => {
  const API_KEY = "8a525690c031443ab798692d9dec548a";
  let data;

  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    const link = `https://newsapi.org/v2/top-headlines?country=${country.id}&pageSize=${pageSize}&apiKey=${API_KEY}`;

    if (!loading) {
      setLoading(true);
      try {
        data = await fetchData(link);
        setMaxPageSize(data.totalResults);
        updateArticles(data.articles);
        setLoading(false);
      } catch (error) {
        alert(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    updateArticles([]);
    loadData();
  }, [country, pageSize]);

  const articleItemList = articlesList.map((article, index) => (
    <Article
      key={index}
      title={article.title}
      date={article.publishedAt}
      description={article.description}
      image={article.urlToImage}
      link={article.url}
    />
  ));

  return (
    <div className="container">
      <h1 className="header">News App</h1>
      <div className="filters">
        <CountryFilter isLoading={loading} />
        <PageSizeFilter isLoading={loading} />
      </div>
      <InfoNote />
      <div className="articlesList"> {articleItemList} </div>
      {loading ? <Spinner /> : null}
    </div>
  );
};

//redux
const mapStateToProps = (state) => {
  const { country, pageSize, articlesList } = state;
  return { country, pageSize, articlesList };
};

const mapDispatchToProps = (dispatch) => ({
  updateArticles: (articles) => dispatch(updateArticles(articles)),
  setMaxPageSize: (size) => dispatch(setMaxPageSize(size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
